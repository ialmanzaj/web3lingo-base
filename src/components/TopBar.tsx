import dayjs from "dayjs";
import Link from "next/link";
import React, { useState } from "react";
import { useBoundStore } from "../hooks/useBoundStore";
import { Calendar } from "./Calendar";
import { ThemeIcon } from "./Flag";
import {
  FireSvg,
  GemSvg,
  GlobeIconSvg,
  LingotsTreasureChestSvg,
  MoreOptionsSvg,
  PodcastIconSvg,
} from "./Svgs";
import { EmptyFireTopBarSvg } from "./Svgs";
import { EmptyGemTopBarSvg } from "./Svgs";
import { AddLanguageSvg } from "./Svgs";

type MenuState = "HIDDEN" | "LANGUAGES" | "STREAK" | "GEMS" | "MORE";

export const TopBar = ({
  backgroundColor = "bg-[#58cc02]",
  borderColor = "border-[#46a302]",
}: {
  backgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}) => {
  const [menu, setMenu] = useState<MenuState>("HIDDEN");
  const [now, setNow] = useState(dayjs());
  const streak = useBoundStore((x) => x.streak);
  const lingots = useBoundStore((x) => x.lingots);
  const course = useBoundStore((x) => x.course);
  return (
    <header className="fixed z-20 h-[58px] w-full">
      <div
        className={`relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 sm:hidden ${borderColor} ${backgroundColor}`}
      >
        <button
          onClick={() =>
            setMenu((x) => (x === "LANGUAGES" ? "HIDDEN" : "LANGUAGES"))
          }
        >
          <ThemeIcon course={course} width={45} />
          <span className="sr-only">See courses</span>
        </button>

        <button
          className="flex items-center gap-2 font-bold text-white"
          onClick={() => setMenu((x) => (x === "STREAK" ? "HIDDEN" : "STREAK"))}
          aria-label="Toggle streak menu"
        >
          {streak > 0 ? <FireSvg /> : <EmptyFireTopBarSvg />}{" "}
          <span className={streak > 0 ? "text-white" : "text-black opacity-20"}>
            {streak}
          </span>
        </button>
        <button
          className="flex items-center gap-2 font-bold"
          onClick={() => setMenu((x) => (x === "GEMS" ? "HIDDEN" : "GEMS"))}
          aria-label="Toggle lingot menu"
        >
          {lingots > 0 ? <GemSvg /> : <EmptyGemTopBarSvg />}{" "}
          <span
            className={lingots > 0 ? "text-white" : "text-black opacity-20"}
          >
            {lingots}
          </span>
        </button>
        <MoreOptionsSvg
          onClick={() => setMenu((x) => (x === "MORE" ? "HIDDEN" : "MORE"))}
          role="button"
          tabIndex={0}
          aria-label="Toggle more menu"
        />

        <div
          className={[
            "absolute top-full left-0 right-0 bg-white transition duration-300",
            menu === "HIDDEN" ? "opacity-0" : "opacity-100",
          ].join(" ")}
          aria-hidden={menu === "HIDDEN"}
        >
          {((): null | JSX.Element => {
            switch (menu) {
              case "LANGUAGES":
                return (
                  <div className="flex gap-5 p-5">
                    <div className="flex flex-col items-center justify-between gap-2">
                      <div className="rounded-2xl border-4 border-blue-400">
                        <ThemeIcon course={course} width={80} />
                      </div>
                      <span className="font-bold">{course.name}</span>
                    </div>
                    <Link
                      className="flex flex-col items-center justify-between gap-2"
                      href="/register"
                    >
                      <div className="rounded-2xl border-4 border-white">
                        <AddLanguageSvg className="h-16 w-20" />
                      </div>
                      <span className="font-bold text-gray-400">Courses</span>
                    </Link>
                  </div>
                );

              case "STREAK":
                return (
                  <div className="flex grow flex-col items-center gap-3 p-5">
                    <h2 className="text-xl font-bold">Streak</h2>
                    <p className="text-sm text-gray-400">
                      {`Practice each day so your streak won't reset!`}
                    </p>
                    <div className="self-stretch">
                      <Calendar now={now} setNow={setNow} />
                    </div>
                  </div>
                );

              case "GEMS":
                return (
                  <div className="flex grow items-center gap-3 p-5">
                    <LingotsTreasureChestSvg className="h-24 w-24" />
                    <div className="flex flex-col gap-3">
                      <h2 className="text-xl font-bold text-black">Lingots</h2>
                      <p className="text-sm font-normal text-gray-400">
                        You have {lingots}{" "}
                        {lingots === 1 ? "lingot" : "lingots"}.
                      </p>
                      <Link
                        className="font-bold uppercase text-blue-400 transition hover:brightness-110"
                        href="/shop"
                      >
                        Go to shop
                      </Link>
                    </div>
                  </div>
                );

              case "MORE":
                return (
                  <div className="flex grow flex-col">
                    <Link
                      className="flex items-center gap-2 p-2 font-bold text-gray-700"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PodcastIconSvg className="h-10 w-10" />
                      Podcast
                    </Link>
                    <Link
                      className="flex items-center gap-2 border-t-2 border-gray-300 p-2 font-bold text-gray-700"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GlobeIconSvg className="h-10 w-10" />
                      Schools
                    </Link>
                  </div>
                );

              case "HIDDEN":
                return null;
            }
          })()}
          <div
            className={[
              "absolute left-0 top-full h-screen w-screen bg-black opacity-30",
              menu === "HIDDEN" ? "pointer-events-none" : "",
            ].join(" ")}
            onClick={() => setMenu("HIDDEN")}
            aria-label="Hide menu"
            role="button"
          ></div>
        </div>
      </div>
    </header>
  );
};
