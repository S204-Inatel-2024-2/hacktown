'use server';

import { DataTable } from '@/components/data-table';
import { columns } from './(components)/columns';
import { CreateUser } from './(components)/create-user';
import { getData } from '@/app/_actions/list-users';

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
