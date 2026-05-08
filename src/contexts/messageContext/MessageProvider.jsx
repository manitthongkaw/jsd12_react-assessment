import { useState, useEffect } from "react";
import { MessageContext } from "./MessageContext";
import { getMembers, createMember, deleteMember } from "../../api/member";

export const MessageProvider = ({children}) => {

  const [homeUserActive, setHomeUserActive] = useState(false);
  const [homeAdminActive, setHomeAdminActive] = useState(false);
  const handleHomeUserToggle  = () => { setHomeAdminActive(false), setHomeUserActive(true)  };
  const handleHomeAdminToggle = () => { setHomeUserActive(false) , setHomeAdminActive(true) };

  const [members, setMembers] = useState([]);
  const fetchMembers = async () => setMembers(await getMembers() || []);
  const [formData, setFormData] = useState({ name:"", lastname:"", position:"" });
  const handleChange = (event) => setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleCreateMember(formData);
    setFormData({ name:"", lastname:"", position:"" });
  }
  const handleCreateMember = async (newMember) => { await createMember(newMember), fetchMembers() };
  const handleDeleteMember = async (memberId)  => { await deleteMember(memberId) , fetchMembers() };

  useEffect(() => {
    const loadMembers = async () => await fetchMembers();
    loadMembers()
  }, [])

  return(
    <MessageContext.Provider value={{homeUserActive, handleHomeUserToggle, homeAdminActive, handleHomeAdminToggle, members, formData, handleChange, handleSubmit, handleDeleteMember}}>
      {children}
    </MessageContext.Provider>
  );
};