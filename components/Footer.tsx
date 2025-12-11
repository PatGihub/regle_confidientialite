import React from 'react';
import { APP_NAME, DEVELOPER_NAME } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="mb-4 text-slate-400 text-sm">
          &copy; {currentYear} {DEVELOPER_NAME}. Tous droits réservés.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
};