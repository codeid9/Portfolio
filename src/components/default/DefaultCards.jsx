import { Link } from "react-router-dom";

function DefaultCards({ text, description, path }) {
    return (
        <div className="bg-white p-3 rounded shadow h-full w-[clamp(240px,100%,400px)] mx-auto flex flex-col justify-around gap-2 border border-[#0001]">
            <h1 className="font-bold uppercase">{text}</h1>
            <p>{description}</p>
            <button className="bg-blue-600 w-full outline-none rounded text-white cursor-pointer active:scale-95 transition-all">
                <Link to={`/components/${path}`} className=" w-full block h-full py-1">View All</Link>
            </button>
        </div>
    );
}

export default DefaultCards;
