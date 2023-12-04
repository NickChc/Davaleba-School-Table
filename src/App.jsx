import { ChooseWeeks } from "./features/chooseWeeks"

function App() {


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="p-3 flex items-center bg-[grey] w-full ">
        <ChooseWeeks />
      </div>
    </div>
  );
}

export default App
