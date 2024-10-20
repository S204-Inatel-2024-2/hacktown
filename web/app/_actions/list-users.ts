'use server';

import { cookies } from 'next/headers';
import { User } from '../dashboard/leaders/(components)/columns';
import { env } from '@/lib/env';

export async function getData(): Promise<User[]> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ['users'],
    },
  });

  if (!response.ok) {
    console.log(response.status);
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data.users;
}
