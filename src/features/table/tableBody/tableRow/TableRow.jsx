import { useContext } from "react";

import { GlobalContext } from "../../../../context/globalContext/GlobalContext";
import { TableEl } from "../../../../components/tableEl";
import { DayGrade } from "../../dayGrade";

export function TableRow({ user, bg }) {
  const { currentWeekId, days_initial } = useContext(GlobalContext);

  const currentWeekDays = days_initial.filter(
    (day) => day.weekId === currentWeekId
  );

  return (
    <tr className={`${bg}  border-none `} >
      <TableEl text={user.name} />
      <TableEl text={user.surname} />
      {currentWeekDays?.map((day) => {
        return <DayGrade key={day.id} day={day} user={user} />;
      })}
    </tr>
  );
}
