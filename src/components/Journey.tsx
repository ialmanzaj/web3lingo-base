import { useEffect, useState } from "react";

import Link from "next/link";
import {
  UpArrowSvg,
  PracticeExerciseSvg,
} from "../components/Svgs";
import { units } from "../utils/courses";
import { UnitSection } from "@/components/UnitSection";
import { Card } from "@/components/ui/card";


export const Journey = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
      updateScrollY();
      document.addEventListener("scroll", updateScrollY);
      return () => document.removeEventListener("scroll", updateScrollY);
    }, [scrollY]);
  
  return (
    <div className="flex grow justify-center py-5">
      <div className="flex flex-col max-w-sm">
        {units.map((unit) => (
          <UnitSection unit={unit} key={unit.unitNumber} />
        ))}
        <div className="sticky bottom-28 left-0 right-0 flex items-end justify-between">
          <Link
            href="/lesson?practice"
            className="absolute left-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50 hover:brightness-90 md:left-0"
          >
            <span className="sr-only">Practice exercise</span>
            <PracticeExerciseSvg className="h-8 w-8" />
          </Link>
          {scrollY > 100 && (
            <button
              className="absolute right-4 flex h-14 w-14 items-center justify-center self-end rounded-2xl border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50 hover:brightness-90 md:right-0"
              onClick={() => scrollTo(0, 0)}
            >
              <span className="sr-only">Jump to top</span>
              <UpArrowSvg />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
