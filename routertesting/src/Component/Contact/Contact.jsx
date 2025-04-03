import React from "react";

const Contact = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded-lg"
          rows="4"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
