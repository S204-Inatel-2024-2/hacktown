'use server';

import { DataTable } from '@/components/data-table';
import { columns } from './(components)/columns';
import { CreateLecture } from './(components)/create-lecture';
import { getData } from '@/app/_actions/list-lectures';

export default async function Page() {
  const { data } = await getData();

  return (
    <div className="p-12 space-y-10 container">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Palestras</h1>
        <CreateLecture />
      </div>
      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
}
