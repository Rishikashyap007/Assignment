import React from "react";

function Card() {
  return (
    <>
      <div className="md:w-[80%] mx-auto px-4 py-4 flex flex-col gap-2 justify-center items-start">
        <h1 className="text-2xl font-bold"> Pick where you left off</h1>
        <div className="w-full md:gap-8 py-4 px-2 flex flex-col justify-center md:flex-row border-2 border-gray-300 rounded-md">
          <div className="flex gap-4 w-auto md:h-60 md:w-[40%]">
            <img
              src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-start gap-4  ">
            <p className="text-md text-gray-400">
              {" "}
              cryptocurrency . Lessons 1 of 19
            </p>
            <h2 className="text-2xl text-black font-bold">
              {" "}
              A Brief History of currency{" "}
            </h2>
            <p className="text-xl text-gray-500">
              {" "}
              Trust is the backbone of all currencies, from commidity monies to
              crypto.
            </p>
            <button className="bg-black text-white px-4 py-1 md:w-40 flex gap-2 items-center justify-center rounded-lg">
              <i class="fa-solid fa-play"></i>
              Resume course
            </button>
            <div className="w-full h-2 bg-gray-200 rounded-md">
              <div className="w-20 h-full bg-yellow-500 rounded-md">   
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

