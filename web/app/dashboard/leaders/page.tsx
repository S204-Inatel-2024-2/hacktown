import { DataTable } from '@/components/data-table';
import { ChangeRole } from './(components)/change-role';
import { getData } from '@/app/_actions/list-users-by-role';
import { columns } from './(components)/columns';

export default async function Page() {
  const data = await getData('staff_leader');

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
