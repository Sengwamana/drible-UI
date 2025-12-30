import React from 'react';
import Navbar from './components/Navbar';
import ProfileColumn from './components/ProfileColumn';
import CenterColumn from './components/CenterColumn';
import RightColumn from './components/RightColumn';
import { Users, Briefcase, AppWindow, ArrowUpRight, ArrowUp } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EAEAEA] flex items-center justify-center p-2 sm:p-4 md:p-8 font-sans">
      {/* Main Dashboard Container */}
      <div className="w-full max-w-[1500px] bg-[#F8F6F2] rounded-[3.5rem] shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden ring-8 ring-white/50">
        
        {/* Decorative background blurs - Enhanced for realism */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-white/80 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          <Navbar />

          <div className="mb-10 animate-in fade-in duration-700 slide-in-from-bottom-4">
            <h1 className="text-4xl md:text-5xl font-light text-neutral-800 mb-10 tracking-tight">
              Welcome in, <span className="font-semibold text-neutral-900">Nixtio</span>
            </h1>

            {/* Top Stats Row */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10">
              
              {/* Left Stats Pills - Improved visual separation */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="group flex flex-col gap-1.5 cursor-pointer">
                   <span className="text-xs font-semibold text-neutral-400 ml-2 uppercase tracking-wide group-hover:text-neutral-600 transition-colors">Interviews</span>
                   <div className="bg-neutral-900 text-white px-8 py-3.5 rounded-full text-base font-medium min-w-[120px] text-center shadow-xl shadow-neutral-900/10 group-hover:scale-105 transition-transform flex items-center justify-center gap-1">
                     15% <ArrowUp className="w-3 h-3 text-neutral-500" />
                   </div>
                </div>

                <div className="group flex flex-col gap-1.5 cursor-pointer">
                   <span className="text-xs font-semibold text-neutral-400 ml-2 uppercase tracking-wide group-hover:text-neutral-600 transition-colors">Hired</span>
                   <div className="bg-amber-400 text-neutral-900 px-8 py-3.5 rounded-full text-base font-medium min-w-[120px] text-center shadow-xl shadow-amber-400/20 group-hover:scale-105 transition-transform flex items-center justify-center gap-2">
                     15% <ArrowUpRight className="w-3 h-3" />
                   </div>
                </div>

                <div className="flex flex-col gap-1.5">
                   <span className="text-xs font-semibold text-neutral-400 ml-2 uppercase tracking-wide">Project time</span>
                   <div className="relative h-[52px] min-w-[220px] flex items-center group">
                      <div className="absolute inset-0 bg-white border border-neutral-100 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all">
                        <div className="w-[60%] h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0tMSwxIGwyLC0yIE0wLDQgbDQsLTQgTTMsNSBsMiwtMiIgc3Ryb2tlPSIjQjBCMEIwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      </div>
                      <span className="absolute left-6 text-sm font-semibold text-neutral-700">60%</span>
                   </div>
                </div>

                <div className="flex flex-col gap-1.5">
                   <span className="text-xs font-semibold text-neutral-400 ml-2 uppercase tracking-wide">Output</span>
                   <div className="border-2 border-neutral-200 px-8 py-3 rounded-full text-base font-medium min-w-[120px] text-center text-neutral-500 bg-transparent hover:border-neutral-300 transition-colors">10%</div>
                </div>
              </div>

              {/* Right Big Numbers - Refined typography */}
              <div className="flex gap-12 xl:mr-4">
                <div className="flex flex-col items-center group cursor-pointer">
                   <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                        <Users className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                      </div>
                      <span className="text-5xl font-light text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">78</span>
                   </div>
                   <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Employees</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                   <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                         <Briefcase className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                      </div>
                      <span className="text-5xl font-light text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">56</span>
                   </div>
                   <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Hiring</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                   <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                        <AppWindow className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                      </div>
                      <span className="text-5xl font-light text-neutral-900 tracking-tight group-hover:text-neutral-600 transition-colors">203</span>
                   </div>
                   <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid - Adjusted gaps for spacious feel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            {/* Left Column - Profile (3 cols wide) */}
            <div className="lg:col-span-3 h-full">
              <ProfileColumn />
            </div>

            {/* Center Column - Activity (5 cols wide) */}
            <div className="lg:col-span-5 xl:col-span-6 h-full">
              <CenterColumn />
            </div>

            {/* Right Column - Onboarding (4 cols wide) */}
            <div className="lg:col-span-4 xl:col-span-3 h-full">
              <RightColumn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;