import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { guardianInfoForm } from "../../../Actions/admissionAction";

const ParentsSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    // grudian section
    fatherName: "",
    motherName: "",
    fatherNID: "",
    fatherPhone: "",
    fatherOccupation: "",
    motherOccupation: "",
    guardianName: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianAddress: "",
    guardianAvatar: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(guardianInfoForm(data));
  }, [data, dispatch]);

  return (
    <div>
      {/* Parents Section*/}
      <section>
        <div className="md:px-8 py-2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          {/* onChange={handleChange} */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-gray-100 py-2 px-10 w-full rounded-lg ">
              <div className="sm:text-2xl text-2xl font-semibold mb-4 pt-5">
                {" "}
                Parent's Section
                <hr className="bg-gray-800 mt-1" />
              </div>

              {/* All input div */}
              <div className="">
                <div className="md:flex gap-10">
                  {/* Father's Name*/}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Father's Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Enter Father's Full Name"
                      name="fatherName"
                    />
                  </div>
                  {/* Fathers NID Number */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Father's NID
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Fathers NID Number"
                      name="fatherNID"
                    />
                  </div>
                  {/* Fathers Mobile Number */}
                  <div className="w-full md:w-1/3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                  Father's Phone
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Father's Mobile Number"
                      name="fatherPhone"
                    />
                  </div>
                </div>
                <div className="md:flex gap-10">
                  {/* Father's Occupation */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Father's Occupation
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Father's Occupation"
                      name="fatherOccupation"
                    />
                  </div>
                  {/* Mother's Name*/}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mothers's Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Enter Full Name"
                      name="motherName"
                    />
                  </div>
                  {/* Mother's Occupation */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mother's Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Mother's Occupation"
                      name="motherOccupation"
                    />
                  </div>
                </div>
                {/* guardian info */}
                <div className="md:flex gap-10">
                  {/*  Guardian Name */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Guardian's Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Guardian Name"
                      name="guardianName"
                    />
                  </div>
                  {/*  Guardian Relation  */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Guardian's Relation
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Guardian Relation"
                      name="guardianRelation"
                    />
                  </div>
                  {/* Guardian Phone */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Guardian's Phone Number
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Guardian Mobile Number"
                      name="GuardianPhone"
                    />
                  </div>
                </div>

                <div className="md:flex gap-10">
                  {/* Guardian Occupation */}
                  <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Guardian's Occupation
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Guardian Occupation"
                      name="guardianOccupation"
                    />
                  </div>
                  {/* Guardian Avatar */}
                  <div className=" border-0 p-2">
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
                    <div className="md:w-full">
                      <input
                        onChange={handleChange}
                        type="file"
                        className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-1 border-gray-200 placeholder-gray-600 w-full mb-3"
                        placeholder="Photo"
                        name="guardianAvatar"
                      />
                    </div>
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

export default ParentsSection;
