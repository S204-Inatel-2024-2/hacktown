import { DataTable } from '@/components/data-table';
import { columns } from './(components)/columns';
import { CreateVenue } from './(components)/create-venue';
import { getData } from '@/app/_actions/list-venues';

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
