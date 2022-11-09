import React from 'react';
import phone from '../../components/Image/Icon/phone.svg';
import email from '../../components/Image/Icon/email.svg';
import location from '../../components/Image/Icon/location.svg';
import contact_gif from "../../components/Image/Banner/contact.svg";
const Contact = () => {
  const info = [
    {label: 'Call to ask any question', path: '+881236457896', url: 'tel:+881236457896', icon: phone},
    {label: 'Email to ask any question', path: 'contact@yourmail.com', url: 'mailto:contact@yourmail.com', icon: email},
    {label: 'Our office', path: '123 Street, New York, US', icon: location},
  ];

  console.log(process.env.REACT_APP_OFFICE_LOCATION)

  return (
    <div className="container" >
        {/* banner */}
        <div className="py-2 relative">
          <img src="https://www.jazalec.com/wp-content/uploads/2019/10/Contact-Us-Banner-image.jpg" alt="" className='object-cover absolute mix-blend-overlay h-full w-full'/>
          <h1 className="font-bold text-4xl text-center pt-7">Contact Us</h1>
        </div>
      <div className="container ">
        {/* contact para */}
        <div className="text-center py-6 px-10 font-semibold text-xl text-i">
          <p>If You Have Any Query, Feel Free To Contact Us</p>
        </div>
        {/* Contact-icon */}
        <div>
          <div className="flex flex-wrap items-center justify-evenly p-7 gap-3 ">
            {info && info.map((item, i)=>(
                <div key={i} className="flex justify-center items-center border-0 shadow-lg rounded-3xl py-3 px-5 hover:bg-slate-100">
                <div className="w-16">
                  <img src={item?.icon} className="p-2" alt="" />
                </div>
                <p>
                    {item?.label} <br />
                    {
                      item.url ? <a href={item.url}>{item.path}</a> : <span>{item.path}</span>
                    }
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="md:flex items-center justify-center gap-4 m-0">
        {/* Contact Pic */}
        <div className="md:w-1/2">
          <img src={contact_gif} alt="" srcSet="" className='md:p-20'/>
        </div>
        <div className="w-full md:w-1/2 px-5">
          {/* contact form */}
          <form className="bg-white border shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* name field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-40 focus:outline-none focus:font-light"
                id="name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            {/* Number field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
                Phone
              </label>
              <input
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-40 focus:outline-none focus:font-light"
                id="password"
                type="phone"
                placeholder="Phone Number"
              />
            </div>
            {/* Message field */}
            <div className="mb-4">
              <label for="message" className="block text-gray-700 text-sm font-bold mb-2">
                Write your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-40 focus:outline-none focus:font-light"
                placeholder="Your message..."
              ></textarea>
            </div>
            {/* send button */}
            <div className="flex items-center justify-between">
              <button
                className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* google map */}
      <div>
        <div className=''>
          <p className='font-bold text-3xl text-center p-3'>Find us in google map</p>
        </div>
      <div className="w-full p-3">
        <iframe
          src={process.env.REACT_APP_OFFICE_LOCATION}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width= "100%"
          height= "100%"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;
