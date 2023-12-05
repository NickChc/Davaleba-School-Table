import { useContext } from "react";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";
import { TableEl } from "../../../components/tableEl";

export function TableHeader() {
    const { days_initial, users } = useContext(GlobalContext);
  return (
    <thead>
      <tr className="bg-[#1b1b1b] border-solid border border-black ">
        <TableEl txtClr={"text-[gold]"} text={"Name"} />
        <TableEl txtClr={"text-[gold]"} text={"Surname"} />
        <TableEl txtClr={"text-[gold]"} text={"Monday"} />
        <TableEl txtClr={"text-[gold]"} text={"Tuesday"} />
        <TableEl txtClr={"text-[gold]"} text={"Wednesday"} />
        <TableEl txtClr={"text-[gold]"} text={"Thursday"} />
        <TableEl txtClr={"text-[gold]"} text={"Friday"} />
      </tr>
    </thead>
  );
}
