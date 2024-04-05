import React from 'react'

function FeaturedCard() {
  return (
    <>
      <div className=' w-full flex flex-col gap-4 md:w-[80%]  mx-auto p-4'>
        <h1 className='text-2xl font-bold '>
            Featured Learning Paths
        </h1>
        <div className='card-grid flex flex-1 flex-col lg:flex-row gap-4  '>
            <div className='card flex flex-col md:flex-row border-2 border-gray-200 gap-4 p-4 rounded-md items-center'>
                <div className="card-img w-64 h-full flex items-center rounded-xl overflow-hidden ">
                    <img src="https://media.istockphoto.com/id/1660866901/photo/ruler-set-ruler-varieties.jpg?s=2048x2048&w=is&k=20&c=ANC7115SiKIb1kYHIkHw1tL2Sbf7DaE_8Dy1rhCQhq0=" className='w-full h-full object-cover' alt="" />
                </div>
                <div className="card-text flex flex-col gap-1">
                    <p className='text-md text-gray-400'> 6 Courses</p>
                    <h2 className='text-2xl font-bold '> Foundational Math</h2>
                    <p className='text-md text-gray-400'>This 7-Course path starts with pre-algebra and builds up to fundamentals of algebra and geometry.Let's get startes!</p>

                    <div className='flex w-44 gap-4 items-center bg-yellow-400 rounded-2xl px-4 py-2'>
                        <i class="fa-solid fa-bookmark"></i>
                        <p className='text-white'> In Progress </p>
                    </div>
                </div>
            </div>
            <div className='card flex flex-col md:flex-row border-2 border-gray-200 gap-4 p-4 rounded-md items-center'>
                <div className="card-img w-64 h-full flex items-center rounded-xl overflow-hidden ">
                <img src="https://media.istockphoto.com/id/1660866901/photo/ruler-set-ruler-varieties.jpg?s=2048x2048&w=is&k=20&c=ANC7115SiKIb1kYHIkHw1tL2Sbf7DaE_8Dy1rhCQhq0=" className='w-full h-full object-cover' alt="" />
                </div>
                <div className="card-text flex flex-col gap-1">
                    <p className='text-md text-gray-400'> 6 Courses</p>
                    <h2 className='text-2xl font-bold '> Foundational Math</h2>
                    <p className='text-md text-gray-400'>This 7-Course path starts with pre-algebra and builds up to fundamentals of algebra and geometry.Let's get startes!</p>

                    <div className='flex w-44 gap-4 items-center bg-yellow-400 rounded-2xl px-4 py-2'>
                        <i class="fa-solid fa-bookmark"></i>
                        <p className='text-white'> In Progress </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedCard