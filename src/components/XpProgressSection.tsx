import Link from "next/link";
import React from "react";
import { useBoundStore } from "../hooks/useBoundStore";
import { TreasureClosedSvg } from "./Svgs";

export const XpProgressSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Tu progreso</h2>
        <Link href="/settings/coach" className="uppercase text-blue-400">
          Cambia el objetivo
        </Link>
      </div>
      <div className="flex gap-5">
        <TreasureClosedSvg />
        <div className="flex grow flex-col justify-around">
          <h3 className="font-normal text-gray-500">Objetivo diario</h3>
          <div className="flex items-center gap-5">
            <div className="relative h-4 w-full grow rounded-full bg-gray-200">
              {xpToday > 0 && (
                <div
                  className="absolute left-0 top-0 h-4 rounded-full bg-yellow-400"
                  style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
                >
                  <div className="absolute left-2 top-1 right-2 h-[6px] rounded-full bg-yellow-300"></div>
                </div>
              )}
            </div>
            <div className="text-md shrink-0 font-normal text-gray-400">
              {xpToday}/{goalXp} XP
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
