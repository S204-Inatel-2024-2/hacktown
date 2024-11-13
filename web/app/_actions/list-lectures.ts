'use server';

import { cookies } from 'next/headers';
import { env } from '@/lib/env';
import { Lecture } from '../dashboard/lectures/(components)/columns';
import { ApiResponse } from '@/lib/api';

export async function getData(): Promise<ApiResponse<Lecture[]>> {
  const token = cookies().get('token')?.value;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/lectures`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ['lectures'],
    },
  });

  if (!response.ok) {
    const { error } = await response.json();

    return {
      data: [],
      error,
    };
  }

  const data = await response.json();

  return {
    data: data.lectures,
  };
}
