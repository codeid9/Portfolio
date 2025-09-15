import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import DefaultComponentCard from "../components/default/DefaultComponentCard";
import DefaultComponentList from "../components/default/DefaultComponentList";

function ComponentsPage() {
    const {component} = useParams()
    const [listView,setListView]=useState(true);
  return (
    <div className='p-4 min-h-screen'>
        <div className='flex justify-between'>
        <button className='bg-blue-600 cursor-pointer text-white active:scale-95 transition-all shadow'>
            <Link to={"/components"} className='px-4 py-2 block w-full h-full'>Go Back</Link>
        </button>
        <button className="cursor-pointer sm:px-4 py-2 sm:w-[140px] active:scale-95 transition-all text-blue-600" onClick={()=>setListView(!listView)}>
          {
            listView 
            ? <>
            <FaThList className="inline-block sm:mr-2 text-2xl"/>
            <span className="hidden sm:inline-block font-bold">List View</span>
            </>
            : <>
            <BsFillGridFill className="inline-block sm:mr-2 text-2xl"/>
            <span className="hidden sm:inline-block font-bold">Card View</span>
            </>
          }
          </button>
        </div>
        <h1 className='font-bold capitalize text-3xl text-center'>Explore {component}.</h1>
          {
            listView 
            ? 
            <div className="p-2 mt-10 flex flex-col gap-3">
              <DefaultComponentList imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
              <DefaultComponentList imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
              <DefaultComponentList imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
            </div>
            :
            <div className="p-2 mt-10 grid place-items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               <DefaultComponentCard imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
               <DefaultComponentCard imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
               <DefaultComponentCard imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
               <DefaultComponentCard imgUrl={"/dp.jpg"} tech={["html","css","js"]} description={"Project description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis in eveniet quas alias temporibus expedita, facilis unde odit saepe earum debitis voluptatem tenetur obcaecati architecto cupiditate aspernatur soluta eum fuga."}/>
            </div>
          }

    </div>
  )
}

export default ComponentsPage