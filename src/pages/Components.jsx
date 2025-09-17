import DefaultCards from "../components/default/DefaultCards.jsx";
import { Link } from "react-router-dom";
import componentsData from "../data/comp-data.js";

function Components() {
    return (
        <div className="min-h-screen p-4">
            <button>
                <Link
                    to="/"
                    className="block h-full w-full bg-blue-600 text-white rounded px-4 py-1 mt-2 ml-4 active:scale-95"
                >
                    Back
                </Link>
            </button>
            <h1 className="text-center capitalize text-4xl py-4 font-extrabold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text">
                Category
            </h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center ">
                {componentsData && componentsData.length ? (
                    componentsData.map(({ text, path, description }) => (
                        <DefaultCards
                            key={text}
                            text={text}
                            description={description}
                            path={path}
                        />
                    ))
                ) : (
                    <h1 className="text-2xl">Components Not Found.</h1>
                )}
            </div>
        </div>
    );
}

export default Components;
