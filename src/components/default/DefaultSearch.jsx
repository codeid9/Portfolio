import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function DefaultSearch() {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="min-w-[clamp(280px,95%,550px)] flex items-center gap-2 w-fit mx-auto p-2 rounded shadow border border-[#0002] bg-white">
            <input
                type="text"
                placeholder="search..."
                className="w-full outline-hidden placeholder:capitalize"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                autoComplete="off"
            />
            {searchText ? (
                <IoClose className="text-2xl text-[#f00a] cursor-pointer" onClick={()=>setSearchText("")}/>
            ) : (
                <BiSearch className="text-2xl cursor-pointer text-[#0008]"/>
            )}
        </div>
    );
}

export default DefaultSearch;
