'use client';

import { ColumnDef } from '@tanstack/react-table';

export type User = {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'organizer' | 'staff_leader' | 'staff' | 'speaker' | 'participant';
  registrationDate: Date;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Cargo',
  },
  {
    accessorKey: 'registrationDate',
    header: 'Data de registro',
  },
];
