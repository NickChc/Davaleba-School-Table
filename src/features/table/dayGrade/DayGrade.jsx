import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";

export function DayGrade({ day, user }) {
  const { currentSubjectId, currentWeekId, grades, setGrades } =
    useContext(GlobalContext);

  const weekGrades = grades?.filter((grade) => grade.weekId === currentWeekId);

  const weekSubjectGrades = weekGrades?.filter(
    (grade) => grade.subjectId === currentSubjectId
  );

  const userGrades = weekSubjectGrades?.filter(
    (grade) => grade.userId === user.id
  );

  const theGrade = userGrades?.find((grade) => grade.dayId === day.id);

  const [mode, setMode] = useState("view");
  const [focus, setFocus] = useState(false);
  const [newGrade, setNewGrade] = useState("");

  function addGrade() {
    if (!isNaN(newGrade)) {
      const grade = {
        grade: newGrade,
        userId: user.id,
        dayId: day.id,
        weekId: currentWeekId,
        subjectId: currentSubjectId,
        id: uuidv4(),
      };

      grades
        ? setGrades((oldGrades) => {
            const filteredOldGrades = oldGrades?.filter(
              (grade) => theGrade?.id !== grade.id
            );

            return [...filteredOldGrades, grade];
          })
        : setGrades([grade]);

      setMode("view");
      setNewGrade("");
    }
  }

  return (
    <td className="border-solid border border-white text-white font-semibold cursor-crosshair min-h-[50px] max-w-[60px]">
      {mode === "view" && (
        <div
          className="h-[40px] flex items-center justify-center "
          onClick={() => {
            setMode("update");
            setFocus(!focus);
          }}
        >
          {theGrade?.grade || "-"}
        </div>
      )}
      {mode === "update" && (
        <div className="h-[40px] flex items-center justify-center ">
          <input
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                addGrade();
                setFocus(!focus);
              }
            }}
            value={newGrade}
            autoFocus={focus}
            className="p-3 w-full text-white outline-none bg-transparent text-center placeholder:text-[#grey] "
            placeholder="Add Grade"
            onChange={(e) => {
              setNewGrade(e.target.value);
            }}
          />
        </div>
      )}
    </td>
  );
}
