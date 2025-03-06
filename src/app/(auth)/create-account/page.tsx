/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\(auth)\create-account\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:23:13 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { Button, Checkbox, Icons, Input, Label } from '@/components';
import { createAccount } from '@public/auth';
import Image from 'next/image';

const Page = () => {
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
        <form className="flex flex-col gap-y-12 items-center w-3/4">
          <h1 className="text-4xl font-bold text-gray-900">
            Create your account
          </h1>

          <div className="space-y-4 w-full">
            <div className="space-y-1 w-full">
              <Label htmlFor="names">Full name</Label>

              <div className="flex justify-between w-full">
                <Input placeholder="First name" className="w-[48%]" />
                <Input placeholder="Last name" className="w-[48%]" />
              </div>
            </div>

            <div className="space-y-1 w-full">
              <Label htmlFor="username">Username</Label>

              <Input placeholder="Username" />
            </div>

            <div className="space-y-1 w-full">
              <Label htmlFor="email">Email</Label>

              <Input placeholder="Email" />
            </div>

            <div className="space-y-1 w-full">
              <Label htmlFor="password">Password</Label>

              <div className="flex justify-between w-full">
                <Input
                  placeholder="Input password"
                  className="w-[48%]"
                  type="password"
                />
                <Input
                  placeholder="Confirm password"
                  className="w-[48%]"
                  type="password"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-x-2">
                <Checkbox />

                <Label>
                  I agree with all of you{' '}
                  <span className="text-blue-500">Terms & condition</span>
                </Label>
              </div>

              <Button className="flex gap-x-2 item-center">
                Create account <Icons.rightArrow className="mt-1" size={17} />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
