function DefaultComponentList({description,imgUrl}) {
    return (
        <div className="w-full p-2 sm:p-4 hover:shadow-md transition flex gap-4 border border-[#0003] rounded">
            <div className="h-28 aspect-square bg-amber-300">
            <img
                src={imgUrl}
                alt="item-image"
                className="object-cover h-full w-full"
            />
            </div>
            <section className="flex flex-col justify-between gap-2 w-[calc(100%-8rem)]">
                <h1 className="font-bold text-xl sm:text-2xl capitalize">
                    Project name
                </h1>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap w-full">{description}</p>
                <button className="bg-blue-600 text-white px-4">View</button>
            </section>
        </div>
    );
}

export default DefaultComponentList;
