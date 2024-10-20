'use server';

import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookie = cookies().get(name);

  return cookie?.value;
}
