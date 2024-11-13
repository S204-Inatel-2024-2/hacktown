'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Lecture = {
  _id: string;
  name: string;
  description: string;
  location: string;
  capacity: number;
  startDate: Date;
  endDate: Date;
  venues: string[];
};

export const columns: ColumnDef<Lecture>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'location',
    header: 'Local',
  },
  {
    accessorKey: 'capacity',
    header: 'Capacidade',
  },
  {
    accessorKey: 'startDate',
    header: 'Data da palestra',
    cell: ({ row }) => new Date(row.original.startDate).toLocaleDateString('pt-br'),
  },
  {
    header: 'Horário da palestra',
    cell: ({ row }) => {
      const startDate = new Date(row.original.startDate);
      const endDate = new Date(row.original.endDate);

      return `${startDate.toLocaleTimeString('pt-br')} - ${endDate.toLocaleTimeString('pt-br')}`;
    },
  },
];
