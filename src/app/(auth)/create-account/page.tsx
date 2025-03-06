/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\(auth)\create-account\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:23:13 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

'use client';

import { Button, Checkbox, Icons, Input, Label } from '@/components';
import { apple, createAccount, facebook, google } from '@public/auth';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn, createAccountSchema, TCreateAccountSchema } from '@/lib';
import { useState } from 'react';

const Page = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
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

    console.log(formData);

    reset();
  };

  return (
    <main className="flex w-full h-full">
      <div className="overflow-hidden w-1/2 h-full bg-secondary-100">
        <Image
          src={createAccount}
          alt="create account image"
          width={700}
          height={700}
        />
      </div>

      <div className="grid place-items-center w-1/2 h-full">
        <form
          className="flex flex-col gap-y-12 items-center w-3/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Create your account
          </h1>

          <div className="space-y-4 w-full">
            <div className="space-y-1 w-full">
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

            <div className="space-y-1 w-full">
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

            <div className="space-y-1 w-full">
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

            <div className="space-y-1 w-full">
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
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
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

            <div className="grid relative mt-5 w-full h-4 place-item">
              <div aria-hidden="true" className="w-full h-0.5 bg-gray-100" />

              <div className="absolute -top-3 left-[40%] p-0.5 text-sm text-gray-500 bg-white">
                Sign up with
              </div>
            </div>

            <div className="flex gap-x-8 pt-4">
              {[
                { icon: google, text: 'google' },
                { icon: facebook, text: 'facebook' },
                { icon: apple, text: 'apple' },
              ].map((item, i) => (
                <button
                  className="flex w-40 h-10 border border-gray-200"
                  key={i}
                >
                  <div className="w-[30%] grid place-items-center h-full border-r">
                    <Image src={item.icon} alt="" width={18} height={18} />
                  </div>

                  <div className="grid place-items-center w-4/5 text-gray-500">
                    {item.text}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
