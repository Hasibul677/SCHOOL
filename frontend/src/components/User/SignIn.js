import React from 'react';

const SignIn = () => {
  return (
    <div className='m-3 flex justify-center'>
      <div class=" w-full md:w-1/2">
      <div>
        <h2 className="text-center text-3xl font-bold">Sign In</h2>
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="uppercase block text-gray-700 text-xs font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div class="mb-6">
          <label class="uppercase block text-gray-700 text-xs font-bold mb-2 " for="password">
            Password
          </label>
          <input
            class="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex gap-10 items-center justify-between">
          <div>
          <button
            class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          </div>
          <div>
          <a class=" align-baseline font-bold text-sm text-sky-700 hover:text-blue-800" href="#">
          Already have an Account? {""}
          <span>
                <a className="text-red-400">
                  Please Sign In
                </a>
              </span>
          </a>
          </div>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy; 2022 <i><a href="">Green Software Group</a></i> All rights reserved.</p>
    </div>
    </div>
  );
};

export default SignIn;
