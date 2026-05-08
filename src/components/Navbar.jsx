import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <header className="flex gap-4 p-4 rounded-2xl bg-white">
      <Link className="p-4 rounded-lg hover:text-white bg-sky-50 hover:bg-sky-600" to="/">Home</Link>
      <Link className="p-4 rounded-lg hover:text-white bg-sky-50 hover:bg-sky-600" to="/owner">Owner</Link>
    </header>
  );

};