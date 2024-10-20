'use server';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { changeRole } from '@/app/_actions/change-role';
import { User } from './columns';
import { getData } from '@/app/_actions/list-users';

export async function ChangeRole() {
  const data = await getData();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Atribuir cargo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atribuir líder de staff</DialogTitle>
        </DialogHeader>
        <form className="space-y-3" action={changeRole}>
          <Select name="email">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Usuários" />
            </SelectTrigger>
            <SelectContent>
              {data &&
                data.length &&
                data.map((user: User) => (
                  <SelectItem key={user.email} value={user.email}>
                    {user.username}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <DialogClose asChild>
            <Button type="submit">Atribuir</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
