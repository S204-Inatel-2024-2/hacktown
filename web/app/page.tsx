import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login } from './_actions/login';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form action={login}>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" name="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Entrar</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}
