import { pagesData } from '../data/data.js'
import DefaultCards from '../components/default/DefaultCards.jsx'

function Components() {
  return (
    <div className='min-h-screen p-4'>
        <h1 className='text-3xl font-bold'>Popular Components</h1>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center ">
                {pagesData && pagesData.length ? (
                    pagesData.map(({ text, path, description }) => (
                        <DefaultCards
                            key={text}
                            text={text}
                            description={description}
                            path={path}
                        />
                    ))
                ) : (
                    <p>Components Not Found.</p>
                )}
            </div>
    </div>
  )
}

export default Components