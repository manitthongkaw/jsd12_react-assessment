import { useContext } from "react";
import { MessageContext } from "../contexts/messageContext/MessageContext";

export default function HomeUser() {

  const {members} = useContext(MessageContext)

  return (
    <section id="HomeUser">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.length > 0
            ? ([...members].sort((a, b) => Number(b.id) - Number(a.id)).map((member, index) => (
                <tr key={index}>
                  <td>{member.name || "-"}</td>
                  <td>{member.lastname || "-"}</td>
                  <td>{member.position || "-"}</td>
                </tr>
              )))
            : <tr>
                <td colSpan="3" className="text-center">Data not found.</td>
              </tr>
          }
        </tbody>
      </table>
    </section>
  );

};