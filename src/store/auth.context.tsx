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
  '/',
  '/about',
  '/sign-in',
  '/contact',
  '/verify-email',
  '/create-account',
  '/reset-password',
];

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

  // call getSession on mount once
  useEffect(() => {
    getSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <>
        <div className="grid w-screen h-screen place-items-center">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm animate-pulse">Loading...</p>
          </div>
        </div>
      </>
    );

  if (unprotectedRoutes.includes(pathName) && user) {
    router.push('/');
    return null;
  }

  if (unprotectedRoutes.includes(pathName) && user) {
    router.push('/');
    return null;
  }

  if (
    !user &&
    pathName !== '/sign-in' &&
    pathName !== '/reset-password' &&
    pathName !== '/verify-email'
  ) {
    toast.error('You are not logged in');
    router.push('/sign-in');
    return null;
  }

  const requiredRoles = new Set(RESTRICTED_ROUTES[pathName]);
  const noRequiredRoles =
    requiredRoles.size === 0 ||
    user?.auth.roles.some((role) => role.slug === ROLES.ADMIN);
  const userIsAllowed = user?.auth?.roles.some((userRole) =>
    requiredRoles.has(userRole.slug as ROLES),
  );

  if (!noRequiredRoles && !userIsAllowed) {
    toast.error('You do not have access to this page');
    router.push('/');
    return null;
  }

  return <Provider value={{}}>{children}</Provider>;
};
