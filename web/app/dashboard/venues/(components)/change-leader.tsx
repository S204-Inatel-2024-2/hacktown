'use client';

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
import { User } from '../../users/(components)/columns';
import { Venue } from './columns';
import { useCallback, useEffect, useState, useMemo } from 'react';
import { changeLeader } from '@/app/_actions/change-leader';
import { getData } from '@/app/_actions/list-users-by-role';

type ChangeLeaderProps = {
  venue: Venue;
};

export function ChangeLeader({ venue }: ChangeLeaderProps) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = useCallback(async () => {
    const data = await getData('staff_leader');

    setUsers(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Mudar líder</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Trocar líder de staff</DialogTitle>
        </DialogHeader>
        <form className="space-y-3" action={changeLeader}>
          <input type="hidden" name="venue" value={venue.name} />
          <Select name="email">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Usuários" />
            </SelectTrigger>
            <SelectContent>
              {memoizedUsers &&
                memoizedUsers.length &&
                memoizedUsers.map((user: User) => (
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
