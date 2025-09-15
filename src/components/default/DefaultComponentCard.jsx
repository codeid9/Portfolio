import React from 'react'

function DefaultComponentCard({imgUrl,tech,description}) {
  return (
    <div className='w-[clamp(200px,100%,350px)] bg-gray-100 shadow-md p-2 rounded-2xl'>
      <div>
        <div className='w-full relative hover:'>
          <img src={imgUrl} alt="project img" className='rounded-lg' />
        </div>
        <section className='flex flex-col gap-2 pt-2'>
          <ul className='flex gap-2 uppercase'>
            {
              tech && tech.map((item)=>(<li key={item}>{item}</li>))
            }</ul>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{description}</p>
            <button className='w-full bg-blue-600 rounded py-2 text-white cursor-pointer'>View</button>
        </section>
      </div>
    </div>
  )
}

export default DefaultComponentCard