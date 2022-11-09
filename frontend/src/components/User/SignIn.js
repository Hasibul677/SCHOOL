import React from 'react';

const SignIn = () => {
  return (
    <div className='m-3 flex justify-center'>
      <div className=" w-full md:w-1/2">
      <div>
        <h2 className="text-center text-3xl font-bold">Sign In</h2>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="uppercase block text-gray-700 text-xs font-bold mb-2" for="username">
            Username
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="mb-6">
          <label className="uppercase block text-gray-700 text-xs font-bold mb-2 " for="password">
            Password
          </label>
          <input
            className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <div>
          <button
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          </div>
          <div>
          <a className=" align-baseline font-bold text-sm text-sky-700 hover:text-blue-800" href="#">
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
      <p className="text-center text-gray-500 text-xs">&copy; 2022 <i><a href="">Green Software Group</a></i> All rights reserved.</p>
    </div>
    </div>
  );
};

export default SignIn;
