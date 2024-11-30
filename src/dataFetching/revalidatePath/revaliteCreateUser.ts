'use server'

import { revalidatePath } from 'next/cache'

export async function createUser() {
  // Invalidate the /posts route in the cache
  revalidatePath('/wallet')
}
