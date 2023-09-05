import Image from "next/image";
import React from "react";
import { CheckAnswer } from "~/components/CheckAnswer";
import { QuitMessage } from "~/components/QuitMessage";
import { ProgressBar } from "~/components/ProgressBar";

export const ProblemWriteInEnglish = ({
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

  return (
    <div className="relative flex min-h-screen flex-col gap-5 bg-[#292929] px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="fixed left-0 right-0 top-0 bg-[#292929] z-10">
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
                  <div className="w-full  h-fit	">
                  <Image
                  style={{ width: "100%", height: "auto" }} // optional
                    src="https://images.unsplash.com/photo-1667372459534-848ec00d4da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of the author"
                  />
                  </div>
                </div>
                <div>
                <h2 className="pb-4 text-4xl font-bold">
                      Que es un blockchain
                    </h2>
                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">⚖️ Decentralization</h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      <ul>
                        <li>
                          Spreading out responsibility to many different parties
                          instead of one.
                        </li>
                        <li>
                          Removing single point of power, failure, authority.
                        </li>
                        <li>Letting people govern the systems they use.</li>
                      </ul>
                    </p>
                  </div>

                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">⛓️ Blockchain</h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      Public, digital database of crypto currency transactions.
                      Constantly updated and backed up across millions of
                      machines. Transactions are permanent, irreversible, and
                      viewable by anyone.
                    </p>
                  </div>

                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">
                      🏦 Decentralized Finance
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      Open & borderless financial system that connects the world
                      through the internet. Peer to Peer instead of relying on
                      banks or institutions. Financial service &apos;apps&apos; that run
                      themselves and are governed by its users via voting.
                      (example: Compound)
                    </p>
                  </div>
                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">
                      🏦 Decentralized Finance
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      Open & borderless financial system that connects the world
                      through the internet. Peer to Peer instead of relying on
                      banks or institutions. Financial service &apos;apps&apos; that run
                      themselves and are governed by its users via voting.
                      (example: Compound)
                    </p>
                  </div>
                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">
                      🏦 Decentralized Finance
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      Open & borderless financial system that connects the world
                      through the internet. Peer to Peer instead of relying on
                      banks or institutions. Financial service &apos;apps&apos; that run
                      themselves and are governed by its users via voting.
                      (example: Compound)
                    </p>
                  </div>
                  <div className="py-3">
                    <h4 className="mb-2 font-semibold">
                      🏦 Decentralized Finance
                    </h4>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      Open & borderless financial system that connects the world
                      through the internet. Peer to Peer instead of relying on
                      banks or institutions. Financial service &apos;apps&apos; that run
                      themselves and are governed by its users via voting.
                      (example: Compound)
                    </p>
                  </div>
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
        isAnswerCorrect={isAnswerCorrect}
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
