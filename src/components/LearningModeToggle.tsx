import React from 'react';
import { BookOpen, X } from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';

const LearningModeToggle: React.FC = () => {
  const { learningMode, toggleLearningMode } = useLearningMode();
  
  return (
    <button
      onClick={toggleLearningMode}
      className={`
        fixed right-4 top-20 z-20
        flex items-center px-4 py-2 rounded-full font-medium
        transition-all duration-300 shadow-lg
        ${
          learningMode
            ? 'bg-primary text-background hover:bg-primary/90'
            : 'bg-surface text-primary hover:bg-secondary'
        }
      `}
    >
      {learningMode ? (
        <>
          <X size={18} className="mr-2" />
          Exit Learning Mode
        </>
      ) : (
        <>
          <BookOpen size={18} className="mr-2" />
          Enable Learning Mode
        </>
      )}
    </button>
  );
};

export default LearningModeToggle;