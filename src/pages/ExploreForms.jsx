import DefaultComponentDetails from '../components/default/DefaultComponentDetails.jsx'
import { FormData } from '../data/data.js'

function ExploreForms() {
  return (
     <div className="min-h-screen w-full">
        <h1 className='text-center text-4xl py-4 font-extrabold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text'>Explore Forms</h1>
        {
          (FormData && FormData.length) ? FormData.map((data,index)=>(
            <DefaultComponentDetails data={data} key={index} />
          )) : <h1>Forms Not Found!</h1>
        }
    </div>
  )
}

export default ExploreForms