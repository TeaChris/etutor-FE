/*
 * Filename: c:\Users\LENOVO\etutor\e-tutor\src\app\(auth)\verify-email\page.tsx
 * Path: c:\Users\LENOVO\etutor\e-tutor
 * Created Date: Wednesday, March 19th 2025, 8:37:54 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 PendulumHq
 */

'use client';

import { FormError } from '@/components';
import { callApi } from '@/lib';
import { createAccount } from '@public/auth';

import Image from 'next/image';
import { redirect, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  if (!token) {
    redirect('/auth/login');
  }

  const verifyEmail = async () => {
    setIsPending(true);

    const { data, error } = await callApi('auth/verify-email', { token });

    if (data) {
      toast.success(data.message);
      redirect('/auth/login');
    }

    if (error) {
      setError(error.message);
    }

    setIsPending(false);
  };

  useEffect(() => {
    verifyEmail();

    //eslint-disable-next-line
  }, []);

  return (
    <main className="flex w-full h-full">
      <div className="w-1/2 h-full overflow-hidden bg-secondary-100">
        <Image
          src={createAccount}
          alt="create account image"
          width={700}
          height={700}
        />
      </div>

      <div className="grid w-1/2 h-full place-items-center">
        {error && <FormError message={error} />}

        {isPending && (
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner text-primary-500"></span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
