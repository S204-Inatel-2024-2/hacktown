'use server';

import { createVenue } from '@/app/_actions/create-venue';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

export async function CreateVenue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Novo venue</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar novo venue</DialogTitle>
        </DialogHeader>
        <form className="space-y-3" action={createVenue}>
          <div className="space-y-2">
            <Label htmlFor="name">Nome do local</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="local">Local</Label>
            <Input id="local" name="local" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacidade</Label>
            <Input id="capacity" name="capacity" type="number" />
          </div>
          <DialogClose asChild>
            <Button type="submit">Criar</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
