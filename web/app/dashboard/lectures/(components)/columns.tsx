'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Venue } from '../../venues/(components)/columns';
import { User } from '../../users/(components)/columns';

export type Lecture = {
  _id: string;
  name: string;
  description: string;
  capacity: number;
  startDate: Date;
  endDate: Date;
  venue: Venue;
  speaker: string[];
  participants: User[];
};

export const columns: ColumnDef<Lecture>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'venue.address',
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
