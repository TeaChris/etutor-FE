import Link from 'next/link';
import { MaxWidthWrapper } from '../max-width-wrapper';
import Image from 'next/image';
import { logo } from '@public/navbar';

const topnav = [
  {
    label: 'Home',
    route: '/',
  },

  {
    label: 'Courses',
    route: '/courses',
  },

  {
    label: 'About',
    route: '/about',
  },

  {
    label: 'Contact',
    route: '/contact',
  },

  {
    label: 'Become an Instructor',
    route: '/',
  },
];

const Navbar = () => {
  return (
    <div className="w-screen h-[148px] space-y-0">
      <div className="bg-black w-full h-[45%]">
        <MaxWidthWrapper className="h-full flex items-center justify-between">
          <div className="flex items-center gap-x-7">
            {topnav.map((nav) => (
              <Link key={nav.label} href={nav.route}>
                <span className="text-gray-500 text-sm font-semibold">
                  {nav.label}
                </span>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="w-full h-[55%] bg-transparent border-b border-gray-500">
        <MaxWidthWrapper className="h-full flex items-center justify-between">
          <div className="flex items-center gap-x-7">
            <Image src={logo} alt="Logo" width={130} height={130} />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export { Navbar };
