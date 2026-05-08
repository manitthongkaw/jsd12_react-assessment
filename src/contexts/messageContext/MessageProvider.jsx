import { useState } from "react";
import { MessageContext } from "./MessageContext";

export const MessageProvider = ({children}) => {

  // Home
  const [homeUserActive, setHomeUserActive] = useState(false);
  const [homeAdminActive, setHomeAdminActive] = useState(false);
  const handleHomeUserToggle = () => {setHomeAdminActive(false); setHomeUserActive(true);}
  const handleHomeAdminToggle = () => {setHomeUserActive(false); setHomeAdminActive(true);}

  return(
    <MessageContext.Provider value={{homeUserActive, handleHomeUserToggle, homeAdminActive, handleHomeAdminToggle}}>
      {children}
    </MessageContext.Provider>
  );
};