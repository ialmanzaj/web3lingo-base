import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  UpArrowSvg,
  PracticeExerciseSvg,
} from "../components/Svgs";
import { TopBar } from "../components/TopBar";
import { BottomBar } from "../components/BottomBar";
import { RightBar } from "../components/RightBar";
import { LeftBar } from "../components/LeftBar";
import { LoginScreen, useLoginScreen } from "../components/LoginScreen";
import { units } from "../utils/units";
import { tileLeftClassNames } from "../components/tileLeftClassNames";
import { UnitSection } from "../components/UnitSection";
import { getTopBarColors } from "../components/getTopBarColors";

export type TileStatus = "LOCKED" | "ACTIVE" | "COMPLETE";

type TileLeftClassName = (typeof tileLeftClassNames)[number];

export const getTileLeftClassName = ({
  index,
  unitNumber,
  tilesLength,
}: {
  index: number;
  unitNumber: number;
  tilesLength: number;
}): TileLeftClassName => {
  if (index >= tilesLength - 1) {
    return "left-0";
  }

  const classNames =
    unitNumber % 2 === 1
      ? tileLeftClassNames
      : [...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)];

  return classNames[index % classNames.length] ?? "left-0";
};

export const tileTooltipLeftOffsets = [140, 95, 70, 95, 140, 185, 210, 185] as const;

export type TileTooltipLeftOffset = (typeof tileTooltipLeftOffsets)[number];

const Wallets: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
    updateScrollY();
    document.addEventListener("scroll", updateScrollY);
    return () => document.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  const topBarColors = getTopBarColors(scrollY);

  return (
    <>
      <TopBar
        backgroundColor={topBarColors.backgroundColor}
        borderColor={topBarColors.borderColor}
      />
      <LeftBar selectedTab="Aprender" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12 bg-white">

        <RightBar /> 

        <div className="flex max-w-2xl grow flex-col">
          {units.map((unit) => (
            <UnitSection unit={unit} key={unit.unitNumber} />
          ))}
          <div className="sticky bottom-28 left-0 right-0 flex items-end justify-between">
            <Link
              href="/lesson?practice"
              className="absolute left-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-b-4 border-gray-200 bg-white transition hover:bg-gray-50"
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

      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="Aprender" />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

export default Wallets;


