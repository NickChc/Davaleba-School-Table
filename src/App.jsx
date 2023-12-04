import { ChooseWeeks } from "./features/chooseWeeks";
import { ChooseSubject } from "./features/chooseSubject";
import { Table } from "./features/table";

function App() {


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="p-3 px-9 flex items-center justify-between bg-[grey] w-full ">
        <ChooseWeeks />
        <ChooseSubject />
      </div>
      <div className="w-full flex justify-center items-center ">
        <Table />
      </div>
    </div>
  );
}

export default App
