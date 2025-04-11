import React from 'react'

export default function Header() {
  return (
    <div>
      <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
        <h1 className='text-base sm:text-lg textGradient font-bold' >Broodl</h1>
        <div className='flex items-center justify-between'>
          PLACEHOLDER CTA || STATS
        </div>
      </header>
    </div>
  )
}
