import React from 'react'
import { Button } from './ui/button'
import Calendar from './Calendar'
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
 });

export default function Hero() {
  return (
    <div className='py-4 md:py-12 flex flex-col gap-4 sm:gap-8'>
      <h1 className={`font-bold text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}><span className='textGradient'>Broodl</span> helps you track your <span className='textGradient'>mood!</span></h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600]'>Create your mood record and see how you fell on <span className='font-bold'>every day of every year.</span></p>
      <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Button variant={'default'}><p className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}>Sign Up</p></Button>
        <Button variant={'dark'}><p className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}>Login</p></Button>
      </div>
      <Calendar /> 
    </div>
  )
}
