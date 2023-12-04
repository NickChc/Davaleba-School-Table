import { ChooseWeeks } from "./features/chooseWeeks";
import { ChooseSubject } from "./features/chooseSubject";

function App() {


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="p-3 px-9 flex items-center justify-between bg-[grey] w-full ">
        <ChooseWeeks />
        <ChooseSubject />
      </div>
    </div>
  );
}

export default App
