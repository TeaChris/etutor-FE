/*
 * ############################################################################### *
 * Created Date: Mo Mar 2025                                                   *
 * Author: Boluwatife Olasunkanmi O.                                           *
 * -----                                                                       *
 * Last Modified: Mon Mar 10 2025                                              *
 * Modified By: Boluwatife Olasunkanmi O.                                      *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ############################################################################### *
 */
import { IUser } from './user';

export type ApiResponse<T = Record<string, unknown>> = {
  status: string;
  message: string;
  data: T;
};

export interface ApiError {
  message: string;
  status: string | number;
  error?: unknown;
  headers?: Record<string, unknown>;
}

export type SelectorFn<TStore, TResult> = (state: TStore) => TResult;

export enum ROLES {
  ADMIN = 'admin',
  INSTRUCTOR = 'instructor',
  STUDENT = 'student',
}

interface Role {
  name: string;
  _id: string;
  slug: string;
}

export interface Roles {
  [key: string]: Role;
}

export type GetSessionApiResponse = {
  user: IUser;
  roles: Roles;
};

export * from './user';
