/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\about\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Wednesday, March 5th 2025, 12:07:00 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { MaxWidthWrapper, MinHeader } from '@/components';
import { aboutHeaderImg } from '@public/about';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="space-y-0 w-full">
      <MinHeader label="About" title="About" />

      <section className="w-full h-[660px]">
        <MaxWidthWrapper className="flex items-center w-full h-full">
          <div className="space-y-8 w-1/2">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-gray-200">2007-2025</h1>

              <h3 className="text-6xl font-medium tracking-wide text-black">
                We share knowledge with the world
              </h3>
            </div>

            <p className="w-[30rem] text-base text-gray-300">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
              Donec non ipsum non risus egestas tincidunt at vitae nulla.{' '}
            </p>
          </div>

          <div className="grid place-items-center w-1/2 h-full">
            <Image
              src={aboutHeaderImg}
              alt="about header image"
              width={600}
              height={600}
              className="w-[500px] h-[400px] 2xl:w-[672px] 2xl:h-[500px] object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Page;
