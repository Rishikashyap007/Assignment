import React from "react";

function Streak(){
    return(
        <>
          <div className="h-64 px-4 py-4 gap-4 flex flex-col justify-evenly items-center md:flex-row">
            <div className="flex gap-4 flex-1 justify-center items-center md:border-r-2 border-gray-200">
                <div className="px-2 py-3  md:px-4 md:py-5 border-8 border-yellow-400 rounded-full">
                    <p className="text-xl font-medium"> 2⚡ </p>
                </div>
                <div className="flex flex-col gap-1">
                    <h2 className="text-md font-bold md:text-3xl">You are on a 2-day streak!</h2>
                    <div className="flex justify-start gap-3">
                        <p className="text-sm md:text-md">2 Longest streak</p>
                        <p className="text-sm md:text-md">19 Lessons completed</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 md:gap-16 flex-1 justify-center">
                <div className="py-4 px-2 flex flex-col gap-2 justify-center items-center ">
                    <p className="font-semibold text-xl">W</p>
                    <i class="fa-solid fa-bolt text-yellow-400"></i>
                </div>
                <div className="py-4 px-2 flex flex-col gap-2 justify-center items-center border-2 border-yellow-600 rounded-full">
                    <p className="font-semibold text-xl">Th</p>
                    <i class="fa-solid fa-bolt text-yellow-400"></i>
                </div>
                <div className="py-4 px-2 flex flex-col gap-2 justify-center items-center  ">
                    <p className="font-semibold text-xl ">F</p>
                    <i class="fa-solid fa-bolt text-gray-400"></i>
                </div>
                <div className="py-4 px-2 flex flex-col gap-2 justify-center items-center ">
                    <p className="font-semibold text-xl">S</p>
                    <i class="fa-solid fa-bolt text-gray-400"></i>
                </div>
                <div className=" py-4 px-2 flex flex-col gap-2 justify-center items-center">
                    <p className="font-semibold text-xl">Su</p>
                    <i class="fa-solid fa-bolt text-gray-400"></i>
                </div>
            </div>
          </div>
        </>
    )
}
export default Streak;






