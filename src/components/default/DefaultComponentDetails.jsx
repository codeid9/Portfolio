import { Link, useLocation } from 'react-router-dom';

function DefaultComponentDetails({data}) {
    const {pathname}=useLocation();
    const { name, description, img,path } = data;
  return (
     <div className="h-full w-full flex flex-col md:flex-row pb-3">
            <div className="sm:flex-5 flex item-center justify-center p-4">
                <img
                    src={img}
                    alt="component image"
                    className="w-sm md:-rotate-12 hover:rotate-0 transition duration-200 shadow-2xl rounded"
                />
            </div>
            <div className="sm:flex-7 flex flex-col gap-4 items-center justify-around">
                <h1 className="text-4xl font-bold capitalize">{name}</h1>
                <p className="px-8  md:p-0  w-full md:w-4/5 sm:text-xl md:text-2xl text-justify">
                    {description}
                </p>
                <button className="bg-gradient-to-br from-pink-600 via-violet-700 to-blue-800 w-2xs h-12 rounded-4xl text-white hover:-translate-y-2 transition duration-200">
                    <Link to={pathname+path} className="w-full h-full flex items-center justify-center">View</Link>
                </button>
            </div>
        </div>
  )
}

export default DefaultComponentDetails