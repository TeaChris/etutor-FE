/*
 * Filename: c:\Users\LENOVO\etutor\e-tutor\src\app\(auth)\create-account\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:23:13 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

'use client';

import {
  Button,
  Checkbox,
  FormError,
  FormSuccess,
  Icons,
  Input,
  Label,
} from '@/components';
import { apple, createAccount, google } from '@public/auth';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { callApi, cn, createAccountSchema, TCreateAccountSchema } from '@/lib';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TCreateAccountSchema>({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = async (values: TCreateAccountSchema) => {
    setIsPending(true);

    const formData = {
      email: values.email,
      password: values.password,
      lastName: values.lastName,
      userName: values.username,
      firstName: values.firstName,
      terms: values.termsAndConditions,
    };

    const { data, error } = await callApi('/auth/create-account', {
      ...formData,
    });

    if (data) {
      setIsPending(false);
      setSuccess(data.message);
      router.push('/verify-email');
      return;
    }

    if (error) {
      setError(error.message);
      setIsPending(false);
      return;
    }

    reset();
  };

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
        <form
          className="flex flex-col items-center w-3/4 gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
          </>

          <h1 className="text-4xl font-bold text-gray-900">
            Create your account
          </h1>

          <div className="w-full space-y-4">
            <div className="w-full space-y-1">
              <Label htmlFor="names">Full name</Label>

              <div className="flex justify-between w-full">
                <div className="w-[48%] space-y-0.5">
                  <Input
                    placeholder="Last name"
                    className={cn('w-full', {
                      'focus-visible:ring-red-500': errors.firstName,
                    })}
                  />

                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="w-[48%] space-y-0.5">
                  <Input
                    placeholder="Last name"
                    className={cn('w-full', {
                      'focus-visible:ring-red-500': errors.lastName,
                    })}
                  />

                  {errors.lastName && (
                    <p className="text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full space-y-1">
              <Label htmlFor="username">Username</Label>

              <Input
                placeholder="Username"
                {...register('username')}
                className={cn({
                  'focus-visible:ring-red-500': errors.username,
                })}
              />

              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="w-full space-y-1">
              <Label htmlFor="email">Email</Label>

              <Input
                placeholder="Email"
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
                <div className="w-[48%] space-y-0.5 relative">
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

                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer right-1 top-1/2">
                    {showPassword ? (
                      <Icons.eye
                        onClick={() => setShowPassword(false)}
                        className="text-gray-600"
                        size={18}
                      />
                    ) : (
                      <Icons.eyeOff
                        onClick={() => setShowPassword(true)}
                        className="text-gray-600"
                        size={18}
                      />
                    )}
                  </div>
                </div>

                <div className="w-[48%] space-y-0.5 relative">
                  <Input
                    placeholder="Input password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.confirmPassword,
                    })}
                  />

                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}

                  <div className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer right-1 top-1/2">
                    {showPassword ? (
                      <Icons.eye
                        onClick={() => setShowPassword(false)}
                        className="text-gray-600"
                        size={18}
                      />
                    ) : (
                      <Icons.eyeOff
                        onClick={() => setShowPassword(true)}
                        className="text-gray-600"
                        size={18}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="space-y-0.5">
                <div className="flex gap-x-2">
                  <Checkbox
                    {...register('termsAndConditions')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.termsAndConditions,
                    })}
                  />

                  <Label>
                    I agree with all of you{' '}
                    <span className="text-blue-500">Terms & condition</span>
                  </Label>
                </div>

                {errors.termsAndConditions && (
                  <p className="text-sm text-red-500">
                    {errors.termsAndConditions.message}
                  </p>
                )}
              </div>

              <Button
                className="flex gap-x-2 item-center"
                disabled={isPending || !isValid}
              >
                Create account <Icons.rightArrow className="mt-1" size={17} />
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
