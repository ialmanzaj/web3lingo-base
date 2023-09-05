import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { AppleSvg, BoySvg, WomanSvg } from "../components/Svgs";
import { useRouter } from "next/router";
import { ProblemSelect1Of3 } from "../components/ProblemSelect1Of3";
import { ProblemWriteInEnglish } from "../components/ProblemWriteInEnglish";
import { LessonComplete } from "../components/LessonComplete";
import { QuestionResult } from "../components/QuestionResult";
import { LessonFastForwardStart } from "../components/LessonFastForwardStart";
import { LessonFastForwardEndFail } from "../components/LessonFastForwardEndFail";
import { LessonFastForwardEndPass } from "../components/LessonFastForwardEndPass";
import { numbersEqual } from "../utils/array-utils";
import Image from "next/image";

export const lessonProblem1 = {
  type: "SELECT_1_OF_3",
  question: `Que es un blockchain?`,
  answers: [
    {
      icon: (
        <Image
          src="https://images.unsplash.com/photo-1667372459534-848ec00d4da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      ),
      name: "Base de datos ",
    },
    {
      icon: (
        <Image
          width={500}
          height={500}
          alt="Picture of the author"
          src="https://images.unsplash.com/photo-1642751227050-feb02d648136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        />
      ),
      name: "NFT",
    },
    {
      icon: (
        <Image
          width={500}
          height={500}
          alt="Picture of the author"
          src="https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        />
      ),
      name: "Una computadora",
    },
  ],
  correctAnswer: 0,
} as const;

export const lessonProblem2 = {
  type: "WRITE_IN_ENGLISH",
  question: "",
  answerTiles: [],
  correctAnswer: [],
} as const;

const lessonProblems = [lessonProblem1, lessonProblem2];

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

  const totalLessons = 2;

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

  const onNext = () => {
     
      setQuestionResults((questionResults) => [
        ...questionResults,
        {
          question: problem.question,
          yourResponse:
            problem.type === "SELECT_1_OF_3"
              ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
              : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
          correctResponse:
            problem.type === "SELECT_1_OF_3"
              ? problem.answers[problem.correctAnswer].name
              : problem.correctAnswer
                  .map((i) => problem.answerTiles[i])
                  .join(" "),
        },
      ]);
    };

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
        yourResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
        correctResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[problem.correctAnswer].name
            : problem.correctAnswer
                .map((i) => problem.answerTiles[i])
                .join(" "),
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
    correctAnswerCount >= totalLessons
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

  if (correctAnswerCount >= totalLessons && !correctAnswerShown) {
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
        <ProblemSelect1Of3
          problem={problem}
          currentLesson={1}
          totalLessons={totalLessons}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLISH": {
      return (
        <ProblemWriteInEnglish
          problem={problem}
          currentLesson={2}
          totalLessons={totalLessons}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onSkip}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }
  }
};

export default Lesson;
