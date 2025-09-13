import DefaultCards from "../components/Cards/DefaultCards.jsx";
import DefaultSearch from "../components/SearchBox/DefaultSearch.jsx";
import { componentsData } from "../data/data.js";

function Home() {
    return (
        <div className="bg-[#eee] min-h-screen pt-4">
            <DefaultSearch />
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
                    <p>Components Not Found.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
