import courses, { type Course } from "../utils/languages";
import type { BoundStateCreator } from "../hooks/useBoundStore";

export type CourseSlice = {
  course: Course;
  setLanguage: (newCourse: Course) => void;
};

const spanishLanguageIndex = 1;

export const createCourseSlice: BoundStateCreator<CourseSlice> = (set) => ({
  course: courses[spanishLanguageIndex],
  setLanguage: (newCourse: Course) => set({ course: newCourse }),
});
