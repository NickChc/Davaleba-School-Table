import { useContext } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";

export function Table() {
  return (
    <div className="border-solid border border-black mt-12 ">
      <table className=" border-collapse border-solid border border-black">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
