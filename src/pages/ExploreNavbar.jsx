import DefaultComponentDetails from "../components/default/DefaultComponentDetails.jsx"
const data = {
    name:"Project Name",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita velit, et eos culpa aut dicta rerum fugiat quae harum laboriosam! Eligendi itaque non quod laboriosam enim officia laudantium suscipit labore.",
    img:"/dp.jpg",
    path:"/nav01"
}
function ExploreNavbar() {
  return (
    <div className="min-h-screen w-full">
        <h1 className='text-center text-4xl py-4 font-extrabold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-800 text-transparent bg-clip-text'>Explore Navbars</h1>
        <DefaultComponentDetails data={data} />
    </div>
  )
}

export default ExploreNavbar