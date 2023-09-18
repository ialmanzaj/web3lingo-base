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
import { CurrentCourse } from "@/components/CurrentCourse";
import { UserNav } from "./user-nav";
import CourseSwitcher from "@/components/course-switcher";

type MenuState = "HIDDEN" | "LANGUAGES" | "STREAK" | "GEMS" | "MORE";

export const TopBar = ({
  backgroundColor,
  borderColor,
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
    <header className="fixed z-20 w-full sm:relative">
      <div className="mx-auto hidden max-w-screen-xl flex-wrap items-center justify-between border-b p-4  sm:flex">
        <Link href="/" className="flex items-center">
          🚀
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            Web3lingo
          </span>
        </Link>

        <div className=" w-full sm:block sm:w-auto " id="navbar-default">
          <ul className="mt-4 flex flex-col items-center rounded-lg p-4 font-medium  sm:mt-0 sm:flex-row sm:space-x-8 sm:border-0 sm:p-0 ">
            {/*  <li>
            <a
              href="#"
              className="block rounded  py-2 pl-3 pr-4 md:bg-transparent md:p-0 "
              aria-current="page"
            >
              Home
            </a>
          </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};
