import { Course } from './common-module';

export function isCourse(course: Course | {}): course is Course {
  return (course as Course).id !== undefined;
}
