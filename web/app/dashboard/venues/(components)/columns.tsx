'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Venue = {
  id: string;
  name: string;
  address: string;
  capacity: number;
};

export const columns: ColumnDef<Venue>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'address',
    header: 'Local',
  },
  {
    accessorKey: 'capacity',
    header: 'Capacidade',
  },
];
