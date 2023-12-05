import { useContext } from "react";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";





export function DayGrade({ day, user }) {
  const { currentSubjectId, currentWeekId, grades } = useContext(GlobalContext);

  const weekGrades = grades?.filter((grade) => grade.weekId === currentWeekId);

  const weekSubjectGrades = weekGrades?.filter(
    (grade) => grade.subjectId === currentSubjectId
  );

  const userGrades = weekSubjectGrades?.filter(
    (grade) => grade.userId === user.id
  );

  const theGrade = userGrades?.find((grade) => grade.dayId === day.id);

  return (
    <td
      onClick={() => {
        console.log(weekGrades, day.id);
      }}
      className="cursor-crosshair border-solid border border-white text-center text-white font-semibold "
    >
      {theGrade?.grade || "-"}
    </td>
  );
}
