import { Button } from '@/components';
import { headerImg } from '@public/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="space-y-16 w-screen">
      <section className="w-full bg-gray-50 h-[548px]">
        <div className="flex justify-between items-center w-full h-full">
          <div className="space-y-8 pl-20 w-1/2">
            <h1 className="xl:w-[40rem] text-6xl tracking-wider font-semibold text-black">
              Learn with expert anytime anywhere
            </h1>

            <p className="text-lg font-medium text-gray-800 xl:w-[35rem] lg-pb-8">
              Our mission is to help people to find the best course online and
              learn with expert anytime, anywhere.
            </p>

            <Button>
              <Link href="/create-account">Create account</Link>
            </Button>
          </div>

          <div className="w-1/2 h-full overflow-hidden">
            <Image
              src={headerImg}
              alt="header image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
