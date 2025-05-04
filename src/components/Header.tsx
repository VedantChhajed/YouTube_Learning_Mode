import React from 'react';
import { Menu, Search, Bell, User, Mic, ArrowLeft } from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';
import YouTubeLogo from './YouTubeLogo';

const Header: React.FC = () => {
  const { learningMode } = useLearningMode();
  
  if (learningMode) {
    return (
      <header className="fixed top-0 w-full bg-background border-b border-surface z-10">
        <div className="flex items-center px-4 h-14">
          <button className="p-2 mr-2 rounded-full hover:bg-surface">
            <ArrowLeft size={20} />
          </button>
          <div className="flex-grow text-sm font-medium">Learning Mode</div>
        </div>
      </header>
    );
  }
  
  return (
    <header className="fixed top-0 w-full bg-background border-b border-surface z-10">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center">
          <button className="p-2 mr-2 rounded-full hover:bg-surface">
            <Menu size={20} />
          </button>
          <YouTubeLogo />
        </div>
        
        <div className="hidden md:flex items-center flex-grow max-w-xl mx-4">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 bg-surface border-surface text-text-primary placeholder-text-secondary rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-secondary border border-l-0 border-surface rounded-r-full px-6 py-2 hover:bg-surface transition-colors">
              <Search size={20} />
            </button>
          </div>
          <button className="ml-2 p-2 bg-surface rounded-full hover:bg-secondary transition-colors">
            <Mic size={20} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-surface transition-colors md:hidden">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-surface transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-surface transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;