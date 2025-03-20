/*
 * Filename: c:\Users\LENOVO\etutor\e-tutor\src\app\(students)\layout.tsx
 * Path: c:\Users\LENOVO\etutor\e-tutor
 * Created Date: Thursday, March 20th 2025, 2:58:32 pm
 * Author: Boluwatife Olasunkanmi O.
 *
 * Copyright (c) 2025 PendulumHq
 */

import { Navbar } from '@/components';

export default function StudentLayout({
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
