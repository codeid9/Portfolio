import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

const nav = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "Components",
        path: "/category",
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
    const mobileNavRef = useRef(null);
    const [openNav, setOpenNav] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                setOpenNav(false);
            }
        }
        window.scrollTo(0, 0);
        if (openNav) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openNav, pathname]);

    return (
        <div className="relative z-50 flex justify-between items-center px-4 h-16 w-full border-b border-[#0002] bg-white">
            <Link to="/" className="font-extrabold text-3xl uppercase">
                CodeId9
            </Link>
            {/* for laptop & destop */}
            <ul className="hidden md:flex gap-1 capitalize h-full items-center">
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
                id="mobileNav"
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
                <ul
                    className="md:hidden absolute right-0 z-30 top-16 bg-white p-2 shadow"
                    ref={mobileNavRef}
                >
                    {nav && nav.length
                        ? nav.map(({ text, path }) => (
                              <li
                                  key={text}
                                  className="hover:text-blue-600 hover:shadow-xl hover:border-[#0002] rounded border border-transparent p-2 text-xl transition-all"
                                  onClick={() => setOpenNav(false)}
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
