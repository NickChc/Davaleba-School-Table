import { useContext, useState } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { Button } from "../../components/button";

export function ChooseWeeks() {
  const { weeks_initial } = useContext(GlobalContext);
  return (
    <div className="w-[30%] flex justify-between">
      {weeks_initial.map((week) => {
        const [active, setActive] = useState(true);

        return <Button key={week.id} active={active} text={week.name} />;
        console.log(week.name);
      })}
    </div>
  );
}
