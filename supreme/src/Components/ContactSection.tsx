import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="flex min-h-screen justify-center items-center text-white bg-[#0067B1] px-4 md:px-8 lg:px-16" id="contact">
      <div className='w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-12'>
        {/* Contact Info */}
        <div className='w-full max-w-md flex flex-col justify-between text-center md:text-left'>
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-lg">For general enquiries</p>
          <p className="mt-4">
            <strong>Address:</strong> <br/> 110, 16th Road, Chembur, Mumbai - 400071
          </p>
          <p className="mt-2">
            <strong>Phone:</strong><br/> +91 22 25208822
          </p>
          <p className="mt-2">
            <strong>Email:</strong><br/> info@supremegroup.co.in
          </p>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg grid gap-4">
          <div className="relative">
            <input className="text-white placeholder-white placeholder-opacity-90 border-b-2 border-white focus:border-opacity-100 transition-all duration-200 py-2 w-full text-lg bg-transparent outline-none" 
              id="name" 
              placeholder="Full name" 
              name="name" 
            />
          </div>
          <div className="relative">
            <input className="text-white placeholder-white placeholder-opacity-90 border-b-2 border-white focus:border-opacity-100 transition-all duration-200 py-2 w-full text-lg bg-transparent outline-none" 
              id="email" 
              type="email"  
              placeholder="Email" 
              name="email" />
          </div>
          <div className="relative">
            <input className="text-white placeholder-white placeholder-opacity-90 border-b-2 border-white focus:border-opacity-100 transition-all duration-200 py-2 w-full text-lg bg-transparent outline-none"
              type="text"
              id="company" 
              placeholder="Company"
              name="company" />
          </div>
          <div>
            <textarea className="text-white placeholder-white placeholder-opacity-90 border-b-2 border-white focus:border-opacity-100 transition-all duration-200 py-2 w-full text-lg bg-transparent outline-none"
              id="message"
              placeholder="Message" 
              name="message">
            </textarea>
          </div>
          <div className="flex justify-center md:justify-start">
            <button 
              className="w-36 h-12 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-700 hover:text-black focus:text-black hover:bg-white focus:bg-white text-white border border-white rounded-full text-lg font-semibold"
              type="submit" >
                Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
