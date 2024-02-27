import { Children, createContext, useState } from "react";
export const ModalContextApi = createContext(false);

const Modalprovider = ({children})=>{
    let [toggle , setToggle ] = useState(false);
    let handleToggle = ()=>{
        setToggle(!toggle);
    }
    return <ModalContextApi.Provider value={{toggle, handleToggle}}>{children}</ModalContextApi.Provider>
}
export default Modalprovider