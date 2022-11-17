import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { preSchoolInfoForm } from '../../../Actions/admissionAction';

const StudentPreEdu = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    //previous School Info
    previousSchlName: '',
    preRoll: '',
    previousClass: '',
    preSchoolAddress: '',

  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    dispatch(preSchoolInfoForm(data));
  }, [data, dispatch]);

  return (
    <div>
      {/* student previous education section */}
      <section>
        <div className="md:px-8 pb-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          {/* onChange={handleChange} */}
          <div className="w-full flex items-center justify-center">
            <div className="bg-gray-100 py-2 px-10 w-full rounded-lg ">
              <div className="sm:text-2xl text-2xl font-semibold mb-10 pt-5">
                Student Previous Education (optional)
                <hr className="bg-gray-800 mt-1" />
              </div>
              {/* All input div */}
              <div className="">
                <div className="md:flex gap-2 items-center">
                  {/* Previous School Name */}
                  <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Previous School Name
                    </label>
                    <input onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Student's Previous School Name"
                      name="previousSchlName"
                    />
                  </div>
                  {/* Previous Class */}
                  <div className="w-full md:w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Previous Class
                    </label>
                    <input onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Student's Previous Class"
                      name="previousClass"
                    />
                  </div>
                </div>

                <div className="md:flex gap-2">
                  {/* Previous Class Roll */}
                  <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Previous School Roll
                    </label>
                    <input onChange={handleChange}
                      type="number"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Student's Previous Class Roll"
                      name="previousRoll"
                    />
                  </div>
                  {/* Previous School District Name */}
                  <div className="w-full">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                  Previous School District
                    </label>
                    <input onChange={handleChange}
                      type="text"
                      className="outline-0 focus:font-extralight border-2 rounded-md px-3 py-2 border-gray-200 placeholder-gray-600 w-full mb-3"
                      placeholder="Previous School District Name"
                      name="previousSchDist"
                    />
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

export default StudentPreEdu;
