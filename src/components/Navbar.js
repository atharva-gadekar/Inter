import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [ismobileopen, setmobileopen] = useState(false);
  const toggle = () => {
    setmobileopen(!ismobileopen);
  };
  return (
    <div>
      <div className="absolute bg-transparent mt-0 hidden lg:block ">
        <nav className="bar mt-0  px-6 py-4 flex space-x-80 w-auto font-medium text-gray-600">
          <ul className="hidden lg:flex space-x-12 w-auto ml-96 justify-center items-center ">
            <li className="hover:text-blue-700">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Top</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Help</a>
            </li>
          
          </ul>
          <ul className="hidden lg:flex space-x-12 w-auto mr-96 justify-center items-center ">
            <li>
              <button className="bg-white px-8 py-2 rounded-3xl text-blue-700 font-semibold">
              <Link to='/login'>Login</Link>
              </button>
            </li>
            <li>
              <a className="text-blue-700 font-semibold" href="#">
              <Link to='/signup'>Register</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="block bg-gradient-to-br from-blue-100 to-white-400">
          <button
            type="button"
            className="mt-4 ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={ismobileopen}
            onClick={toggle}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className={`block h-6 w-6 ${ismobileopen ? "hidden" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              className={`h-6 w-6 ${ismobileopen ? "" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={`sm:hidden ${ismobileopen ? "" : "hidden"}`} id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
