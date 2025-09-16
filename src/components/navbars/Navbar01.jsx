import { useState } from "react";
import { BiHome, BiShoppingBag } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { RiHandbagLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

const navData = [
    {
        path: "#shopping",
        Icon: BiShoppingBag,
    },
    {
        path: "#cart",
        Icon: BsCart,
    },
    {
        path: "#",
        Icon: BiHome,
    },
    {
        path: "#job",
        Icon: RiHandbagLine,
    },
    {
        path: "#settings",
        Icon: CiSettings,
    },
];

function Navbar01() {
    const [isActiveLink, setIsActiveLink] = useState("#");
    return (
        <div className="bg-blue-950 h-[calc(100dvh-4rem)] w-full relative overflow-hidden">
            <div className="absolute aspect-square bg-gradient-to-tr from-blue-800 to-blue-400 shadow-2xl rounded-full -top-16 -right-20 w-xs sm:w-sm md:w-md lg:w-lg"></div>
            <div className="absolute aspect-square bg-gradient-to-tr from-blue-800 to-blue-400 shadow-2xl rounded-full -bottom-4 -left-28 w-2xs sm:w-xs md:w-sm lg:w-md"></div>
            <nav className="w-xs sm:w-sm md:w-md h-16 md:h-20 bg-[#ffffff20] border-2 border-blue-400 absolute left-1/2 top-1/2 -translate-1/2 rounded-full backdrop-blur-2xl">
                <ul className="flex w-full h-full justify-around items-center text-2xl md:text-3xl text-blue-400">
                    {navData &&
                        navData.map(({ Icon, path }) => (
                            <a
                                href={path}
                                key={path}
                                className={`p-2 ${
                                    isActiveLink === path
                                        ? "bg-gradient-to-tl from-blue-400 to-blue-900 text-white rounded-full transition duration-100 scale-105 shadow-xl"
                                        : "transition duration-75 scale-95"
                                }
                                `}
                                onClick={() => {
                                    setIsActiveLink(path);
                                }}
                            >
                                <Icon />
                            </a>
                        ))}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar01;
