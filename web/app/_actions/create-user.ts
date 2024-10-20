'use server';

import { env } from '@/lib/env';
import { revalidateTag } from 'next/cache';

export async function createUser(formData: FormData) {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  });

  if (!response.ok) {
    throw new Error('Not possible to create');
  }

  revalidateTag('users');
}
