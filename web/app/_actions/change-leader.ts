'use server';

import { env } from '@/lib/env';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function changeLeader(formData: FormData) {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/venue/leader`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('venue'),
      email: formData.get('email'),
    }),
  });

  if (!response.ok) {
    throw new Error('Not possible to update leader');
  }

  console.log(await response.json());

  revalidateTag('venues');
}
