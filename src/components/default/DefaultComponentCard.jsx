import { Link } from 'react-router-dom';

function DefaultComponentCard({data}) {
  const {name,path,imgUrl,technologies,description} = data;
  return (
    <div className='w-[clamp(200px,100%,350px)] bg-gray-100 shadow-md p-2 rounded-2xl'>
      <div>
        <div className='w-full relative hover:'>
          <img src={imgUrl} alt="project img" className='rounded-lg' />
        </div>
        <section className='flex flex-col gap-2 pt-2'>
          <h1 className='capitalize font-semibold'>{name}</h1>
          <ul className='flex gap-2 uppercase'>
            {
              technologies && technologies.map((item)=>(<li className='text-sm' key={item}>{item}</li>))
            }</ul>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
            <button className='w-full bg-blue-600 rounded text-white'>
              <Link to={`/category/${path}`} className='py-2 block w-full h-full'>View</Link> 
              </button>
        </section>
      </div>
    </div>
  )
}

export default DefaultComponentCard