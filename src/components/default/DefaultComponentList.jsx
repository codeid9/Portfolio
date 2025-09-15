function DefaultComponentList({tech,description,imgUrl}) {
    return (
        <div className="w-full h-36 p-4 hover:shadow-md transition flex gap-4 border border-[#0003] rounded">
            <img
                src={imgUrl}
                alt="item-image"
                className="h-28 aspect-square object-fit"
            />
            <section className="flex flex-col justify-between gap-2 w-[calc(100%-8rem)]">
                <h1 className="flex justify-between">
                    <span className="font-bold text-xl sm:text-2xl capitalize">Project name</span>
                    <button className="bg-blue-600 text-white px-4">View</button>
                </h1>
                <ul className="gap-1 flex">
                    {
                        tech && tech.map(technName=>(
                            <li key={technName} className="uppercase text-gray-800 bg-blue-50 border border-[#0001] px-2">{technName}</li>
                        ))
                    }
                </ul>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap w-full">{description}</p>
            </section>
        </div>
    );
}

export default DefaultComponentList;
