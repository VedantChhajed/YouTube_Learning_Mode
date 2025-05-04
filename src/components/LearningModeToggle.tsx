import React, { useEffect, useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';

const LearningModeToggle: React.FC = () => {
  const { learningMode, toggleLearningMode } = useLearningMode();
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Reset animation when learning mode changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, [learningMode]);
  
  return (
    <button
      onClick={toggleLearningMode}
      className={`
        inline-flex items-center px-4 py-2 rounded-full font-medium text-sm
        transition-all duration-300 shadow-md
        ${isAnimating && !learningMode ? 'animate-pulse' : ''}
        bg-primary text-background hover:bg-primary/90
        transform hover:scale-105 active:scale-95
      `}
      style={{
        boxShadow: '0 0 10px rgba(62, 166, 255, 0.5)'
      }}
    >
      {learningMode ? (
        <>
          <X size={18} className="mr-1.5" />
          <span className="font-bold">Exit Learning Mode</span>
        </>
      ) : (
        <>
          <BookOpen size={18} className="mr-1.5" />
          <span className="font-bold">Enable Learning Mode</span>
        </>
      )}
    </button>
  );
};

export default LearningModeToggle;