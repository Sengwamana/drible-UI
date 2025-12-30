import React from 'react';
import { Task } from '../types';
import { CheckCircle2, Circle, Laptop, Zap, MessageSquare, FileText, Link, ChevronRight, Check } from './Icons';

const tasks: Task[] = [
  { id: '1', title: 'Interview with Sarah', time: 'Sep 13, 08:30', completed: true, type: 'interview' },
  { id: '2', title: 'Design Team Meeting', time: 'Sep 13, 10:30', completed: true, type: 'meeting' },
  { id: '3', title: 'Q3 Project Update', time: 'Sep 13, 13:00', completed: false, type: 'update' },
  { id: '4', title: 'Review Q3 Goals', time: 'Sep 13, 14:45', completed: false, type: 'goals' },
  { id: '5', title: 'HR Policy Review', time: 'Sep 13, 16:30', completed: false, type: 'policy' },
];

const getIcon = (type: Task['type']) => {
  switch (type) {
    case 'interview': return <Laptop className="w-4 h-4" />;
    case 'meeting': return <Zap className="w-4 h-4" />;
    case 'update': return <MessageSquare className="w-4 h-4" />;
    case 'goals': return <FileText className="w-4 h-4" />;
    case 'policy': return <Link className="w-4 h-4" />;
    default: return <Circle className="w-4 h-4" />;
  }
};

const RightColumn: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Onboarding Stats */}
      <div className="bg-cream-100 rounded-[2.5rem] p-7 shadow-sm group hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-neutral-600 font-medium">Onboarding</h3>
          <span className="text-3xl font-light text-neutral-900">18%</span>
        </div>

        <div className="flex items-center justify-between text-[10px] text-neutral-400 font-medium uppercase tracking-wider mb-2">
          <span>Complete</span>
          <span>In Progress</span>
          <span>Pending</span>
        </div>

        <div className="flex gap-1 h-14 w-full">
           <div className="flex-[3] bg-amber-400 rounded-l-2xl rounded-r-lg flex items-center justify-center relative overflow-hidden group/bar">
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/bar:translate-x-[100%] transition-transform duration-1000"></div>
             <span className="text-xs font-bold text-neutral-900">Task</span>
           </div>
           <div className="flex-[2.5] bg-neutral-800 rounded-lg opacity-90"></div>
           <div className="flex-[1] bg-neutral-200 rounded-l-lg rounded-r-2xl"></div>
        </div>
      </div>

      {/* Task List - Dark Mode Panel */}
      <div className="bg-neutral-900 rounded-[2.5rem] p-8 text-white flex-1 relative overflow-hidden shadow-2xl shadow-neutral-900/20 flex flex-col">
         {/* Top fade/decoration */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

         <div className="flex items-center justify-between mb-8 relative z-10">
           <div>
              <h3 className="text-xl font-medium tracking-tight">Onboarding Tasks</h3>
              <p className="text-neutral-400 text-xs mt-1">Keep up the good work</p>
           </div>
           <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-medium text-neutral-300 border border-neutral-700">2/8 Done</span>
         </div>

         <div className="space-y-4 relative z-10 flex-1 overflow-y-auto no-scrollbar pr-2">
           {tasks.map((task, i) => (
             <div key={task.id} className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                    task.completed ? 'bg-neutral-800 text-neutral-500' : 'bg-white text-neutral-900 shadow-glow'
                  }`}>
                    {getIcon(task.type)}
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium transition-colors ${task.completed ? 'text-neutral-500 line-through decoration-neutral-600' : 'text-white group-hover:text-amber-300'}`}>
                      {task.title}
                    </h4>
                    <p className="text-[10px] text-neutral-500 font-medium">{task.time}</p>
                  </div>
                </div>
                
                <div className="text-amber-400">
                  {task.completed ? (
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/20">
                       <Check className="w-3 h-3 text-neutral-900" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-neutral-700 group-hover:border-amber-400 transition-colors flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-transparent group-hover:text-amber-400 transition-colors" />
                    </div>
                  )}
                </div>
             </div>
           ))}
           
           {/* Skeleton/Empty state example */}
           <div className="p-3 flex items-center gap-4 opacity-30">
              <div className="w-11 h-11 rounded-full bg-neutral-800"></div>
              <div className="space-y-2">
                 <div className="h-2 w-24 bg-neutral-800 rounded"></div>
                 <div className="h-2 w-16 bg-neutral-800 rounded"></div>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default RightColumn;