
import Link from "next/link";
import React, { useState } from "react";
import dayjs from "dayjs";
import {
  EmptyFireSvg,
  EmptyGemSvg,
  FireSvg,
  GemSvg,
  LingotsTreasureChestSvg,
} from "./Svgs";
import { Calendar } from "./Calendar";
import { useBoundStore } from "../hooks/useBoundStore";
import { ThemeIcon } from "./Flag";
import type { LoginScreenState } from "./LoginScreen";

const Streak = () => {
  const streak = useBoundStore((x) => x.streak);
  const [now, setNow] = useState(dayjs());
  const [streakShown, setStreakShown] = useState(false);

  return (<span
    className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-orange-500 hover:bg-gray-600"
    onMouseEnter={() => setStreakShown(true)}
    onMouseLeave={() => {
      setStreakShown(false);
      setNow(dayjs());
    } }
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      setStreakShown((x) => !x);
      setNow(dayjs());
    } }
    role="button"
    tabIndex={0}
  >
    <div className="pointer-events-none">
      {streak > 0 ? <FireSvg /> : <EmptyFireSvg />}
    </div>
    <span className={streak > 0 ? "text-orange-500" : "text-gray-300"}>
      {streak}
    </span>
    <div
      className="absolute top-full z-10 flex flex-col gap-5 rounded-2xl border-2 border-gray-300 bg-white p-5 text-black"
      style={{
        
        left: "calc(50% - 200px)",
        width: 400,
        display: "none"
        //display: streakShown ? "flex" : "none",
      }}
    >
      <h2 className="text-center text-lg font-bold">Streak</h2>
      <p className="text-center text-sm font-normal text-gray-400">
        {`But your streak will reset tomorrow if you don't practice tomorrow. Watch out!`}
      </p>
      <Calendar now={now} setNow={setNow} />
    </div>
  </span>)
}

export const CurrentCourse = () => {
  const lingots = useBoundStore((x) => x.lingots);
  const course = useBoundStore((x) => x.course);
  const [languagesShown, setLanguagesShown] = useState(false);
  const [now, setNow] = useState(dayjs());
  const [gemsShown, setGemsShown] = useState(false);

  
  return (
    <article className=" flex justify-end gap-2">
      {/* {Course()} */}
      <Streak />
      <span
        className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-red-500 hover:bg-gray-600"
        onMouseEnter={() => setGemsShown(true)}
        onMouseLeave={() => setGemsShown(false)}
        onClick={() => setGemsShown((x) => !x)}
        role="button"
        tabIndex={0}
      >
        {lingots > 0 ? <GemSvg /> : <EmptyGemSvg />}
        <span className={lingots > 0 ? "text-red-500" : "text-gray-300"}>
          {lingots}
        </span>
        <div
          className="absolute top-full z-10 flex w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5"
          style={{
            left: "calc(50% - 150px)",
            display: "none"
            //display: gemsShown ? "flex" : "none",
          }}
        >
          <LingotsTreasureChestSvg className="w-24" />
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-bold text-black">Lingots</h2>
            <p className="text-sm font-normal text-gray-400">
              You have {lingots} {lingots === 1 ? "lingot" : "lingots"}.
            </p>
            <Link
              className="uppercase text-blue-400 transition hover:brightness-110"
              href="/shop"
            >
              Go to shop
            </Link>
          </div>
        </div>
      </span>
    </article>
  )

  function Course() {
    return <div
      className="relative flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-gray-500 hover:bg-gray-100"
      onMouseEnter={() => setLanguagesShown(true)}
      onMouseLeave={() => setLanguagesShown(false)}
      onClick={() => setLanguagesShown((x) => !x)}
      role="button"
      tabIndex={0}
    >
      <ThemeIcon course={course} width={45} />
      <div>{course.name}</div>
      <div
        className="absolute top-full z-10 rounded-2xl border-2 border-gray-300 bg-white"
        style={{
          left: "calc(50% - 150px)",
          width: 300,
          display: languagesShown ? "block" : "none",
        }}
      >
        <h2 className="py-3 px-5 font-bold uppercase text-gray-400">
          Mis cursos
        </h2>
        <button className="flex w-full items-center gap-3 border-t-2 border-gray-300 bg-blue-100 py-3 px-5 text-left font-bold">
          <ThemeIcon course={course} width={45} />
          <span className="text-blue-500">{course.name}</span>
        </button>
        <Link
          className="flex w-full items-center gap-3 rounded-b-2xl border-t-2 border-gray-300 py-3 px-5 text-left font-bold hover:bg-gray-100"
          href="/register"
        >
          <span className="flex items-center justify-center rounded-lg border-2 border-gray-400 px-2 text-lg font-bold text-gray-400">
            +
          </span>
          <span className="text-gray-600">Cambiar de curso</span>
        </Link>
      </div>
    </div>;
  }
}