import { Link } from "react-router-dom";

export default function MenuMobile() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link
            className="
            font-poppins
            text-lg
            font-semibold
            hover:text-secondary
            rounded-full"
            to="/classes"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            className="
            font-poppins
            text-lg
            font-semibold
            hover:text-secondary
            rounded-full"
            to="/prices"
          >
            Prices
          </Link>
        </li>
        <li>
          <Link
            className="
            font-poppins
            text-lg
             font-semibold
             hover:text-secondary
             rounded-full"
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
