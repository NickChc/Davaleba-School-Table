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


const days_initial = [
  // first week
  { id: "day-id-1", weekId: "week-id-1", name: "Monday" },
  { id: "day-id-2", weekId: "week-id-1", name: "Tuesday" },
  { id: "day-id-3", weekId: "week-id-1", name: "Wednesday" },
  { id: "day-id-4", weekId: "week-id-1", name: "Thursday" },
  { id: "day-id-5", weekId: "week-id-1", name: "Friday" },
  // second week
  { id: "day-id-6", weekId: "week-id-2", name: "Monday" },
  { id: "day-id-7", weekId: "week-id-2", name: "Tuesday" },
  { id: "day-id-8", weekId: "week-id-2", name: "Wednesday" },
  { id: "day-id-9", weekId: "week-id-2", name: "Thursday" },
  { id: "day-id-10", weekId: "week-id-2", name: "Friday" },
  // third week
  { id: "day-id-11", weekId: "week-id-3", name: "Monday" },
  { id: "day-id-12", weekId: "week-id-3", name: "Tuesday" },
  { id: "day-id-13", weekId: "week-id-3", name: "Wednesday" },
  { id: "day-id-14", weekId: "week-id-3", name: "Thursday" },
  { id: "day-id-15", weekId: "week-id-3", name: "Friday" },
];

export const GlobalContext = createContext({
  weeks_initial: [],
  days_initial: [],
  subjects_initial: [],
  users: [],
  setUsers: undefined,
  grades: [],
  setGrades: undefined,
  currentWeekId: undefined,
  setCurrentWeekId: undefined,
  currentSubjectId: undefined,
  setCurrentSubjectId: undefined,
  modalVisible: undefined,
  setModalVisible: undefined,
});

export function GlobalProvider({ children }) {
  const [users, setUsers] = useState();
  const [grades, setGrades] = useState();

  const [currentWeekId, setCurrentWeekId] = useState();
  const [currentSubjectId, setCurrentSubjectId] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        weeks_initial,
        days_initial,
        subjects_initial,
        users,
        setUsers,
        grades,
        setGrades,
        currentWeekId,
        setCurrentWeekId,
        currentSubjectId,
        setCurrentSubjectId,
        modalVisible,
        setModalVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}