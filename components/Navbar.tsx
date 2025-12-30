import React, { useState } from 'react';
import {
  Settings,
  Bell,
  Search,
  Menu
} from './Icons';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  const navItems = [
    { name: 'Dashboard' },
    { name: 'People' },
    { name: 'Hiring' },
    { name: 'Devices' },
    { name: 'Apps' },
    { name: 'Salary' },
    { name: 'Calendar' },
    { name: 'Reviews' },
  ];

  return (
    <nav className="flex items-center justify-between px-3 py-3 md:px-6 md:py-4 bg-white/70 backdrop-blur-xl rounded-full shadow-soft mb-10 border border-white/40 transition-all hover:shadow-card">
      {/* Brand */}
      <div className="flex items-center gap-4">
        <div className="px-6 py-2.5 bg-white border border-neutral-100 rounded-full shadow-sm">
          <span className="text-lg font-semibold tracking-tight text-neutral-800">Crextio</span>
        </div>
        
        {/* Mobile Menu Trigger */}
        <button className="lg:hidden p-2 text-neutral-600">
           <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden lg:flex items-center gap-1 p-1.5 bg-neutral-100/50 rounded-full border border-neutral-200/50">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-out ${
              activeTab === item.name
                ? 'bg-neutral-900 text-white shadow-lg shadow-neutral-900/10 scale-105'
                : 'text-neutral-500 hover:text-neutral-800 hover:bg-white/60'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-white border border-neutral-200 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-neutral-200 focus-within:border-neutral-300 transition-all">
          <Search className="w-4 h-4 text-neutral-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm w-24 lg:w-32 text-neutral-600 placeholder:text-neutral-400"
          />
        </div>

        <button className="hidden md:flex items-center justify-center p-3 text-neutral-600 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:shadow-md transition-all group relative">
          <Bell className="w-4 h-4 group-hover:text-neutral-900" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <button className="hidden md:flex items-center justify-center p-3 text-neutral-600 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:shadow-md transition-all group">
          <Settings className="w-4 h-4 group-hover:text-neutral-900 group-hover:rotate-45 transition-transform duration-500" />
        </button>

        {/* User Profile */}
        <div className="relative cursor-pointer group">
           <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:shadow-md transition-all">
             <img src="https://picsum.photos/id/64/100/100" alt="User" className="w-full h-full object-cover" />
           </div>
           <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;