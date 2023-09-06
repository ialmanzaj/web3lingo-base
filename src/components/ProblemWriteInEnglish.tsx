import Image from "next/image";
import React from "react";
import { CheckAnswer } from "~/components/CheckAnswer";
import { QuitMessage } from "~/components/QuitMessage";
import { ProgressBar } from "~/components/ProgressBar";

type ContentProps = {
  image: React.ReactNode;
  text: React.ReactNode;
};

export const ProblemWriteInEnglish = ({
  content,
  currentLesson,
  totalLessons,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  content: ContentProps;
  currentLesson: number;
  totalLessons: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { text, image } = content;
  return (
    <div className="relative flex min-h-screen flex-col gap-5 bg-[#292929] px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="fixed left-0 right-0 top-0 z-10 bg-[#292929]">
          <div className="w-full max-w-5xl sm:my-8 sm:px-5">
            <ProgressBar
              currentLesson={currentLesson}
              totalLessons={totalLessons}
              setQuitMessageShown={setQuitMessageShown}
              hearts={hearts}
            />
          </div>
        </div>
        <div className="my-10"></div>
        <section className="sm:gap-18 flex max-w-5xl grow flex-col gap-5 self-center overflow-y-scroll sm:items-center sm:justify-center">
          <div className="w-full">
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <div className="h-fit  w-full	">
                    {image}
                  </div>
                </div>
                <div>
                  {text}
                </div>
              </div>
            </>
          </div>
        </section>
      </div>
      <div className="my-8"></div>
      <div className="my-12"></div>

      <CheckAnswer
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={true}
        isAnswerSelected={true}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};
