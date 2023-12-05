import { TableHeader } from "./tableHeader";
import { TableBody } from "./tableBody";

export function Table() {
  return (
    <div className="border-solid border border-black mt-12 ">
      <table className="bg-[#3b3b3b] border-collapse border-solid border border-white">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
