import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";
import Navbar from "../components/Navbar";
import HomeUser from "../components/HomeUser";
import HomeAdmin from "../components/HomeAdmin";

export default function Home() {

  const {homeUserActive, handleHomeUserToggle, homeAdminActive, handleHomeAdminToggle} = useContext(MessageContext);

  return (
    <>
      <Navbar />
      <section id="home" className="flex flex-col gap-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">Generation Thailand<br />
          React - Assessment</h1>
        <div className="button-group flex flex-wrap justify-center gap-4">
          <button className="cursor-pointer min-w-50 leading-10 text-white px-4 rounded-lg bg-slate-500 hover:bg-slate-600 transition-all" onClick={handleHomeUserToggle}>User Home Section</button>
          <button className="cursor-pointer min-w-50 leading-10 text-white px-4 rounded-lg bg-slate-500 hover:bg-slate-600 transition-all" onClick={handleHomeAdminToggle}>Admin Home Section</button>
        </div>
        {homeUserActive && <HomeUser />}
        {homeAdminActive && <HomeAdmin />}
      </section>
    </>
  );

};