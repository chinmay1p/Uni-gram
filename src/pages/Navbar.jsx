import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, LogIn, UserPlus, Image, MessageSquare, Bell, Settings, Telescope, Clapperboard, SquarePlus } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/home/explore", icon: Telescope, label: "Explore" },
    { to: "/home/wikileak", icon: Clapperboard, label: "Wikileaks" },
    { to: "/home/post", icon: SquarePlus, label: "New Post" },
    { to: "/home/messages", icon: MessageSquare, label: "Messages" },
    { to: "/home/notification", icon: Bell, label: "Notifications" },
    { to: "/home/profile", icon: User, label: "Profile" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <Image className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Uni-Gram!
          </h2>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative
                  ${isActive(item.to) 
                    ? 'text-white bg-gradient-to-r from-blue-600/90 to-blue-500/90 shadow-md' 
                    : 'hover:bg-gray-700/50'}`}
                onMouseEnter={() => setHoveredItem(item.to)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <item.icon 
                  className={`w-5 h-5 transition-all duration-200 
                    ${isActive(item.to) ? 'text-white' : 'text-gray-400'}
                    ${hoveredItem === item.to ? 'transform scale-110' : ''}`}
                />
                <span className="font-medium">{item.label}</span>
                {isActive(item.to) && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-700/50">
        <Link
          to="/home/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/50"
        >
          <Settings className="w-5 h-5 text-gray-400" />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;