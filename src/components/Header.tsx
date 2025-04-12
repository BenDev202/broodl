import React from "react";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <div>
      <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
        <h1
          className={`text-base sm:text-lg textGradient font-bold ${fugaz.className}`}
        >
          Broodl
        </h1>

        <div className="flex items-center justify-between">
          PLACEHOLDER CTA || STATS
        </div>
      </header>
    </div>
  );
}
