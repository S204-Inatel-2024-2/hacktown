'use server';

import { cookies } from 'next/headers';
import { Venue } from '../dashboard/venues/(components)/columns';

export async function getData(): Promise<Venue[]> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/venues`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ['venues'],
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data.venues;
}
