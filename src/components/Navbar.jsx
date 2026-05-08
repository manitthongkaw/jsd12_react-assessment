import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <header className="flex flex-wrap justify-center gap-4 font-semibold text-center p-4 rounded-2xl bg-white">
      <Link className="min-w-30 px-4 py-2 rounded-lg hover:text-white bg-sky-50 hover:bg-sky-600 transition-all" to="/">Home</Link>
      <Link className="min-w-30 px-4 py-2 rounded-lg hover:text-white bg-sky-50 hover:bg-sky-600 transition-all" to="/owner">Owner</Link>
    </header>
  );

};