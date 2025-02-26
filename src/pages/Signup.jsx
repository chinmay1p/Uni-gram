import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { UserIcon, KeyIcon, MailIcon, PhoneIcon, UserCircleIcon, ArrowRightIcon } from 'lucide-react';

function Signup() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="flex items-center justify-center p-6">
          <div className="max-w-xl transform rounded-md bg-white p-12 border-1 border-gray-300 transition-all duration-150 hover:shadow-lg">
            {/* Logo/Brand Section */}
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">Uni-Gram!</h2>
              <p className="text-gray-600 text-lg">Sign up to share and learn with your friends and teachers</p>
            </div>
    
            {/* Form Section */}
            <div className="space-y-4">
              {/* Full Name Input */}
              <div className="relative">
                <UserCircleIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Full Name"
                />
              </div>
    
              {/* Username Input */}
              <div className="relative">
                <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Username"
                />
              </div>
    
              {/* Email Input */}
              <div className="relative">
                <MailIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Email Address"
                />
              </div>
    
              {/* Phone Number Input */}
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Phone Number"
                />
              </div>
    
              {/* Password Input */}
              <div className="relative">
                <KeyIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Password"
                />
              </div>
    
              {/* Confirm Password Input */}
              <div className="relative">
                <KeyIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Confirm Password"
                />
              </div>
    
              {/* Signup Button */}
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full mb-3 rounded-lg bg-blue-600 p-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
                <ArrowRightIcon 
                  className={`absolute right-3 top-3 h-5 w-5 transform transition-all duration-200 
                    ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'}`}
                />
              </button>
            </div>
    
            <div className="mt-5 h-0.5 bg-gray-200"></div>
            {/* Additional Links */}
            <div className="mt-6">
              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700">
                  <Link to="/login">Log in</Link>
                </a>
              </p>
            </div>
          </div>
        </div>
      );
}

export default Signup;