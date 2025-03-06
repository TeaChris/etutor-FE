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
          className="flex justify-between items-center h-full"
          isLarge
        >
          <div className="flex gap-x-7 items-center">
            {topnav.map((nav) => (
              <Link key={nav.label} href={nav.route}>
                <span className="text-sm font-semibold text-gray-500">
                  {nav.label}
                </span>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="w-full h-[55%] bg-transparent border-b border-gray-200">
        <MaxWidthWrapper
          className="flex justify-between items-center h-full"
          isLarge
        >
          <div className="flex gap-x-7 items-center">
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

            <div className="relative w-80 h-fit">
              <Input placeholder="Search" className="pl-8" />
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
              <Link
                href="/create-account"
                className="grid place-items-center w-32 h-11 font-semibold text-primary-500 bg-primary-100"
              >
                Create account
              </Link>

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
