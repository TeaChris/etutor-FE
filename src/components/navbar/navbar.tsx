import Link from 'next/link';
import { MaxWidthWrapper } from '../max-width-wrapper';
import Image from 'next/image';
import { bell, heart, logo, shoppingCartSimple } from '@public/navbar';
import {
  Button,
  buttonVariants,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui';

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
        <MaxWidthWrapper
          className="h-full flex items-center justify-between"
          isLarge
        >
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
        <MaxWidthWrapper
          className="h-full flex items-center justify-between"
          isLarge
        >
          <div className="flex items-center gap-x-7">
            <Image src={logo} alt="Logo" width={130} height={130} />

            <Select>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Browse" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-80 relative h-fit">
              <Input placeholder="Search" className=" pl-8" />
            </div>
          </div>

          <div className="flex items-center gap-x-0.5">
            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: 'ghost',
              })}
            >
              <Image src={bell} alt="Login" width={24} height={24} />
            </Link>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: 'ghost',
              })}
            >
              <Image src={heart} alt="Login" width={24} height={24} />
            </Link>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: 'ghost',
              })}
            >
              <Image
                src={shoppingCartSimple}
                alt="Login"
                width={24}
                height={24}
              />
            </Link>

            <div className="flex gap-x-4">
              <button className="px-2 py-0.5 rounded-sm bg-primary-100">
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: 'link',
                    className: 'no-underline',
                  })}
                >
                  Create account
                </Link>
              </button>

              <Button className="mr-4">
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export { Navbar };
