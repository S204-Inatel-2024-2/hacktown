'use server';

import { env } from '@/lib/env';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function createVenue(formData: FormData) {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/venue`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.get('name'),
      address: formData.get('local'),
      capacity: formData.get('capacity'),
    }),
  });

  if (!response.ok) {
    throw new Error('Not possible to create');
  }

  revalidateTag('venues');
}
