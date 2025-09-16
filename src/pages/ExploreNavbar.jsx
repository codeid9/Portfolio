import DefaultComponentDetails from "../components/default/DefaultComponentDetails.jsx"
import { NavData } from "../data/data.js"
function ExploreNavbar() {
  return (
    <div className="min-h-screen w-full">
        <h1 className='text-center text-4xl py-4 font-extrabold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text'>Explore Navbars</h1>
        {
          (NavData && NavData.length) ? NavData.map((data,index)=>(
            <DefaultComponentDetails data={data} key={index} />
          )) : <h1>Navbars Not Found!</h1>
        }
    </div>
  )
}

export default ExploreNavbar