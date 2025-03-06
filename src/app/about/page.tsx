/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\about\page.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Wednesday, March 5th 2025, 12:07:00 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { Button, Icons, MaxWidthWrapper, MinHeader } from '@/components';
import {
  aboutHeaderImg,
  circleCheck,
  gallery,
  globe,
  google,
  lenovo,
  lexmark,
  microsoft,
  mission,
  netflix,
  notebook,
  slack,
  stack,
  usersIcon,
  verizon,
  youtube,
} from '@public/about';
import Image from 'next/image';
// import Link from 'next/link';

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

      <section className="pb-20 w-full">
        <MaxWidthWrapper className="grid place-items-center space-y-12">
          <div className="flex justify-between items-center w-full">
            <div className="space-y-4 w-[29%]">
              <h3 className="text-3xl font-medium tracking-wider text-black">
                We Just keep growing with 6.3k Companies
              </h3>

              <p className="text-base text-gray-300">
                Nullam egestas tellus at enim ornare tristique. Class aptent
                taciti sociosqu ad litora torquent
              </p>
            </div>

            <div className="grid grid-cols-4 gap-x-3 gap-y-6 w-3/5">
              {[
                netflix,
                youtube,
                google,
                lenovo,
                slack,
                verizon,
                lexmark,
                microsoft,
              ].map((img, i) => (
                <div
                  className="w-[150px] h-[60px] bg-white shadow-lg grid place-items-center"
                  key={i}
                >
                  <Image
                    src={img}
                    alt="partner company logo"
                    width={70}
                    height={70}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid place-items-center w-full">
            <div className="flex gap-x-12">
              {[
                {
                  icon: usersIcon,
                  title: '67.1k',
                  label: 'students',
                },
                {
                  icon: notebook,
                  title: '26k',
                  label: 'certified instructors',
                },
                {
                  icon: globe,
                  title: '72',
                  label: 'country languages',
                },
                {
                  icon: circleCheck,
                  title: '99.9%',
                  label: 'success rate',
                },
                {
                  icon: stack,
                  title: '57',
                  label: 'trusted company',
                },
              ].map((item) => {
                return (
                  <article
                    className="flex gap-x-4 items-start"
                    key={item.title}
                  >
                    <Image alt="icon" src={item.icon} width={25} height={25} />

                    <div className="space-y-1">
                      <h6 className="text-xl font-bold">{item.title}</h6>

                      <p className="text-base text-gray-400">{item.label}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full h-[436px] bg-primary-100">
        <MaxWidthWrapper className="flex justify-between items-center w-full h-full">
          <div className="w-1/2 h-full">
            <Image
              src={mission}
              alt="mission section image"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="pl-20 space-y-16 w-1/2">
            <div className="space-y-2">
              <h6 className="text-base font-semibold text-primary-500">
                OUR ONE BILLION MISSION
              </h6>

              <h3 className="w-[30rem] text-4xl font-bold text-black">
                Our one billion mission sounds bold, We agree.
              </h3>

              <p className="text-base text-gray-500">
                &apos;We cannot solve our problems with the same thinking we
                used when we created them.&apos;—Albert Einstein. Institutions
                are slow to change. Committees are where good ideas and
                innovative thinking go to die. Choose agility over dogma.
                Embrace and drive change. We need to wipe the slate clean and
                begin with bold, radical thinking.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full bg-gray-50 h-[724px]">
        <MaxWidthWrapper className="flex items-center h-full">
          <div className="space-y-8 w-2/6">
            <div className="space-y-2">
              <h6 className="text-base font-semibold text-primary-500">
                OUR GALLERY
              </h6>

              <h3 className="w-72 text-4xl font-bold text-black">
                We’ve been here almost 17 years
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-base text-gray-500">
                Fusce lobortis leo augue, sit amet tristique nisi commodo in.
                Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
                libero. Curabitur in urna ligula. torquent per conubia nostra.
              </p>

              <Button className="flex gap-x-2 items-center">
                Join our team <Icons.rightArrow size={16} className="mt-1" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden w-[75%] pl-10 h-full">
            <Image
              src={gallery}
              alt="gallery image"
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="pt-12 w-full">
        <MaxWidthWrapper className="grid place-items-center">
          <div className="flex gap-x-8">
            {[
              {
                text: 'Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.',
                name: 'Sundar Pichai',
                title: 'Chief Chairman of',
                company: 'Google',
              },
              {
                text: 'Edugaurd responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers.',
                name: 'Satya Nadella',
                title: 'CEO of',
                company: 'Microsoft',
              },
              {
                text: 'In total, it was a big success, I would get emails about what a fantastic resource it was.',
                name: 'Ted Sarandos',
                title: 'Chief Executive Officer of',
                company: 'Netflix',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="w-[350px] space-y-5 flex flex-col items-center"
              >
                <article
                  className="
    relative
    w-full
    h-[205px]
    bg-gray-50
    grid
    place-items-center
    
    before:content-['“']
    before:absolute
    before:top-2
    before:left-2
    before:text-orange-500
    before:text-7xl

    
    after:content-['”']
    after:absolute
    after:-bottom-2
    after:right-2
    after:text-orange-500
    after:text-7xl
  "
                >
                  <p className="w-60 text-base text-center text-gray-900">
                    {item.text}
                  </p>

                  <div
                    className="
      absolute
      -bottom-2
      left-1/2
      -translate-x-1/2
      w-2
      h-2
      border-l-[8px]
      border-l-transparent
      border-r-[8px]
      border-r-transparent
      border-t-[8px]
      border-t-gray-50
    "
                  />
                </article>

                <div className="flex flex-col items-center gap-y-0.5">
                  <h6 className="text-sm text-gry-900">{item.name}</h6>
                  <p className="text-sm text-gry-500">
                    {item.title}{' '}
                    <span className="text-blue-600">{item.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Page;
