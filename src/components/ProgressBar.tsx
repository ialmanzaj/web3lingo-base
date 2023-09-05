import Link from "next/link";
import React from "react";
import { CloseSvg, LessonTopBarEmptyHeart, LessonTopBarHeart } from "./Svgs";
import { useRouter } from "next/router";

export const ProgressBar = ({
  currentLesson,
  totalLessons,
  setQuitMessageShown,
  hearts,
}: {
  currentLesson: number;
  totalLessons: number;
  setQuitMessageShown: (isShown: boolean) => void;
  hearts: null | number;
}) => {
  const router = useRouter();
  return (
    <header className="flex items-center gap-4">
      {currentLesson === 0 ? (
        <Link href="/dashboard" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        <button className="text-gray-400" onClick={() => () => router.back()}>
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={currentLesson / totalLessons}
      >
        <div
          className={
            "h-full rounded-full bg-purple-500 transition-all duration-700 " +
            (currentLesson > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(currentLesson / (totalLessons + 1)) * 100}%`,
          }}
        >
          
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />;
          }
          return <LessonTopBarEmptyHeart key={heart} />;
        })}
    </header>
  );
};
