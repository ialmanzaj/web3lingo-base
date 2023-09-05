import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { AppleSvg, BoySvg, WomanSvg } from "../components/Svgs";
import { useRouter } from "next/router";
import { ProblemSelect1Of3 } from "../components/ProblemQuiz";
import { ProblemWriteInEnglish } from "../components/ProblemWriteInEnglish";
import { LessonComplete } from "../components/LessonComplete";
import { QuestionResult } from "../components/QuestionResult";
import { LessonFastForwardStart } from "../components/LessonFastForwardStart";
import { LessonFastForwardEndFail } from "../components/LessonFastForwardEndFail";
import { LessonFastForwardEndPass } from "../components/LessonFastForwardEndPass";

export const lessonProblem1 = {
  type: "SELECT_1_OF_3",
  question: `Which one of these is "the apple"?`,
  answers: [
    { icon: <AppleSvg />, name: "la pera" },
    { icon: <BoySvg />, name: "el niño" },
    { icon: <WomanSvg />, name: "la mujer" },
  ],
  correctAnswer: 0,
} as const;

export const lessonProblem2 = {
  type: "WRITE_IN_ENGLISH",
  question: "El niño",
  answerTiles: ["woman", "milk", "water", "I", "The", "boy"],
  correctAnswer: [4, 5],
} as const;

const lessonProblems = [lessonProblem1];

const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i]);
};

export const formatTime = (timeMs: number): string => {
  const seconds = Math.floor(timeMs / 1000) % 60;
  const minutes = Math.floor(timeMs / 1000 / 60) % 60;
  const hours = Math.floor(timeMs / 1000 / 60 / 60);
  if (hours === 0)
    return [minutes, seconds]
      .map((x) => x.toString().padStart(2, "0"))
      .join(":");
  return [hours, minutes, seconds]
    .map((x) => x.toString().padStart(2, "0"))
    .join(":");
};

const Lesson: NextPage = () => {
  const router = useRouter();

  const [lessonProblem, setLessonProblem] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [quitMessageShown, setQuitMessageShown] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const startTime = useRef(Date.now());
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33);

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewLessonShown, setReviewLessonShown] = useState(false);

  const problem = lessonProblems[lessonProblem] ?? lessonProblem1;

  const totalCorrectAnswersNeeded = 2;

  const [isStartingLesson, setIsStartingLesson] = useState(true);
  const hearts =
    "fast-forward" in router.query &&
    !isNaN(Number(router.query["fast-forward"]))
      ? 3 - incorrectAnswerCount
      : null;

  const { correctAnswer } = problem;
  const isAnswerCorrect = Array.isArray(correctAnswer)
    ? numbersEqual(selectedAnswers, correctAnswer)
    : selectedAnswer === correctAnswer;

  const onCheckAnswer = () => {
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
    } else {
      setIncorrectAnswerCount((x) => x + 1);
    }
    setQuestionResults((questionResults) => [
      ...questionResults,
      {
        question: problem.question,
        yourResponse: problem.answers[selectedAnswer ?? 0]?.name ?? "",
        correctResponse: problem.answers[problem.correctAnswer].name,
      },
    ]);
  };

  const onFinish = () => {
    setSelectedAnswer(null);
    setSelectedAnswers([]);
    setCorrectAnswerShown(false);
    setLessonProblem((x) => (x + 1) % lessonProblems.length);
    endTime.current = Date.now();
  };

  const onSkip = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  const unitNumber = Number(router.query["fast-forward"]);

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalCorrectAnswersNeeded
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    );
  }

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  switch (problem.type) {
    case "SELECT_1_OF_3": {
      return (
        <>
          <iframe
            src="https://app.7taps.com/jqJApIZj5Wf7"
            title="ERC20 course"
            width="760px"
            height="680px"
            style={{
              borderRadius: 20,
              border: 0,
              display: "block",
              margin: "0 auto",
            }}
          />
        </>
      );
    }
  }
};

export default Lesson;
