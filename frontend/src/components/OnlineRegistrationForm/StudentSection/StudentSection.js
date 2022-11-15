import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { studentInfoForm } from "../../../Actions/admissionAction";

const StudentSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    // student section
    fullName: "",
    addClass: "",
    gender: "",
    birth: "",
    phone: "",
    email: "",
    division: "",
    district: "",
    upazila: "",
    village: "",
    religion: "",
    birthCertificate: "",
    blood: "",
    transport: "",
    studentAvatar: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(studentInfoForm(data));
  }, [data, dispatch]);

  return (
    <div>
      {/* student info section -1*/}
      <section>
        <div className="container p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <div className="w-full flex items-center justify-center">
            <div className="bg-gray-100 py-2 px-10 w-full rounded-lg ">
              <div className="sm:text-2xl text-2xl font-semibold mb-4 pt-5">
                Student Section
                <hr className="bg-gray-800 mt-1" />
              </div>

              {/* All input div */}
              <div className="">
                <div className="md:flex gap-10">
                  {/* Student's Name */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Enter Full Name"
                      name="fullName"
                      required
                    />
                  </div>
                  {/* Add class */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Class"
                      name="addClass"
                    />
                  </div>
                  {/* Gender */}
                  <div className="w-full md:w-1/3">
                    <select
                      id="gender"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      name="gender"
                    >
                      <option>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* DOB */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="date"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Date of Birth"
                      name="birth"
                    />
                  </div>
                  {/* Phone */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Mobile Number"
                      name="phone"
                    />
                  </div>

                  {/* email */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="email"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* Division */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Division"
                      name="division"
                    />
                  </div>
                  {/* district */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="District"
                      name="district"
                    />
                  </div>
                  {/* Upazilla */}
                  <div className="w-full md:w-1/3">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Upazila/Thana/Subdistrict"
                      name="upazila"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* Village */}
                  <div className="w-full md:w-full">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Village/Street Address"
                      name="village"
                    />
                  </div>
                  {/* BC */}
                  <div className="w-full md:w-full">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Birth Certificate No"
                      name="birthCertificate"
                    />
                  </div>

                  {/* nationality */}
                  <div className="w-full md:w-full">
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Nationality"
                      name="nationality"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* religion */}
                  <div className="w-full md:w-1/2">
                    <select
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      name="religion"
                    >
                      <option>Religion</option>
                      <option value="islam">Islam</option>
                      <option value="hindu">Hindu</option>
                      <option value="buddish">Buddish</option>
                      <option value="chistian">Chistian</option>
                    </select>
                  </div>
                  {/* blood Group */}
                  <div className="w-full md:w-1/2">
                    <select
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      name="bloodGroup"
                    >
                      <option>Blood Group</option>
                      <option value="a+">A+</option>
                      <option value="a-">A-</option>
                      <option value="b+">B+</option>
                      <option value="b-">B-</option>
                      <option value="ab-">AB-</option>
                      <option value="o+">O+</option>
                      <option value="o-">O-</option>
                    </select>
                  </div>
                  {/*  Transport */}
                  <div className="w-full md:w-1/2">
                    <select
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      name="transport"
                    >
                      <option>Transport Type</option>
                      <option value="ac_bus">Bus(AC)</option>
                      <option value="non_ac_bus">Bus(Non-AC)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="md:flex gap-10">
                {/* Photo Select */}
                <div className="w-full md:w-1/2">
                  <input
                    onChange={handleChange}
                    type="file"
                    className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-1 border-gray-200 placeholder-gray-600 w-full mb-3"
                    placeholder="Photo"
                    name="studentAvatar"
                  />
                </div>
                {/* Student Avatar */}
                <div className="py-3 mx-auto w-full md:w-1/3">
                  <div className="bg-white px-2 py-2 rounded-lg shadow-lg text-center md:w-1/2">
                    <div className="">
                      <img
                        className="w-full md:w-1/4 mx-auto rounded-full object-cover object-center"
                        src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
                        alt="student needed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentSection;
