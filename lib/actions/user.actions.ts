'use server'

import { signIn, signOut } from '@/auth'
import { IuserSignIn } from '@/types'
import { redirect } from 'next/navigation'

export async function signInWithCredentials(user: IuserSignIn) {
  return await signIn('credentials', { ...user, redirect: false })
}

export const SignOut = async () => {
  const redirectTo = await signOut({ redirect: false })
  redirect(redirectTo.redirect)
}
