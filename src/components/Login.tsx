import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
 });

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ${fugaz.className}`}>Log In / Register</h3>
      <p>You&apos;are one step away! </p>
      <input className='w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-indigo-500 focus:border-indigo-600 hover:border-indigo-600 rounded-full outline-none' placeholder='Email'/>
      <input className='w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-indigo-500 focus:border-indigo-600 hover:border-indigo-600 rounded-full outline-none' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto'>
      <Button variant="full" className={`${fugaz.className}`}>Submit</Button>
      </div>
      <p className='text-center'>Don&apos;t have an account? <Link href={"Sign-up"}> <span className='text-indigo-600'>Sign up</span></Link></p>
    </div>
  )
}
