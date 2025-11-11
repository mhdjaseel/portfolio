import React, { useState } from "react";
import Swal from "sweetalert2"
import { motion } from "framer-motion"

function Contact() {
      const [result, setResult] = useState("");
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ac250aca-1efc-464e-8b2d-c4e7f78461e0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success" : "Error");
   if (result ==="Success") {
    Swal.fire({
  title: "Success",
  text: "Message Send Successfully!",
  icon: "success"
  });
   event.target.reset();
}
else{
    Swal.fire({
  icon: "error",
  title: "Error",
  text: "Something went wrong!",

}
);
   }
  };
  return (
    <motion.div  initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:2}} id="contact" className="py-10 px-4 sm:px-8 lg:px-20 bg-gray-50">
  <h1 className="text-center font-Montserrat text-3xl sm:text-4xl font-bold text-blue-950 mb-6">
    Contact Me
  </h1>

  <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-white pl-3 focus-within:ring-2 focus-within:ring-blue-900">
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your name"
            required
            className="block w-full bg-white py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1 flex items-center rounded-md border border-gray-300 bg-white pl-3 focus-within:ring-2 focus-within:ring-blue-900">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="block w-full bg-white py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          placeholder="Write your message..."
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-900 focus:outline-none sm:text-sm"
        ></textarea>
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          type="submit"
          className="mt-4 w-full sm:w-auto bg-blue-900 text-white font-Mulish font-semibold px-6 py-2 rounded-md border border-blue-900 hover:bg-white hover:text-blue-900 transition-all duration-200"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</motion.div>

  );
}

export default Contact;
