export default function HomeAdmin() {

  return (
    <section id="HomeAdmin" className="flex flex-col gap-4">
      <form>
        <h2 className="w-full text-lg font-semibold">Create User Here</h2>
        <input type="text" id="firstName" name="firstName" placeholder="First name" maxlength="120" required />
        <input type="text" id="lastName" name="lastName" placeholder="Last name" maxlength="120" required />
        <input type="text" id="position" name="position" placeholder="Position" maxlength="120" required />
        <button type="submit" class="cursor-pointer shrink-0 leading-10 px-4 text-white rounded-lg bg-green-600 hover:bg-green-700 transition-all" onclick="event.preventDefault()">Save</button>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="text-center"><button className="cursor-pointer size-7 font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all">X</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="text-center"><button className="cursor-pointer size-7 font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all">X</button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="text-center"><button className="cursor-pointer size-7 font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all">X</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  );

};