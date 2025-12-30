import React from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { ArrowUpRight, Play, Pause, Timer, Clock } from './Icons';

const data = [
  { name: 'S', uv: 20 },
  { name: 'M', uv: 35 },
  { name: 'T', uv: 25 },
  { name: 'W', uv: 45 },
  { name: 'T', uv: 30 },
  { name: 'F', uv: 15 },
  { name: 'S', uv: 10 },
];

const days = [
  { name: 'Mon', num: 22 },
  { name: 'Tue', num: 23 },
  { name: 'Wed', num: 24 },
  { name: 'Thu', num: 25 },
  { name: 'Fri', num: 26 },
  { name: 'Sat', num: 27 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-800 text-white text-[10px] py-1 px-2 rounded-lg shadow-xl">
        {`${payload[0].value} hrs`}
      </div>
    );
  }
  return null;
};

const CenterColumn: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Top Row: Progress & Time Tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[260px]">
        {/* Progress Chart */}
        <div className="bg-cream-100 rounded-[2.5rem] p-7 flex flex-col justify-between relative shadow-sm group hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-start z-10">
            <div>
              <h3 className="text-lg text-neutral-600 font-medium">Progress</h3>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-light text-neutral-900 tracking-tight">6.1 h</span>
                <span className="text-xs text-neutral-400 leading-tight font-medium">
                  Work Time <br /> this week
                </span>
              </div>
            </div>
            <button className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all">
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          <div className="absolute top-[40%] right-6 bg-amber-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-glow animate-pulse">
            +12%
          </div>

          <div className="h-32 w-full mt-4 -ml-2">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={12}>
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#A3A3A3', fontSize: 11, fontWeight: 500 }}
                  dy={10}
                />
                <Bar dataKey="uv" radius={[20, 20, 20, 20]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 3 ? '#FBBF24' : '#E5E5E5'} 
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time Tracker */}
        <div className="bg-cream-100 rounded-[2.5rem] p-7 flex flex-col justify-between relative shadow-sm group hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-start">
            <h3 className="text-lg text-neutral-600 font-medium">Time tracker</h3>
            <button className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all">
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center my-2">
            <div className="relative w-36 h-36">
               {/* SVG Circle Progress */}
               <svg className="w-full h-full transform -rotate-90">
                 {/* Track */}
                 <circle
                   cx="72"
                   cy="72"
                   r="60"
                   stroke="#EBEBEB"
                   strokeWidth="5"
                   fill="transparent"
                   className="transition-all"
                 />
                 {/* Progress */}
                 <circle
                   cx="72"
                   cy="72"
                   r="60"
                   stroke="#FBBF24"
                   strokeWidth="8"
                   fill="transparent"
                   strokeDasharray="377" 
                   strokeDashoffset="120" 
                   strokeLinecap="round"
                   className="transition-all duration-1000 ease-in-out"
                 />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-3xl font-light text-neutral-900 tracking-tighter">02:35</span>
                 <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">Active</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-3 bg-white p-1 rounded-full shadow-sm border border-neutral-100">
               <button className="w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full shadow-lg text-white hover:scale-105 transition-all active:scale-95">
                 <Play className="w-4 h-4 fill-current ml-0.5" />
               </button>
               <button className="w-10 h-10 flex items-center justify-center bg-transparent rounded-full hover:bg-neutral-50 text-neutral-400 hover:text-neutral-600 transition-all">
                 <Pause className="w-4 h-4 fill-current" />
               </button>
            </div>
            <button className="px-4 py-2 flex items-center gap-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors text-xs font-medium text-neutral-600">
               <Timer className="w-3 h-3" />
               <span>History</span>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Section - Improved */}
      <div className="bg-cream-100 rounded-[2.5rem] p-8 flex-1 shadow-sm relative overflow-hidden flex flex-col border border-transparent hover:border-white transition-colors">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
             <button className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-neutral-500 shadow-sm hover:shadow transition-all">August</button>
          </div>
          <h3 className="text-base font-semibold text-neutral-800 tracking-tight">September 2024</h3>
          <div className="flex gap-2">
             <button className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold text-neutral-500 shadow-sm hover:shadow transition-all">October</button>
          </div>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-6 gap-2 mb-6 border-b border-neutral-200 pb-4">
          {days.map((day, idx) => {
             const active = idx === 3;
             return (
             <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
               <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}>{day.name}</span>
               <div className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${active ? 'bg-neutral-900 text-white shadow-lg shadow-neutral-900/20 scale-110' : 'text-neutral-600 group-hover:bg-white'}`}>
                 {day.num}
               </div>
             </div>
          )})}
        </div>

        {/* Timeline */}
        <div className="relative flex-1">
           {/* Grid Lines */}
           <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3].map((_, i) => (
                <div key={i} className="border-t border-dashed border-neutral-200 w-full h-px ml-10"></div>
              ))}
           </div>

           {/* Time Markers */}
           <div className="absolute top-0 bottom-0 left-0 w-10 flex flex-col justify-between py-0 text-[10px] font-medium text-neutral-400">
             <span>08:00</span>
             <span>09:00</span>
             <span>10:00</span>
             <span>11:00</span>
           </div>

           {/* Events Container */}
           <div className="absolute inset-0 ml-12 py-1">
               {/* Event 1 */}
               <div className="absolute top-2 w-[85%] bg-neutral-900 text-white p-3.5 rounded-[1.25rem] shadow-xl shadow-neutral-900/10 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
                 <div className="flex items-center gap-3">
                   <div className="w-1 h-8 bg-amber-400 rounded-full"></div>
                   <div>
                     <h4 className="text-xs font-semibold tracking-wide">Weekly Team Sync</h4>
                     <div className="flex items-center gap-2 mt-0.5">
                       <Clock className="w-3 h-3 text-neutral-400" />
                       <p className="text-[10px] text-neutral-400">08:00 - 09:30</p>
                     </div>
                   </div>
                 </div>
                 <div className="flex -space-x-2 pl-4">
                   {[33, 55, 66].map(i => (
                     <img key={i} src={`https://picsum.photos/id/${i}/30/30`} className="w-7 h-7 rounded-full border-2 border-neutral-800" alt="Attendee" />
                   ))}
                   <div className="w-7 h-7 rounded-full border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center text-[10px] font-medium">+2</div>
                 </div>
               </div>

               {/* Event 2 */}
               <div className="absolute top-28 w-[70%] left-[15%] bg-white border border-neutral-100 p-3.5 rounded-[1.25rem] shadow-soft flex items-center justify-between group cursor-pointer hover:scale-[1.02] hover:border-amber-200 transition-all">
                 <div className="flex items-center gap-3">
                   <div className="w-1 h-8 bg-neutral-200 group-hover:bg-amber-400 transition-colors rounded-full"></div>
                   <div>
                     <h4 className="text-xs font-semibold text-neutral-800">Onboarding Session</h4>
                      <div className="flex items-center gap-2 mt-0.5">
                       <Clock className="w-3 h-3 text-neutral-400" />
                       <p className="text-[10px] text-neutral-400">10:15 - 11:00</p>
                     </div>
                   </div>
                 </div>
                 <div className="flex -space-x-2">
                   {[44, 12].map(i => (
                     <img key={i} src={`https://picsum.photos/id/${i}/30/30`} className="w-7 h-7 rounded-full border-2 border-white" alt="Attendee" />
                   ))}
                 </div>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CenterColumn;