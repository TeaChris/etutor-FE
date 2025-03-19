/*
 * Filename: c:\Users\LENOVO\etutor\e-tutor\src\app\(auth)\sign-in\page.tsx
 * Path: c:\Users\LENOVO\etutor\e-tutor
 * Created Date: Wednesday, March 19th 2025, 2:53:57 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 PendulumHq
 */

'use client';

import {
  Button,
  FormError,
  FormSuccess,
  Icons,
  Input,
  Label,
} from '@/components';
import { callApi, cn, signInSchema, TSignInSchema } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { apple, google, signIn } from '@public/auth';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Page = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: TSignInSchema) => {
    setIsPending(true);
    setShowPassword(false);

    const formData = {
      email: values.email,
      password: values.password,
      remember: rememberMe,
    };

    const { data, error } = await callApi('/auth/sign-in', {
      ...formData,
    });

    if (data) {
      setSuccess(data.message);
      setIsPending(false);
      setError('');
      reset();
      return;
    }

    if (error) {
      setSuccess('');
      setError(error.message);
      setIsPending(false);
      return;
    }
  };
  return (
    <main className="flex w-full h-full">
      <div className="w-1/2 h-full overflow-hidden bg-secondary-100">
        <Image
          src={signIn}
          alt="create account image"
          width={700}
          height={700}
        />
      </div>

      <div className="grid w-1/2 h-full place-items-center">
        <form
          className="flex flex-col items-center w-3/4 gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
          </>

          <h1 className="text-4xl font-bold text-gray-900">
            Sign into your account
          </h1>

          <div className="w-full space-y-4">
            <div className="w-full space-y-1">
              <Label htmlFor="username">Username</Label>

              <Input
                placeholder="Email or username"
                {...register('email')}
                className={cn({
                  'focus-visible:ring-red-500': errors.email,
                })}
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="w-full space-y-1">
              <Label htmlFor="password">Password</Label>

              <div className="flex justify-between w-full">
                <Input
                  placeholder="Input password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={cn({
                    'focus-visible:ring-red-500': errors.password,
                  })}
                />

                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="space-y-0.5">
                <div className="flex gap-x-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe((e.target as HTMLInputElement).checked)
                    }
                    className="custom-checkbox"
                  />

                  <Label>Remember me</Label>
                </div>
              </div>

              <Button className="flex gap-x-2 item-center" disabled={isPending}>
                Sign in <Icons.rightArrow className="mt-1" size={17} />
              </Button>
            </div>

            <div className="relative grid w-full h-4 mt-5 place-item">
              <div aria-hidden="true" className="w-full h-0.5 bg-gray-100" />

              <div className="absolute -top-3 left-[40%] p-0.5 text-sm text-gray-500 bg-white">
                Sign up with
              </div>
            </div>

            <div className="grid w-full h-max place-items-center">
              <div className="flex pt-4 gap-x-8">
                {[
                  { icon: google, text: 'google' },
                  { icon: apple, text: 'apple' },
                ].map((item, i) => (
                  <button
                    className="flex w-32 h-10 border border-gray-200 disabled:cursor-not-allowed"
                    disabled
                    key={i}
                  >
                    <div className="w-[30%] grid place-items-center h-full border-r">
                      <Image src={item.icon} alt="" width={18} height={18} />
                    </div>

                    <div className="grid w-4/5 text-gray-500 place-items-center">
                      {item.text}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
