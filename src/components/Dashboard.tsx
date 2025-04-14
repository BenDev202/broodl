import React from 'react'
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
 });


export default function Dashboard() {

  const statuses = {
    num_day: 14,
    tile_remaining: "13.14.26",
    date: new Date().toDateString()
  }

  const moods = {
    "&+@#$": "😭",
    "sad": "😔",
    "Existing": "😶",
    "Good": "😁",
    "Elated": "😍",
  }

  return (
    <div className="flex flex-col flex-1 gap-10 sm:gap-8 md:gap-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
          {Object.keys(statuses).map((status, statusIndex) => {
            return (
              <div key={statusIndex} className='p-4 flex flex-col gap-1 sm:gap-2'>
                <p className='font-medium uppercase text-xs sm:font-sm'>{status.replaceAll('_', ' ')}</p>
                <p className={`text-base sm:text-lg ${fugaz.className}`}>{statuses [status]}</p>
              </div>
            )
          })}
      </div>
      <h4 className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}>
          How do you <span>feel</span> today?
      </h4>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {Object.keys(moods).map((mood, moodIndex) => {
            return (
              <button className='' key={moodIndex}> 
                <p>{mood}</p>
                <p>{moods [mood]}</p>
              </button>
            )
          })}
      </div>
    </div>
  )
}
