import { DataTable } from '@/components/data-table';
import { cookies } from 'next/headers';
import { User, columns } from './(components)/columns';
import { ChangeRole } from './(components)/change-role';

async function getData(): Promise<User[]> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/staff_leader`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ['users'],
    },
  });

  if (!response.ok) {
    console.log(response.status);
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data.users;
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="p-12 space-y-10 container">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Líderes de Staff</h1>
        <ChangeRole />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
