import type { StaticImageData } from "next/image";
import _flagsSvg from "../../public/flags.svg";
import type { Course } from "../utils/courses";

const flagsSvg = _flagsSvg as StaticImageData;

export const ThemeIcon = ({
  course: language,
  width = 84,
}: {
  course: Course;
  width?: number;
}) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <image
        height={flagsSvg.height}
        href={flagsSvg.src}
        width={flagsSvg.width}
      ></image>
    </svg>
  );
};
