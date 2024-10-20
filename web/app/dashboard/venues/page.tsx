import { DataTable } from '@/components/data-table';
import { cookies } from 'next/headers';
import { Venue, columns } from './(components)/columns';
import { CreateVenue } from './(components)/create-venue';

async function getData(): Promise<Venue[]> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/venues`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ['venues'],
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data.venues;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="p-12 space-y-10 container">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Venues</h1>
        <CreateVenue />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
