import { useContext/*, useState*/ } from "react"
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function HomeAdmin() {

  const {members, formData, handleChange, handleSubmit, handleDeleteMember} = useContext(MessageContext)

  return (
    <section id="HomeAdmin" className="flex flex-col gap-8">
      <form onSubmit={handleSubmit}>
        <h2 className="w-full text-lg font-semibold">Create User Here</h2>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" maxLength="120" required />
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last name" maxLength="120" required />
        <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} placeholder="Position" maxLength="120" required />
        <button type="submit" className="cursor-pointer shrink-0 leading-10 px-4 text-white rounded-lg bg-green-600 hover:bg-green-700 transition-all">Save</button>
      </form>
      <table>
        <colgroup>
          <col className="w-auto" />
          <col className="w-auto" />
          <col className="w-auto" />
          <col className="w-px" />
        </colgroup> 
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0
            ? ([...members].sort((a, b) => Number(b.id) - Number(a.id)).map((member, index) => (
                <tr key={index}>
                  <td>{member.name || "-"}</td>
                  <td>{member.lastname || "-"}</td>
                  <td>{member.position || "-"}</td>
                  <td className="text-center">
                    <button type="button" onClick={() => handleDeleteMember(member.id)}
                      className="cursor-pointer size-7 font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all">X</button></td>
                </tr>
              )))
            : <tr>
                <td colSpan="4" className="text-center">Data not found.</td>
              </tr>
          }
        </tbody>
      </table>
    </section>
  );

};