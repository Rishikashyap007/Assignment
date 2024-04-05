import React from 'react'

function RecCard() {
  return (
    <>
      <div className="container w-full md:w-[80%] p-4 mx-auto flex flex-col gap-4">
        <h1 className='text-2xl font-bold'>
           Recommended For you
        </h1>
        <div className='card w-full md:w-[23%] h-auto flex flex-col  justify-center items-start border-2 border-gray-300 rounded-lg p-2 '>
         <div className="cardimg rounded-md overflow-hidden">
           <img src="https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVjb21tZW5kZWQlMjBjb3Vyc2UlMjBpY29uJTNBJTIwQW4lMjBpY29uJTIwc2hvd2luZyUyMGElMjBsYXB0b3AlMjBvciUyMGNvbXB1dGVyJTIwc2NyZWVuJTIwd2l0aCUyMGElMjBxdWVzdGlvbiUyMG1hcmsufGVufDB8fDB8fHww" alt="" />
         </div>
         <div className="card-text flex flex-col gap-2 p-2">
             <p className='text-sm'> Pre-Algebra.Lessons 1 of 28</p>
             <h2 className='text-xl font-bold'>Understanding Variables </h2>
             
         </div>
         <div className='w-full h-1 bg-gray-200 rounded-md'>
              </div>
      </div>
      </div>
     </>
  )
}

export default RecCard