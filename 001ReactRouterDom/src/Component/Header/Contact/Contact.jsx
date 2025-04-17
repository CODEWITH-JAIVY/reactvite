import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-pink-100 via-indigo-100 to-purple-100 px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-12">
          Have a question, project idea, or just want to say hi? Fill out the form below and I’ll get back to you soon.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col text-left">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="mb-1 font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-semibold">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center gap-6 text-2xl text-indigo-600">
          <a href="https://github.com/CODEWITH-JAIVY" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/codewithjaivy?igsh=MWJtY3hleGo5NWxkNg==" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/codewithjaivy?igsh=MWJtY3hleGo5NWxkNg== " target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/7261075889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
