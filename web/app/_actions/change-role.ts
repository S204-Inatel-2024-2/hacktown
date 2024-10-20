'use server';

import { env } from '@/lib/env';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function changeRole(formData: FormData) {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/user/role`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: formData.get('email'),
      role: 'staff_leader',
    }),
  });

  if (!response.ok) {
    throw new Error('Not possible to update role');
  }

  revalidateTag('users');
}
