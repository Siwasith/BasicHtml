// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-neutral-900 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-3 m-4">
        <a href="#" className="flex">
          <svg
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-2"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z"
                fill="#fafafa"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
                fill="#fafafa"
              ></path>{" "}
            </g>
          </svg>

          <a
            href="#"
            className="my-2 mr-1 font-black text-white text-4xl no-underline"
          >
            Skyroon
          </a>
        </a>

        <ul className="flex list-none m-0 p-0 font-extrabold">
          <li className="m-1">
            <a
              href="#"
              className="text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded-sm"
            >
              Home
            </a>
          </li>
          <li className="m-1">
            <a
              href="#"
              className="text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded-sm"
            >
              About
            </a>
          </li>
          <li className="m-1">
            <a
              href="#"
              className="text-white text-base no-underline px-5 py-3 block hover:bg-gray-200 hover:text-gray-800 rounded-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
