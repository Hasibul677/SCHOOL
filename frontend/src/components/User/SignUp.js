import React, { useEffect, useState } from "react";
import swal from "sweetalert"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../Actions/userAction";
import { CLEAR_ERROR } from "../../Constants/userConstants";

const SignUp = () => {
  const { user, error, isAuthenticated } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("https://www.w3schools.com/howto/img_avatar.png");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    profile: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "profile") {
      if (e.target.files[0].size <= 2097152) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatar(reader.result);
            let info = { ...data };
            info[e.target.name] = reader.result;
            setData(info);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        swal("File sizes should be less or equal 2MB!");
      }
    } else {
      let info = { ...data };
      info[e.target.name] = e.target.value;
      setData(info);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(data));

  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR());
    }

  }, [dispatch, error, isAuthenticated]);
  
  console.log(user);

  return (
    <div className="m-3 mt-32 flex justify-center items-center">
      <div className=" w-full md:w-1/3">
        <div>
          <h2 className="text-center text-3xl font-serif uppercase ">
            Registration Form
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center">
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={avatar}
                alt=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email Address"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2 ">
              Password
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="*********"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2 ">
              Confirm Password
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="*********"
              name="confirm"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="uppercase block text-gray-700 text-xs font-bold mb-2 ">
              Profile
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="profile"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
