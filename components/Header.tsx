import React from 'react';
import { APP_NAME } from '../constants';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-sm">
            <ShieldCheck size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">{APP_NAME}</span>
        </div>
      </div>
    </header>
  );
};