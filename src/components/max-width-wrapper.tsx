/*
 * Filename: c:\Users\LENOVO\e-tutor\src\components\max-width-wrapper.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Friday, February 14th 2025, 2:11:09 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 PendulumHq
 */

import { cn } from '@/lib';

const MaxWidthWrapper = ({
  isLarge,
  children,
  className,
}: {
  isLarge?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        isLarge && 'max-w-[90rem]',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { MaxWidthWrapper };
