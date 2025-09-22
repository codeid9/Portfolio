import { Link } from "react-router-dom";
import DefaultSearch from "../components/default/DefaultSearch.jsx";

function Home() {
    return (
        <div className="min-h-screen pt-20">
            <div className="">
            <DefaultSearch />
            <div className="flex flex-col gap-4 mt-4">
                <h1 className="text-5xl md:text-6xl text-center px-3 bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text  font-extrabold">
                    Welcome To My <br className="sm:block hidden" />
                    Portfolio.
                </h1>
                <figure className="w-3xs aspect-square rounded-full mx-auto bg-gradient-to-tr from-pink-500 via-violet-600 via-80% to-blue-800 p-2 relative shadow-2xl shadow-[#0005]">
                    <div className="h-full w-full rounded-full relative overflow-hidden">
                        <img src="/dp.jpg" alt="dp" className="rounded-full" />
                        <figcaption className="absolute bottom-0 w-full text-center font-extrabold uppercase backdrop-blur-lg py-2 text-shadow-xs text-2xl text-white">
                            CodeId9
                        </figcaption>
                    </div>
                </figure>
                <button className="block mx-auto bg-gradient-to-r from-blue-800 via-violet-600 to-pink-500 text-white rounded-4xl w-3xs cursor-pointer text-xl overflow-hidden relative hover:shadow-xl hover:scale-95 active:opacity-80 transition-all">
                    <Link to="/category" className="p-4 block h-full w-full">Explore</Link>
                </button>
            </div>
            </div>
        </div>
    );
}

export default Home;
