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
      <div className="container mx-auto pt-20 px-4">
        <div className={`flex flex-col ${learningMode ? 'lg:flex-row' : ''} gap-4`}>
          <div className={`${learningMode ? 'lg:w-3/5' : 'w-full'}`}>
            <VideoPlayer />
            <VideoInfo />
          </div>
          
          {learningMode ? (
            <div className="lg:w-2/5">
              <div className="sticky top-20">
                <NotePanel />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-2/3">
                  <Comments />
                </div>
                <div className="lg:w-1/3">
                  <Recommendations />
                </div>
              </div>
            </div>
          )}
        </div>
        <LearningModeToggle />
      </div>
    </VideoProvider>
  );
};

export default VideoPage;