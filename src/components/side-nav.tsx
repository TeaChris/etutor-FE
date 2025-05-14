import { cn } from '@/lib';

import Link from 'next/link';

const SideNav = () => {
  return (
    <aside className="w-full h-full space-y-2">
      <div className="w-full h-[7%] border-b border-neutral-300 grid place-items-center">
        <h3 className="text-neutral-600 text-2xl font-extrabold tracking-wide">
          Bermuda
        </h3>
      </div>

      <div className={cn('pt-4 flex flex-col space-y-4')}>
        {[
          {
            label: 'Dashboard',
            link: '/dashboard',
          },
          {
            label: 'Dashboard',
            link: '/dashboard',
          },
          {
            label: 'Dashboard',
            link: '/dashboard',
          },
          {
            label: 'Dashboard',
            link: '/dashboard',
          },
        ].map((item, i) => (
          <Link key={i} className="w-full h-6 " href={item.link}></Link>
        ))}
      </div>
    </aside>
  );
};

export { SideNav };
