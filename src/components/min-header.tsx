/*
 * Filename: c:\Users\LENOVO\e-tutor\src\components\min-header.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Wednesday, March 5th 2025, 12:09:17 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { cn } from '@/lib';
import Link from 'next/link';

const MinHeader = ({
  className,
  title,
  label,
}: {
  className?: string;
  title: string;
  label: string;
}) => {
  return (
    <section
      className={cn(
        'w-full h-24 bg-gray-50 grid place-items-center',
        className,
      )}
    >
      <div className="space-y-1.5 flex flex-col items-center">
        <h3 className="font-bold text-xl">{title}</h3>

        <div className="flex items-center gap-x-1.5">
          <Link href="/" className="text-sm text-gray-500">
            Home
          </Link>

          <p className="text-black text-sm text-semibold">/</p>

          <Link href="/about" className="text-sm text-black text-semibold">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export { MinHeader };
