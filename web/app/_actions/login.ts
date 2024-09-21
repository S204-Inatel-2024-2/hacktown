'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { env } from '@/lib/env';

export async function login(formData: FormData) {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const data = await response.json();

  cookies().set('token', data.accessToken);
  redirect('/dashboard');
}
