import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

const nav = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "Components",
        path: "/components",
    },
    {
        text: "Pages",
        path: "/pages",
    },
    {
        text: "Projects",
        path: "/projects",
    },
];

function DefaultNavbar() {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className="flex justify-between items-center px-4 h-16 w-full border-b border-[#0002]">
            <Link to="/" className="font-extrabold text-3xl uppercase">
                CodeId9
            </Link>
            {/* for laptop & destop */}
            <ul className="hidden md:flex gap-1 capitalize">
                {nav && nav.length
                    ? nav.map(({ text, path }) => (
                          <li
                              key={text}
                              className="hover:text-blue-600 text-xl transition-all"
                          >
                              <Link
                                  className="block w-full h-full px-2"
                                  to={path}
                              >
                                  {text}
                              </Link>
                          </li>
                      ))
                    : null}
            </ul>
            {/* for tablet & mobiles*/}
            <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                    <FaBarsStaggered className="text-blue-600" />
                ) : (
                    <FaBars />
                )}
            </div>
            {openNav ? (
                <ul className="md:hidden absolute right-0 top-16 bg-white p-2 shadow">
                    {nav && nav.length
                        ? nav.map(({ text, path }) => (
                              <li
                                  key={text}
                                  className="hover:text-blue-600 hover:shadow-xl hover:border-[#0002] rounded border border-transparent p-2 text-xl transition-all"
                              >
                                  <Link
                                      className="block w-full h-full px-2"
                                      to={path}
                                  >
                                      {text}
                                  </Link>
                              </li>
                          ))
                        : null}
                </ul>
            ) : null}
        </div>
    );
}

export default DefaultNavbar;
