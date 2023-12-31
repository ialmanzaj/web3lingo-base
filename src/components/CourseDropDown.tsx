import { ChevronDownSvg } from "./Svgs";
import { useState } from "react";
import languages from "../utils/courses";
import Link from "next/link";
import { ThemeIcon } from "./Flag";

export const CourseDropDown = () => {
  const [languagesShown, setLanguagesShown] = useState(false);
  return (
    <div
      className="relative hidden cursor-pointer items-center md:flex"
      onMouseEnter={() => setLanguagesShown(true)}
      onMouseLeave={() => setLanguagesShown(false)}
      aria-haspopup={true}
      aria-expanded={languagesShown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setLanguagesShown((isShown) => !isShown);
        }
      }}
    >
      <span className="text-md uppercase">English</span>{" "}
      <ChevronDownSvg />
      {languagesShown && (
        <ul className="absolute top-full right-0 grid w-[500px] grid-cols-2 rounded-2xl border-2 border-gray-200 bg-white p-6 font-light text-gray-600">
          {languages.map((language) => {
            return (
              <li key={language.code}>
                <Link
                  href={`/`}
                  tabIndex={0}
                  className="flex items-center gap-3 whitespace-nowrap rounded-xl p-3 hover:bg-gray-300"
                >
                  <ThemeIcon course={language} width={24} />
                  {language.description}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
