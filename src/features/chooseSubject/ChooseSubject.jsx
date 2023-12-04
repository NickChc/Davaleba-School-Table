import { useContext } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { Button } from "../../components/button";

export function ChooseSubject() {
  const { subjects_initial, currentSubjectId, setCurrentSubjectId } =
    useContext(GlobalContext);

  return (
    <div className="w-[20%] flex justify-between  ">
      {subjects_initial.map((subject) => {
        const active = currentSubjectId === subject.id;
        return (
          <Button
            key={subject.id}
            active={active}
            click={() => {
              if (!active) {
                setCurrentSubjectId(subject.id);
              } else {
                setCurrentSubjectId(undefined);
              }
              console.log(currentSubjectId);
            }}
            text={subject.name}
          />
        );
      })}
    </div>
  );
}
