import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { studentInfoForm } from "../../../Actions/admissionAction";
const address = require("@bangladeshi/bangladesh-address");

const StudentSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
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
    nationality: "Bangladeshi",
    bloodGroup: "",
    transport: "",
    studentAvatar: "",
  });
  const allDivision = address.allDivision();
  const allDistrict = address.districtsOf(data?.division);
  const allUpazila = address.upazilasOf(data?.district);

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
        <div className="md:px-8 pt-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <div className="w-full flex items-center justify-center">
            <div className="bg-gray-100 py-2 px-10 w-full rounded-lg ">
              <div className="sm:text-2xl text-2xl font-semibold mb-4 pt-5 uppercase text-purple-600">
                Student Info
                <hr className="bg-gray-800 mt-1" />
              </div>

              {/* All input div */}
              <div>
                <div className="md:flex gap-10">
                  {/* Student's Name */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Full Name"
                      name="fullName"
                      required
                    />
                  </div>
                  {/* Add class */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Class
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Class"
                      name="addClass"
                    />
                  </div>
                  {/* Gender */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Gender
                    </label>
                    <select
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="gender"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* DOB */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Birth
                    </label>
                    <input
                      onChange={handleChange}
                      type="date"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="birth"
                    />
                  </div>
                  {/* Phone */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Phone
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="01*********"
                      maxLength="11"
                      minLength="11"
                      name="phone"
                    />
                  </div>
                  {/* email */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* Division */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Division
                    </label>
                    <select
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Division"
                      name="division"
                    >
                      <option value="">Select One</option>
                      {allDivision &&
                        allDivision.map((division) => (
                          <option key={division} value={division}>
                            {division}
                          </option>
                        ))}
                    </select>
                  </div>
                  {/* district */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      District
                    </label>
                    <select
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="district"
                      disabled={data.division === "" ? true : false}
                    >
                      <option value="">Select One</option>
                      {allDistrict &&
                        allDistrict.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                    </select>
                  </div>
                  {/* Upazilla */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Upazila
                    </label>
                    <select
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="upazila"
                      disabled={data.district === "" ? true : false}
                    >
                      <option value="">Select One</option>
                      {allUpazila &&
                        allUpazila.map((upazila) => (
                          <option key={upazila.upazila} value={upazila.upazila}>
                            {upazila.upazila}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* Village */}
                  <div className="w-full md:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Village
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Village/Street Address"
                      name="village"
                    />
                  </div>
                  {/* BC */}
                  <div className="w-full md:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Birth Certificate
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      placeholder="Birth Certificate No"
                      name="birthCertificate"
                    />
                  </div>

                  {/* nationality */}
                  <div className="w-full md:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nationality
                    </label>
                    <select
                      onChange={handleChange}
                      type="text"
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="nationality"
                    >
                      <option value="Bangladeshi">Bangladeshi</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* religion */}
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Religion
                    </label>
                    <select
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="religion"
                    >
                      <option value="">Religion</option>
                      <option value="islam">Islam</option>
                      <option value="hindu">Hindu</option>
                      <option value="buddish">Buddish</option>
                      <option value="chistian">Chistian</option>
                    </select>
                  </div>
                  {/* blood Group */}
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Blood Group
                    </label>
                    <select
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="bloodGroup"
                    >
                      <option value="">Select One</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  {/*  Transport */}
                  <div className="w-full md:w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Transport
                    </label>
                    <select
                      className="outline-0 border-2 rounded-md px-3 py-2 border-gray-200 w-full mb-3"
                      name="transport"
                    >
                      <option value="">Select One</option>
                      <option value="ac_bus">Bus(AC)</option>
                      <option value="non_ac_bus">Bus(Non-AC)</option>
                      <option value="no-bus">No Bus</option>
                    </select>
                  </div>
                </div>
                <div className=" border p-8">
                  {/* Student Avatar */}
                  <div className="flex justify-center">
                    <div>
                      <img
                        className="w-32 h-32 rounded-full"
                        src="https://i1.pngguru.com/preview/137/834/449/cartoon-cartoon-character-avatar-drawing-film-ecommerce-facial-expression-png-clipart.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Photo Select */}
                  <div className="flex justify-center mt-4">
                    <div className="md:w-1/4">
                      <input
                        onChange={handleChange}
                        type="file"
                        className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-1 border-gray-200 placeholder-gray-600 w-full mb-3"
                        placeholder="Photo"
                        name="studentAvatar"
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
