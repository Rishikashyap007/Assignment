import React from 'react'

function Cards() {
  return (
  <> 
     <div className="div-card-container w-full md:w-[80%] flex flex-col gap-2 mx-auto p-4">
     <h1 className='text-2xl font-bold'> Continue Learning </h1>
    <div className='container md:w-full mx-auto h-auto flex gap-4 flex-col md:flex-row justify-between items-center'>
      
      <div className='card w-full md:max-w-[25%] h-64 flex flex-col  justify-center items-start border-2 border-gray-300 rounded-lg p-2 '>
         <div className="cardimg rounded-md overflow-hidden">
           <img src="https://static.vecteezy.com/system/resources/thumbnails/014/783/440/small_2x/computer-icon-free-vector.jpg" alt="" />
         </div>
         <div className="card-text flex flex-col gap-2 p-2">
             <p className='text-sm'> Computer Memory . Lessons 2 of 26</p>
             <h2 className='text-md md:text-xl font-bold'>Binary,Decimal and Hexadecimal </h2>
             
         </div>
         <div className='w-full h-1 bg-gray-200 rounded-md'>
              </div>
      </div>
      <div className='card w-full md:max-w-[25%] h-64 flex flex-col justify-center items-start border-2 border-gray-300 rounded-lg p-2'>
         <div className="cardimg rounded-md overflow-hidden">
           <img src="https://media.istockphoto.com/id/1035988708/photo/3d-business-graph-shows-financial-growth.jpg?s=2048x2048&w=is&k=20&c=eIkBrJ1Dx9ELVoRkDfkNS-x8sBILqRTx6QLfMdt3lMk=" alt="" />
         </div>
         <div className="card-text flex flex-col gap-2 p-2">
             <p className='text-sm'> Random Variable & Distributions...</p>
             <h2 className='text-md md:text-xl font-bold'>Random Variable Applications </h2>
              
         </div>
         <div className='w-full h-1 bg-gray-200 rounded-md'>
              </div>
      </div>
      <div className='card w-full md:max-w-[25%] h-64 flex flex-col justify-center items-start border-2 border-gray-300 rounded-lg p-2'>
         <div className="cardimg rounded-md overflow-hidden">
           <img src="https://media.istockphoto.com/id/1623196376/photo/firing-neurons.jpg?s=2048x2048&w=is&k=20&c=evyhkYT4-mn5tzF7cj5Bunoodg7XhceHC7iVsbWRJVI=" alt="" />
         </div>
         <div className="card-text flex flex-col gap-2 p-2">
             <p className='text-sm'>Artificial Neural Networks-Lessons... </p>
             <h2 className='text-md md:text-xl font-bold'> Computationally Modeling The Brain </h2>
         </div>
         <div className='w-full h-1 bg-yellow-500 rounded-md'>
              </div>
      </div>
      <div className='card w-full md:max-w-[25%] h-64 flex flex-col justify-center items-start border-2 border-gray-300 rounded-lg p-2'>
         <div className="cardimg rounded-md overflow-hidden">
           <img src="https://plus.unsplash.com/premium_photo-1664392434825-eb95db0931d4?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         </div>
         <div className="card-text flex flex-col gap-2 p-2">
             <p className='text-sm'> Casino Probability _Lesson 3 of 16</p>
             <h2 className='text-md md:text-xl font-bold'>Avoid the  Scam </h2>
         </div>
         <div className='w-full h-1 bg-gray-200 rounded-md'>
         </div>
      </div>
    </div>
     </div>
  </>
  )
}

export default Cards