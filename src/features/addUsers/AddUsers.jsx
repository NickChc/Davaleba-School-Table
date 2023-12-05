import { useContext } from "react";

import { GlobalContext } from "../../context/globalContext/GlobalContext";
import { Button } from "../../components/button"

export function AddUsers() {
    const { setModalVisible } = useContext(GlobalContext);
    return (
        <div className="absolute bottom-9 left-9 ">
            <Button click={() => {
                setModalVisible(true);
            }} active={true} text={"Create New User"}/>
        </div>
    )
}