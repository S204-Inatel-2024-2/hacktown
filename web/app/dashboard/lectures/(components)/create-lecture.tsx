import { createLecture } from '@/app/_actions/create-lecture';
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

export function CreateLecture() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nova palestra</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar nova palestra</DialogTitle>
        </DialogHeader>
        <form className="space-y-3" action={createLecture}>
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Input id="description" name="description" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Local</Label>
            <Input id="location" name="location" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacidade</Label>
            <Input id="capacity" name="capacity" type="number" />
          </div>
          <div className="space-y-2 grid grid-cols-2 gap-x-2">
            <Label htmlFor="startDate" className="col-span-2">
              Data de início
            </Label>
            <Input id="startDate" name="startDate" type="date" />
            <Input id="startTime" name="startTime" type="time" />
          </div>
          <div className="space-y-2 grid grid-cols-2 gap-x-2">
            <Label htmlFor="endDate" className="col-span-2">
              Data de término
            </Label>
            <Input id="endDate" name="endDate" type="date" />
            <Input id="endTime" name="endTime" type="time" />
          </div>
          <DialogClose asChild>
            <Button type="submit">Criar</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
