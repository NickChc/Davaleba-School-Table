import { useContext } from "react";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";
import { TableRow } from "./tableRow";

export function TableBody() {
  const { users } = useContext(GlobalContext);

  return (
    <tbody>
      {users?.map((user, index) => {
        return (
          <TableRow
            bg={index % 2 === 0 ? "bg-[#3b3b3b]" : "bg-[#2b2b2b]"}
            key={user.id}
            user={user}
          />
        );
      })}
    </tbody>
  );
}
