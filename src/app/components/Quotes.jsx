
import React from 'react'

const Quotes = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="mx-auto pb-1 w-fit bg-gradient-to-br from-[#ff0039] via-[#fc00ff] to-[#ff0039] mb-4">
            <span className="block top-0 bg-[#121212] text-4xl font-bold text-white py-2 px-2">Quote of the Day</span>
          </div>
        <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-4 text-white'>
             <p className='text-center text-xl'>'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'</p>
            <p className='text-center font-bold text-xl mt-2'> – Ralph Waldo Emerson.</p>
        </div>
    </div>
  )
}

export default Quotes