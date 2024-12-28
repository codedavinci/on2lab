import MenuMobile from "./MenuMobile";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Header() {
  const { pathname } = useLocation();

  const isPricesPage = pathname === "/prices";

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start ">
        <MenuMobile />
        <Link to="/">
          <img className="h-8 w-auto sm:h-6 md:h-8 lg:h-10" src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu />
      </div>
      <div className="navbar-end">
        {isPricesPage || (
          <Link
            className="btn btn-secondary text-sm rounded-full px-4 py-2 sm:text-base md:btn-md lg:text-lg"
            to="/prices"
          >
            <>
              Enroll
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-5 w-5 md:h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </>
          </Link>
        )}
      </div>
    </div>
  );
}
