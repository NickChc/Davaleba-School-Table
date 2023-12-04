import { useContext } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { TableHeader } from "./tableHeader";

export function Table() {
  const { currentWeekId } = useContext(GlobalContext);
  return (
    <div className="border-solid border border-black mt-12 ">
      <table className=" border-collapse border-solid border border-black">
        <TableHeader />
      </table>
    </div>
  );
}
