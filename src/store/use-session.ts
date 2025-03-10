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

import { toast } from 'sonner';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

import { callApi } from '@/lib/call-api';
import type { GetSessionApiResponse, IUser, Roles, SelectorFn } from '@/types';

type Session = {
  loading: boolean;
  user: IUser | undefined;
  roles: Roles | undefined;
  adminUsers: IUser[];

  actions: {
    updateRoles: (value: Roles) => void;
    clearSession: () => void;
    signOut: () => Promise<void>;
    getRoles: () => Promise<void>;
    getSession: () => Promise<void>;
    updateUser: (user: IUser) => void;
    getAdminUsers: () => Promise<void>;
    updateAdmins: (users: IUser[]) => void;
    updateAdminUsers: (user: IUser) => void;
    triggerForbiddenError: () => void;
  };
};

const initialState = {
  loading: true,
  user: undefined,
  roles: undefined,
  adminUsers: [],
};

export const useInitSession = create<Session>()((set, get) => ({
  ...initialState,

  actions: {
    getSession: async () => {
      const { data, error } =
        await callApi<GetSessionApiResponse>('/admin/session');
      if (error) {
        toast.error(error?.message);
        return;
      }

      if (data) {
        set({
          user: data?.data?.user,
          roles: data?.data?.roles,
          loading: false,
        });
      }
    },
    updateUser: (data) => set({ user: data }),
    updateRoles: (value) => set({ roles: value }),

    clearSession: () => {
      set({
        ...initialState,
        loading: false,
      });
    },
    triggerForbiddenError: () => {
      set({
        loading: false,
      });
    },
    getRoles: async () => {
      const { data, error } = await callApi<Roles>('/admin/fetch-all-roles');
      if (!data) {
        toast.error(error?.message);
        return;
      }

      set({
        roles: data.data,
      });
    },

    getAdminUsers: async () => {
      const { data, error } = await callApi<IUser[]>('/admin/fetch-all-users');
      if (!data) {
        toast.error(error?.message);
        return;
      }

      set({
        adminUsers: data.data,
      });
    },
    updateAdmins: (users) => set({ adminUsers: users }),
    updateAdminUsers: (user) =>
      set((state) => ({
        adminUsers: [user, ...(state.adminUsers ?? [])],
      })),

    signOut: async () => {
      // optimistically clear session
      // log out on frontend before calling the API
      get().actions.clearSession();
      await callApi('/admin/sign-out', {});
    },
  } satisfies Session['actions'],
}));

export const useSession = <TResult>(selector: SelectorFn<Session, TResult>) => {
  const state = useInitSession(useShallow(selector));

  return state;
};
