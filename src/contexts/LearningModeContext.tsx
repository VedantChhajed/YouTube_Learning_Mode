import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LearningModeContextType {
  learningMode: boolean;
  toggleLearningMode: () => void;
}

const LearningModeContext = createContext<LearningModeContextType | undefined>(undefined);

export const useLearningMode = () => {
  const context = useContext(LearningModeContext);
  if (context === undefined) {
    throw new Error('useLearningMode must be used within a LearningModeProvider');
  }
  return context;
};

interface LearningModeProviderProps {
  children: ReactNode;
}

export const LearningModeProvider: React.FC<LearningModeProviderProps> = ({ children }) => {
  const [learningMode, setLearningMode] = useState(false);

  const toggleLearningMode = () => {
    setLearningMode(prev => !prev);
  };

  return (
    <LearningModeContext.Provider value={{ learningMode, toggleLearningMode }}>
      {children}
    </LearningModeContext.Provider>
  );
};