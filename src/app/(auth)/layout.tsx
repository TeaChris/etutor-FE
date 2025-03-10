/*
 * Filename: c:\Users\LENOVO\e-tutor\src\app\(auth)\layout.tsx
 * Path: c:\Users\LENOVO\e-tutor
 * Created Date: Thursday, March 6th 2025, 10:03:18 am
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 Hq
 */

import { AuthNav } from '@/components';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="space-y-0 w-screen h-screen">
      <AuthNav />
      <div className="w-full h-[calc(100vh-70px)]">{children}</div>
    </main>
  );
}
