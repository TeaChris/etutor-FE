/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\(routes)\layout.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:07:18 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { Navbar } from '@/components';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <Navbar />

      <div className="w-full">{children}</div>
    </main>
  );
}
