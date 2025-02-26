import { useState } from "react";
import { UserIcon, KeyIcon, ArrowRightIcon } from "lucide-react";
import { Link } from 'react-router-dom';

import './css1.css'

function Login() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-md transform rounded-md bg-white p-12 border-1 border-gray-300 transition-all duration-150 hover:shadow-lg">
        {/* Logo/Brand Section */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">Uni-Gram!</h2>
          <p className="mt-2 text-sm text-gray-600">Please enter your details to sign in</p>
        </div>

        {/* Form Section */}
        <div className="space-y-4">
          {/* Username Input */}
          <div className="relative">
            <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 pl-10 text-sm text-gray-800 placeholder-gray-400 transition-colors duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Username or Email"
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

          {/* Login Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full mb-3 rounded-lg bg-blue-600 p-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
            <ArrowRightIcon 
              className={`absolute right-3 top-3 h-5 w-5 transform transition-all duration-200 
                ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-0'}`}
            />
          </button>
        </div>

        <div className="mt-5 h-0.5 bg-gray-200 "></div>
        {/* Additional Links */}
        <div className="mt-6 space-y-2">
          <p className="text-center">
            <a href="#" className="text-sm text-gray-600 transition-colors duration-200 hover:text-blue-600">
              Forgot your password?
            </a>
          </p>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700">
              <Link to="/signup">Create one now</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;