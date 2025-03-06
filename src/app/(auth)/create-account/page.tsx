/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\(auth)\create-account\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:23:13 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

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
    </main>
  );
};

export default Page;
