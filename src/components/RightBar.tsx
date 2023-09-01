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
import { LoginScreen } from "./LoginScreen";
import { XpProgressSection } from "./XpProgressSection";
import { DailyQuestsSection } from "./DailyQuestsSection";
import { LeaderboardRankSection } from "./LeaderboardRankSection";
import { UnlockLeaderboardsSection } from "./UnlockLeaderboardsSection";
import {CurrentCourse} from './CurrentCourse';

export const RightBar = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const lingots = useBoundStore((x) => x.lingots);
  const streak = useBoundStore((x) => x.streak);
  const course = useBoundStore((x) => x.course);
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  const [languagesShown, setLanguagesShown] = useState(false);

  const [streakShown, setStreakShown] = useState(false);
  const [now, setNow] = useState(dayjs());

  const [gemsShown, setGemsShown] = useState(false);

  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  return (
    <>
      <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start sm:flex py-5">
  
        {loggedIn && lessonsCompleted < 10 ? (
          <UnlockLeaderboardsSection />
        ) : loggedIn && lessonsCompleted >= 10 ? (
          <LeaderboardRankSection />
        ) : null}
        <DailyQuestsSection />
        <XpProgressSection />
        
      </aside>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );

  
};


