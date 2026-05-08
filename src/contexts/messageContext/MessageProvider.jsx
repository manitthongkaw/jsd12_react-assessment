import { MessageContext } from "./MessageContext";

export const MessageProvider = ({children}) => {

  return(
    <MessageContext.Provider>
      {children}
    </MessageContext.Provider>
  );
};