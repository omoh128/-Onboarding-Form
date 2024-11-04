import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    platformDescription: '',
    platformLink: '',
    logo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
    } else {
      alert('File size must be less than 5MB');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center py-8 px-4">
      <div className="text-white text-sm mb-8">PKT Hub</div>
      
      <div className="w-full max-w-md bg-transparent">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-white text-3xl font-semibold">
            PKT Hub Onboarding
          </h1>
          <p className="text-white text-lg">
            Welcome to the PKT ecosystem! To list your platform on PKT Hub, please fill out the form below.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            className="w-full p-3 rounded-lg bg-blue-500/30 border border-white/20 text-white placeholder-white/70 outline-none"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          
          <input
            type="text"
            name="platformDescription"
            placeholder="Platform description"
            className="w-full p-3 rounded-lg bg-blue-500/30 border border-white/20 text-white placeholder-white/70 outline-none"
            value={formData.platformDescription}
            onChange={handleInputChange}
          />
          
          <input
            type="text"
            name="platformLink"
            placeholder="Platform link"
            className="w-full p-3 rounded-lg bg-blue-500/30 border border-white/20 text-white placeholder-white/70 outline-none"
            value={formData.platformLink}
            onChange={handleInputChange}
          />
          
          <div className="relative border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
            <input
              type="file"
              accept=".svg,.png,.pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center text-white">
              <Upload className="w-6 h-6 mb-2" />
              <div className="font-medium">Company logo</div>
              <div className="text-sm text-white/70">
                maximum file 5 mb (svg, png, pdf)
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full p-3 rounded-lg bg-white text-blue-600 hover:bg-white/90 font-medium"
          >
            SUBMIT
          </button>
        </form>
      </div>
      
      <footer className="mt-auto pt-8 w-full max-w-7xl px-4 flex justify-between text-white/70 text-sm">
        <div>Copyright © 2024 PKT</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingForm;