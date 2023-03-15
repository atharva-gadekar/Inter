import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="bg-blue-100 mt-0 hidden lg:block">
        <nav className="bar mt-0 my-4 px-6 py-4 flex space-x-80 w-auto font-medium text-gray-600">
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
            {/* <li>Sign In</li>
                <li>Register</li> */}
          </ul>
          <ul className="hidden lg:flex space-x-12 w-auto mr-96 justify-center items-center ">
            <li>
              <button className="bg-white px-8 py-2 rounded-3xl text-blue-700 font-semibold">
                <a href="#">Login</a>
              </button>
            </li>
            <li>
              <a className="text-blue-700 font-semibold" href="#">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>

        <div className="block">
          <button
            type="button"
            class="mt-4 ml-4 inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
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
              class="hidden h-6 w-6"
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
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </a>

              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
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
