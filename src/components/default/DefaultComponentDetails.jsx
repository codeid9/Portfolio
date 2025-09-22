import { Link, useLocation, useParams } from "react-router-dom";
import componentsData from "../../data/comp-data.js";

function DefaultComponentDetails() {
    const { compname } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="min-h-screen w-full pt-16">
            <button>
                <Link
                    to="/category"
                    className="block h-full w-full bg-blue-600 text-white rounded px-4 py-1 mt-2 ml-4 active:scale-95"
                >
                    Back
                </Link>
            </button>
            <h1 className="text-center capitalize text-4xl py-4 font-extrabold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text">
                Explore {compname.replace("-", " ")}
            </h1>
            {componentsData &&
                componentsData.map(({ text, data }) => {
                    if (text.toLowerCase() === compname) {
                        return data && data.length ? (
                            data.map(({ img, description, path, name }) => {
                                return (
                                    <div
                                        key={path}
                                        className="py-10 h-full w-full flex flex-col md:flex-row"
                                    >
                                        <div className="sm:flex-5 flex item-center justify-center p-4">
                                            <img
                                                src={img}
                                                alt="component image"
                                                className="w-sm md:-rotate-12 hover:rotate-0 transition duration-200 shadow-2xl rounded"
                                            />
                                        </div>
                                        <div className="sm:flex-7 flex flex-col gap-4 items-center justify-around">
                                            <h1 className="text-4xl font-bold capitalize">
                                                {name}
                                            </h1>
                                            <p className="px-8  md:p-0  w-full md:w-4/5 sm:text-xl md:text-2xl text-justify">
                                                {description}
                                            </p>
                                            <button className="bg-gradient-to-br from-pink-600 via-violet-700 to-blue-800 w-2xs h-12 rounded-4xl text-white hover:-translate-y-2 transition duration-200">
                                                <Link
                                                    to={pathname + "/" + path}
                                                    className="w-full h-full flex items-center justify-center"
                                                >
                                                    View
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h1
                                key={text}
                                className="text-center font-thin text-3xl capitalize pt-4"
                            >
                                {compname.replace("-", " ")} Not Found:(
                            </h1>
                        );
                    }
                })}
        </div>
    );
}

export default DefaultComponentDetails;
