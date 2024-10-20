'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ChangeLeader } from './change-leader';
import { User } from '../../users/(components)/columns';

export type Venue = {
  id: string;
  name: string;
  address: string;
  capacity: number;
  staffLeaders: User[];
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
  {
    accessorKey: 'staffLeaders',
    header: 'Líderes de staff',
    cell: ({ row }) => {
      if (!row.original.staffLeaders.length) return 'Sem líderes';
      return row.original.staffLeaders.map((leader) => leader.username).join(', ');
    },
  },
  {
    header: 'Ações',
    cell: ({ row }) => {
      return <ChangeLeader venue={row.original} />;
    },
  },
];
