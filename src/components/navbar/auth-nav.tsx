/*
 * Filename: c:\Users\LENOVO\e-tutor\src\components\navbar\auth-nav.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:14:24 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

'use client';

import { logo } from '@public/navbar';
import { MaxWidthWrapper } from '../max-width-wrapper';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const AuthNav = () => {
  const pathname = usePathname();
  return (
    <nav className="w-screen h-[70px] bg-white border-b border-gray-100">
      <MaxWidthWrapper className="flex justify-between items-center h-full">
        <Image src={logo} alt="Logo" width={130} height={130} />

        <div className="flex gap-x-4 items-center">
          <p className="text-sm text-gray-600">
            {pathname.includes('/create-account')
              ? 'Already have an account?'
              : `Don't have an account?`}
          </p>

          {pathname.includes('/create-account') ? (
            <Link
              href="/sign-in"
              className="grid place-items-center w-24 h-11 font-semibold text-white bg-primary-500"
            >
              Sign in
            </Link>
          ) : (
            <Link
              href="/create-account"
              className="grid place-items-center w-32 h-11 font-semibold text-primary-500 bg-primary-100"
            >
              Create account
            </Link>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export { AuthNav };
