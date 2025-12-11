import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrivacyContent } from './components/PrivacyContent';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  
  // Met à jour le titre de l'onglet du navigateur
  useEffect(() => {
    document.title = `${APP_NAME} - Politique de Confidentialité`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Header />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default App;