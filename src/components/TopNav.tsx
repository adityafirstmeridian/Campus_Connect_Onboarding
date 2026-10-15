import React from 'react';
import { Briefcase, RotateCcw } from 'lucide-react';

interface TopNavProps {
  onResetForm: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onResetForm }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#1e3a8a]/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#1e3a8a] flex items-center justify-center text-white shadow-sm">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#1e3a8a] whitespace-nowrap">
                OnboardFlow
              </span>
              <span className="text-xs text-[#1e3a8a]/60 hidden sm:inline">
                Candidate Intake Portal
              </span>
            </div>
          </div>

          {/* Reset Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onResetForm}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Reset form fields"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

