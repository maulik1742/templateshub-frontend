import React from "react";

function contact() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 min-h-screen py-14">
      <div class="p-6 mx-auto max-w-xl bg-white rounded-xl">
        <h1 class="text-3xl text-black font-extrabold text-center">
          Contact us
        </h1>
        <form class="mt-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-medium text-black pl-1"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              class="w-full rounded-md py-2 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium  text-black pl-1"
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              class="w-full rounded-md py-2 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm/6 font-medium  text-black pl-1"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              class="w-full rounded-md py-2 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm/6 font-medium  text-black pl-1"
            >
              Message
            </label>
            <textarea
              placeholder="Enter Message"
              rows="6"
              class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-indigo-500"
            ></textarea>
          </div>
          <button
            type="button"
            class="text-white bg-indigo-600 hover:bg-indigo-700 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact;
