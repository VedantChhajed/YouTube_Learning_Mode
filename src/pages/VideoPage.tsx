import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoInfo from '../components/VideoInfo';
import NotePanel from '../components/NotePanel';
import Recommendations from '../components/Recommendations';
import Comments from '../components/Comments';
import LearningModeToggle from '../components/LearningModeToggle';
import { useLearningMode } from '../contexts/LearningModeContext';
import { VideoProvider } from '../contexts/VideoContext';

const VideoPage: React.FC = () => {
  const { learningMode } = useLearningMode();

  return (
    <VideoProvider>
      {/* Full width layout with minimal padding */}
      <div className="pt-16 px-4 md:px-6 bg-background"> 
        {/* Position the learning mode toggle button in the header area, 
            but properly spaced to avoid overlap */}
        <div className="flex justify-end mb-4">
          <LearningModeToggle />
        </div>
        
        <div className={`flex flex-col ${learningMode ? 'lg:flex-row' : 'lg:flex-row'} gap-6`}>
          {/* Main content column - video player, info, comments */}
          <div className={`${learningMode ? 'lg:w-3/5' : 'lg:flex-1'} flex flex-col`}>
            {/* Video player with proper aspect ratio */}
            <div className="w-full">
              <VideoPlayer />
            </div>
            
            {/* Video info with increased spacing between sections */}
            <div className="mt-3">
              <VideoInfo />
            </div>
            
            {/* Comments section with proper spacing */}
            {!learningMode && (
              <div className="mt-6">
                <Comments />
              </div>
            )}
          </div>
          
          {/* Recommendations column with fixed width */}
          <div className={`${learningMode ? 'lg:w-2/5' : 'lg:w-[400px] flex-shrink-0'}`}>
            {learningMode ? (
              <div className="sticky top-20">
                <NotePanel />
              </div>
            ) : (
              <div className="sticky top-20">
                <Recommendations />
              </div>
            )}
          </div>
        </div>
      </div>
    </VideoProvider>
  );
};

export default VideoPage;