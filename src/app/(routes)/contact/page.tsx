/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\contact\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 9:23:08 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { Button, Icons, MaxWidthWrapper, MinHeader } from '@/components';
import { branch1, branch2, branch3, branch4, fit, map } from '@public/contact';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="space-y-0 w-full">
      <MinHeader label="Contact" title="Contact" />

      <section className="w-full h-[540px]">
        <MaxWidthWrapper className="flex items-center w-full h-full">
          <div className="space-y-8 w-1/2">
            <h3 className="text-6xl font-medium tracking-wide text-black">
              Connect with us
            </h3>

            <p className="w-[30rem] text-base text-gray-300">
              Want to chat? We’d love to hear from you! Get in touch with our
              Customer Success Team to inquire about speaking events,
              advertising rates, or just say hello.
            </p>

            <Button className="flex items-center gap-x-1.5">
              <Icons.message size={17} className="mt-1" /> Copy email
            </Button>
          </div>

          <div className="grid place-items-center w-1/2 h-full">
            <Image
              src={fit}
              alt="about header image"
              width={600}
              height={600}
              className="w-[500px] h-[400px] 2xl:w-[672px] 2xl:h-[500px] object-cover"
            />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full h-[580px]">
        <MaxWidthWrapper className="grid place-items-center h-full">
          <div className="flex flex-col gap-y-6 items-center">
            <h3 className="text-3xl font-semibold text-gray-900">
              Our branches all over the world.
            </h3>

            <h6 className="w-[30rem] text-lg text-center text-gray-600">
              Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
              imperdiet id leo quis, luctus auctor nisi.{' '}
            </h6>

            <div className="flex justify-between w-full">
              {[branch1, branch2, branch3, branch4].map((img, i) => (
                <div className="w-[23%] overflow-hidden h-[365px]" key={i}>
                  <Image
                    src={img}
                    alt="branches image"
                    width={700}
                    height={700}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full h-[600px] bg-gray-50">
        <MaxWidthWrapper className="flex flex-col items-center pt-12 space-y-8 h-full">
          <h3 className="text-3xl font-semibold text-gray-900">Contact Us</h3>
        </MaxWidthWrapper>
      </section>

      <section className="w-full h-[300px] overflow-hidden">
        <Image
          alt="map"
          src={map}
          width={700}
          height={700}
          className="object-cover w-full h-full"
        />
      </section>
    </main>
  );
};

export default Page;
