import React from 'react';
import Header from './Header';
import { useLearningMode } from '../contexts/LearningModeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { learningMode } = useLearningMode();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${learningMode ? 'bg-gray-900' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;