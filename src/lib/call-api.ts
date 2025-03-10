/*
 * ############################################################################### *
 * Created Date: Mo Mar 2025                                                   *
 * Author: Boluwatife Olasunkanmi O.                                           *
 * -----                                                                       *
 * Last Modified: Mon Mar 10 2025                                              *
 * Modified By: Boluwatife Olasunkanmi O.                                      *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ############################################################################### *
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { ApiError, ApiResponse } from '@/types';

import { useInitSession } from '@/store';

import { toast } from 'sonner';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASEURL) {
  throw new Error('add BASEURL to your env file');
}

export const isObject = (value: unknown): value is Record<string, unknown> => {
  const isArray = Array.isArray(value);
  const isFormData = value instanceof FormData;
  const isObject = typeof value === 'object' && value !== null;

  return !isArray && !isFormData && isObject;
};

const apiClient: AxiosInstance = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

export const callApi = async <T>(
  endpoint: string,
  data?: Record<string, unknown> | FormData,
  extraMethods?: 'PUT' | 'DELETE' | 'PATCH',
): Promise<{ data?: ApiResponse<T>; error?: ApiError }> => {
  const cancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse<ApiResponse<T>> = await apiClient.request<
      ApiResponse<T>
    >({
      method:
        extraMethods && data
          ? extraMethods
          : data && !extraMethods
            ? 'POST'
            : 'GET',
      url: endpoint,
      ...(data && { data }),
      headers: {
        'x-referrer':
          process.env.NEXT_PUBLIC_FRONTEND_URL ?? 'https://www.e-tutor.com',
        ...(isObject(data)
          ? {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }
          : {
              'Content-Type': 'multipart/form-data',
            }),
      },
      cancelToken: cancelTokenSource.token,
    });

    return { data: response.data };
  } catch (error) {
    let apiError: ApiError | undefined;
    if (axios.isCancel(error)) {
      console.error('Previous request was canceled');
    }
    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response;
      apiError = data;
      switch (status) {
        case 401:
          {
            useInitSession.getState().actions.clearSession();
          }
          break;
        case 429:
          // Show toast: Too many request
          toast.error(error.message);
          console.error('Bad request');
          break;
        case 500:
          // internal server error
          // redirect to error page
          toast.error(error.message);
          console.error(`Internal server error`);
          break;
        case 422:
          // email has not been verified
          toast.error(error.message);
          break;
        // case 403: {
        //   // trigger otp check
        //   if (data.message.includes('FORBIDDEN')) {
        //     useInitSession.getState().actions.triggerForbiddenError();
        //   } else {
        //     useInitSession.getState().actions.triggerOTPCheck(true);
        //   }
        //   break;
        // }
        default:
          console.error(`Unknown API error: ${status}`);
      }
    } else {
      if (error instanceof Error) {
        apiError = { message: error.message, status: 'Error' };
      }
    }
    return { error: apiError };
  }
};
