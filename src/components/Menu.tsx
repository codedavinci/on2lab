import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link
          className=" font-poppins text-xl  text-secondary font-semibold hover:text-secondary rounded-full"
          to="/classes"
        >
          CLASSES
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins text-xl  text-secondary font-semibold hover:text-secondary rounded-full"
          to="/prices"
        >
          PRICES
        </Link>
      </li>
      {/* <li>
        <Link
          className="font-poppins text-xl text-secondary font-semibold hover:text-secondary rounded-full"
          to="/About"
        >
          ABOUT US
        </Link>
      </li> */}
    </ul>
  );
}
