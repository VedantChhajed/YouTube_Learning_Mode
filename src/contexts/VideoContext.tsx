import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VideoContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number | null;
  togglePlay: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};

interface VideoProviderProps {
  children: ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number | null>(null);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <VideoContext.Provider value={{ 
      isPlaying, 
      currentTime, 
      duration,
      togglePlay, 
      setIsPlaying,
      setCurrentTime,
      setDuration
    }}>
      {children}
    </VideoContext.Provider>
  );
};