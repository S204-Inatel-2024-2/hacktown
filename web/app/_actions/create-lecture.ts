'use server';

import { env } from '@/lib/env';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export async function createLecture(formData: FormData) {
  const token = cookies().get('token')?.value;

  const startDate = formData.get('startDate') as string;
  const endDate = formData.get('endDate') as string;
  const startTime = formData.get('startTime') as string;
  const endTime = formData.get('endTime') as string;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/lecture`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: formData.get('name'),
      description: formData.get('description'),
      location: formData.get('location'),
      capacity: formData.get('capacity'),
      startDate: startDate + 'T' + startTime,
      endDate: endDate + 'T' + endTime,
    }),
  });

  if (!response.ok) {
    const error = await response.json();

    console.log(error);
    console.log(error.errors);
    console.log(response.status);
    throw new Error('Not possible to create');
  }

  revalidateTag('lectures');
}
