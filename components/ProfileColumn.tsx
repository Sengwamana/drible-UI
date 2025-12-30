import React, { useState } from 'react';
import { Laptop, ChevronDown, ChevronUp, MoreVertical, Star } from './Icons';

const ProfileColumn: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string>('Devices');

  const sections = [
    { id: 'Pension', label: 'Pension contributions', value: '5%' },
    { id: 'Devices', label: 'Devices', count: 2 },
    { id: 'Compensation', label: 'Compensation Summary', value: '$120k' },
    { id: 'Benefits', label: 'Employee Benefits', count: 8 },
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] h-[400px] shadow-card group transition-transform duration-500 hover:shadow-2xl">
        <img
          src="https://picsum.photos/id/64/800/800"
          alt="Profile"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        {/* Improved Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent" />
        
        {/* Card Content */}
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <div className="text-white">
            <h2 className="text-3xl font-semibold tracking-tight">Lora Piterson</h2>
            <div className="flex items-center gap-2 mt-2">
               <div className="px-2 py-0.5 rounded border border-white/30 bg-white/10 backdrop-blur-md text-[10px] uppercase font-medium tracking-wider">Senior</div>
               <p className="text-white/80 text-sm font-light">UX/UI Designer</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <button className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors">
              <Star className="w-4 h-4" />
            </button>
            <div className="px-5 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white text-sm font-semibold shadow-lg">
              $1,200 <span className="text-[10px] font-normal opacity-80">/ wk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="flex flex-col gap-4">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.id;
          return (
            <div
              key={section.id}
              className={`bg-cream-100 rounded-[1.5rem] transition-all duration-300 border border-transparent ${
                isExpanded ? 'p-1.5 bg-white shadow-soft border-neutral-100' : 'hover:bg-white/60'
              }`}
            >
              <button
                onClick={() => setExpandedSection(isExpanded ? '' : section.id)}
                className={`w-full flex items-center justify-between px-5 py-4 text-left group focus:outline-none ${
                  isExpanded ? 'bg-transparent' : 'rounded-[1.5rem]'
                }`}
              >
                <span className={`text-sm font-medium transition-colors ${isExpanded ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'}`}>
                  {section.label}
                </span>
                <div className="flex items-center gap-3">
                   {!isExpanded && (section.value || section.count) && (
                     <span className="text-xs text-neutral-400 font-medium">
                       {section.value || `${section.count} items`}
                     </span>
                   )}
                   {isExpanded ? (
                     <ChevronUp className="w-4 h-4 text-neutral-400" />
                   ) : (
                     <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                   )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  {section.id === 'Devices' ? (
                     <div className="bg-neutral-50 p-4 rounded-[1.25rem] flex items-center justify-between shadow-sm border border-neutral-100 group/item hover:border-neutral-200 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm overflow-hidden p-2">
                            <img src="https://picsum.photos/id/0/200/200" className="object-contain w-full h-full mix-blend-multiply opacity-80" alt="Macbook" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-neutral-800">MacBook Air</div>
                            <div className="text-xs text-neutral-500 mt-0.5">M2 • 2023 • Space Grey</div>
                          </div>
                        </div>
                        <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-white rounded-full transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                  ) : (
                    <div className="p-4 text-sm text-neutral-500 bg-neutral-50 rounded-[1.25rem]">
                       <div className="h-2 w-2/3 bg-neutral-200 rounded mb-2"></div>
                       <div className="h-2 w-1/2 bg-neutral-200 rounded"></div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileColumn;