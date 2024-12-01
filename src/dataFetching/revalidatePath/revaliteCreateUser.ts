'use server'

import { revalidatePath } from 'next/cache'

export async function revalidateUser() {
  revalidatePath('/wallet', 'layout')
}


export async function revalidateProjectDetails () {
  revalidatePath('/token-details', 'layout')
}

export async function revalidateHome() {
  revalidatePath('/')
}