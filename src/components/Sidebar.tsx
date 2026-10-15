import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col justify-between p-12 bg-[#FDFBF7] text-[#1e3a8a] h-screen sticky top-0">
      <div>
        <div className="mb-12">
          {/* Logo Placeholder - replace with actual FirstMeridian logo if available */}
          <div className="text-2xl font-bold">FirstMeridian</div>
          <div className="text-xs tracking-widest uppercase opacity-70">Building Partnerships, Creating Value</div>
        </div>
        
        <div className="mt-20">
          {/* Illustration Placeholder */}
          <div className="w-full h-64 bg-slate-200/50 rounded-2xl flex items-center justify-center text-slate-400">
            [Illustration Placeholder]
          </div>
          <h2 className="text-3xl font-bold mt-10 leading-tight">
            You are a minute away<br />
            from your dream job!
          </h2>
        </div>
      </div>

      <div className="flex gap-4 opacity-60 grayscale">
        {/* Logos Placeholder */}
        <div className="h-8 w-20 bg-slate-300 rounded" />
        <div className="h-8 w-20 bg-slate-300 rounded" />
        <div className="h-8 w-20 bg-slate-300 rounded" />
      </div>
    </div>
  );
};
