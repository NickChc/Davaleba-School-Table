import { useContext } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { Button } from "../../components/button";

export function ChooseWeeks() {
  const { weeks_initial, currentWeekId, setCurrentWeekId } =
    useContext(GlobalContext);
  return (
    <div className="w-[30%] flex justify-between">
      {weeks_initial.map((week) => {
        const active = currentWeekId === week.id;

        return <Button key={week.id} active={active} click={() => {
            if (!active) {
                setCurrentWeekId(week.id);
            } else {
                setCurrentWeekId(undefined);
            }
        }} text={week.name} />;
      })}
    </div>
  );
}
