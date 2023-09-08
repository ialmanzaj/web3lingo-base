import Link from "next/link";
import React from "react";
import { CloseSvg, LessonTopBarEmptyHeart, LessonTopBarHeart } from "./Svgs";
import { useRouter } from "next/router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
    <>
      <div className="fixed left-0 right-0 top-0 z-10 bg-[#FBF9F4]">
        <div className="w-full max-w-5xl sm:my-8 sm:px-5">
          <header className="flex items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-gray-400">
                  <CloseSvg />
                  <span className="sr-only">Exit lesson</span>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You’re doing absolutely wonderful. If you quit now, you’ll
                    lose all your progress.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => router.push("/learn")}>
                    Exit Lesson
                  </AlertDialogAction>
                  <AlertDialogCancel>Keep learning</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
                  width: `${(currentLesson / totalLessons) * 100}%`,
                }}
              ></div>
            </div>
            {hearts !== null &&
              [1, 2, 3].map((heart) => {
                if (heart <= hearts) {
                  return <LessonTopBarHeart key={heart} />;
                }
                return <LessonTopBarEmptyHeart key={heart} />;
              })}
          </header>
        </div>
      </div>
      <div className="my-10"></div>
    </>
  );
};
