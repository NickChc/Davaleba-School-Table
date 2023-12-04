import { createContext, useState } from "react";

const weeks_initial = [
  { id: "week-id-1", name: "First Week" },
  { id: "week-id-2", name: "Second Week" },
  { id: "week-id-3", name: "Third Week" },
];

const subjects_initial = [
  { id: "subject-english", name: "English" },
  { id: "subject-math", name: "Math" },
  { id: "subject-biology", name: "Biolgy" },
];

const users_initial = [
  { id: "user-1", name: "David" },
  { id: "user-2", name: "Joe" },
  { id: "user-3", name: "Mike" },
  { id: "user-4", name: "Anna" },
];

const grades_initial = [
  {
    id: "grade-1",
    userId: "user-2",
    weekId: "week-id-3",
    subjectId: "subject-math",
    grade: 8,
  },
  {
    id: "grade-2",
    userId: "user-4",
    weekId: "week-id-4",
    subjectId: "subject-biology",
    grade: 6,
  },
  {
    id: "grade-3",
    userId: "user-1",
    weekId: "week-id-1",
    subjectId: "subject-english",
    grade: 9,
  },
  {
    id: "grade-4",
    userId: "user-2",
    weekId: "week-id-1",
    subjectId: "subject-math",
    grade: 10,
  },
];

export const GlobalContext = createContext({
  weeks_initial: [],
  subjects_initial: [],
  users: [],
  setUsers: undefined,
  grades: [],
  setGrades: undefined,
  currentWeekId: undefined,
  setCurrentWeekId: undefined,
  currentSubjectId: undefined,
  setCurrentSubjectId: undefined,
});

export function GlobalProvider({ children }) {
  const [users, setUsers] = useState(users_initial);
  const [grades, setGrades] = useState(grades_initial);

  const [currentWeekId, setCurrentWeekId] = useState();
  const [currentSubjectId, setCurrentSubjectId] = useState();


  return (
    <GlobalContext.Provider
      value={{
        weeks_initial,
        subjects_initial,
        users,
        setUsers,
        grades,
        setGrades,
        currentWeekId,
        setCurrentWeekId,
        currentSubjectId,
        setCurrentSubjectId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
