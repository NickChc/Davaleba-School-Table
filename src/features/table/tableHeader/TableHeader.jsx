import { useContext } from "react";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";
import { TableEl } from "../../../components/tableEl";

export function TableHeader() {
    const { days_initial, users } = useContext(GlobalContext);
  return (
    <thead>
      <tr className="bg-[#3b3b3b] border-solid border border-black ">
        <TableEl text={"Name"} />
        <TableEl text={"Surname"} />
        <TableEl text={"Monday"} />
        <TableEl text={"Tuesday"} />
        <TableEl text={"Wednesday"} />
        <TableEl text={"Thursday"} />
        <TableEl text={"Friday"} />
      </tr>
    </thead>
  );
}
