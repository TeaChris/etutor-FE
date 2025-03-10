'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useEffect } from 'react';

import { useSession } from '@/store';
import { ROLES } from '@/types';
import { toast } from 'sonner';

const Context = createContext({});
const { Provider } = Context;

type RestrictedRoutesType = {
  [key: string]: ROLES[];
};

const unprotectedRoutes = [
  '/', // home page
  '/about', // about page
  '/course', // course page (added as per your request)
  '/contact', // contact page
  '/create-account',
];

const authPages = ['/sign-in', '/reset-password', '/verify-email'];

export const RESTRICTED_ROUTES: RestrictedRoutesType = {
  '/instructor': [ROLES.INSTRUCTOR],
  '/admin': [ROLES.ADMIN],
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    user,
    loading,
    actions: { getSession },
  } = useSession((state) => state);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    getSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loading) return;

    if (authPages.includes(pathName) && user) {
      router.push('/');
    } else if (!user && !authPages.includes(pathName)) {
      toast.error('You are not logged in');
      router.push('/sign-in');
    } else {
      const requiredRoles = new Set(RESTRICTED_ROUTES[pathName] || []);
      const hasNoRequiredRoles =
        requiredRoles.size === 0 ||
        user?.auth.roles.some((role) => role.slug === ROLES.ADMIN);
      const userIsAllowed = user?.auth?.roles.some((userRole) =>
        requiredRoles.has(userRole.slug as ROLES),
      );

      if (!hasNoRequiredRoles && !userIsAllowed) {
        toast.error('You do not have access to this page');
        router.push('/');
      }
    }
  }, [loading, user, pathName, router]);

  const isUnprotectedPage = unprotectedRoutes.includes(pathName);

  const showLoading = !isUnprotectedPage && loading;

  return showLoading ? (
    <div className="grid w-screen h-screen place-items-center">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  ) : (
    <Provider value={{}}>{children}</Provider>
  );
};
