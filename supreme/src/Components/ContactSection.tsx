import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = { name: '', email: '', company: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <section className="flex min-h-screen justify-center items-center text-white bg-[#0067B1] px-4 md:px-8 lg:px-16" id="contact">
      <div className='w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 py-12'>
        <div className='w-full max-w-md flex flex-col justify-between text-center md:text-left'>
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-lg">For general enquiries</p>
          <p className="mt-4"><strong>Address:</strong><br/>110, 16th Road, Chembur, Mumbai - 400071</p>
          <p className="mt-2"><strong>Phone:</strong><br/>+91 22 25208822</p>
          <p className="mt-2"><strong>Email:</strong><br/>info@supremegroup.co.in</p>
        </div>

        <form className="w-full max-w-lg grid gap-4" onSubmit={handleSubmit}>
          <div className="relative">
            <input 
              className="text-white placeholder-white border-b-2 border-white py-2 w-full text-lg bg-transparent outline-none" 
              id="name" 
              placeholder="Full name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
          </div>
          <div className="relative">
            <input 
              className="text-white placeholder-white border-b-2 border-white py-2 w-full text-lg bg-transparent outline-none" 
              id="email" 
              type="email"  
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleChange} 
            />
            {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
          </div>
          <div className="relative">
            <input 
              className="text-white placeholder-white border-b-2 border-white py-2 w-full text-lg bg-transparent outline-none"
              type="text"
              id="company" 
              placeholder="Company"
              name="company"
              value={formData.company}
              onChange={handleChange} 
            />
            {errors.company && <p className="text-red-500 text-[12px] mt-1">{errors.company}</p>}
          </div>
          <div>
            <textarea 
              className="text-white placeholder-white border-b-2 border-white py-2 w-full text-lg bg-transparent outline-none"
              id="message"
              placeholder="Message" 
              name="message"
              value={formData.message}
              onChange={handleChange} 
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <button 
              className="w-36 h-12 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-700 hover:text-black focus:text-black hover:bg-white focus:bg-white text-white border border-white rounded-full text-lg font-semibold"
              type="submit" 
              disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
