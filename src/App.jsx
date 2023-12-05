import { useContext } from "react";

import { GlobalContext } from "./context/globalContext/GlobalContext";

import { ChooseWeeks } from "./features/chooseWeeks";
import { ChooseSubject } from "./features/chooseSubject";
import { Table } from "./features/table";
import { AddUsers } from "./features/addUsers";
import { NewUserModal } from "./features/addUsers/newUserModal";

function App() {
  const { currentWeekId, currentSubjectId } = useContext(GlobalContext);

  return (
    <div className="w-full min-h-screen bg-[#4b4b4b] relative flex flex-col items-center justify-start">
      <div className="p-3 px-9 flex items-center justify-between bg-[grey] w-full ">
        <ChooseWeeks />
        {!currentWeekId && <h2 className="text-[red]">Choose Week</h2>}
        {!currentSubjectId && <h2 className="text-[red]">Choose Subject</h2>}
        <ChooseSubject />
      </div>
      <div className="w-full flex justify-center items-center ">
        <Table />
      </div>
      <NewUserModal />
      <AddUsers />
    </div>
  );
}

export default App;
