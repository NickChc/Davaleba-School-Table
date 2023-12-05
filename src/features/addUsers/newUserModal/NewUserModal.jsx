import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../../../context/globalContext/GlobalContext";

import { IoMdClose } from "react-icons/io";

export function NewUserModal() {
  const { modalVisible, setModalVisible, users, setUsers } =
    useContext(GlobalContext);

  const [focus, setFocus] = useState(true);

  const [newUserName, setNewUserName] = useState("");
  const [newUserSurname, setNewUserSurname] = useState("");

  function createUser() {
    if (newUserName === "") {
      alert("Enter Name First");
    } else if (newUserSurname === "") {
      alert("Enter Surname First");
    } else if (!isNaN(newUserName) || !isNaN(newUserSurname)) {
      alert("User Name And Surname Must Be Text Inputs!");
    } else {
      const newUser = {
        id: uuidv4(),
        name: newUserName,
        surname: newUserSurname,
      };

      users ? setUsers((prev) => [...prev, newUser]) : setUsers([newUser]);

      setModalVisible(false);
      setNewUserName("");
      setNewUserSurname("");
    }
  }

  if (modalVisible) {
    return (
      <div
        onClick={() => setModalVisible(false)}
        className="fixed z-[1] block left-0 top-0 w-full h-full bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] "
      >
        <div className="bg-[#fefefe] p-1 mx-auto my-[15%] border-solid border border-[#888] w-[60%] ">
          <IoMdClose
            onClick={() => setModalVisible(false)}
            className="text-[#aaa] text-none float-right hover:cursor-pointer hover:text-black "
          />
          {/* stopPropagation: frees modal child from parent onCLick function */}
          <div
            className="flex flex-col items-center py-[20px]"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  createUser();
                }
              }}
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              autoFocus={focus}
              className="p-3 m-3 w-[40%] border-solid border-[2px] border-[blue] rounded-lg outline-none "
              placeholder="Enter Name"
            />
            <input
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  createUser();
                }
              }}
              value={newUserSurname}
              onChange={(e) => setNewUserSurname(e.target.value)}
              className="p-3 m-3 w-[40%] border-solid border-[2px] border-[blue] rounded-lg outline-none "
              placeholder="Enter Surname"
            />

            <button
              className="rounded-lg p-3 m-3 cursor-pointer border-solid border border-[blue] bg-[blue] text-white font-semibold w-[40%] "
              onClick={createUser}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}
