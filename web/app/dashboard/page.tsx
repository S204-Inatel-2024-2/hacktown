import { DataTable } from '@/components/data-table';
import { columns, User } from './(users)/columns';
import { cookies } from 'next/headers';
import { CreateUser } from './(users)/create-user';

async function getData(): Promise<User[]> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
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
        <h1 className="text-3xl font-bold">Usuários</h1>
        <CreateUser />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
