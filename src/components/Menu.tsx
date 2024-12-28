import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link
          className="text-xl font-roboto text-secondary font-semibold hover:text-secondary rounded-full"
          to="/classes"
        >
          CLASSES
        </Link>
      </li>
      <li>
        <Link
          className="text-xl font-roboto  text-secondary font-semibold hover:text-secondary rounded-full"
          to="/prices"
        >
          PRICES
        </Link>
      </li>
      <li>
        <Link
          className="text-xl font-roboto  text-secondary font-semibold hover:text-secondary rounded-full"
          to="/About"
        >
          ABOUT
        </Link>
      </li>
    </ul>
  );
}
