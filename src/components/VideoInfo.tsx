import React, { useState } from 'react';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  MoreHorizontal, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';

const VideoInfo: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const { learningMode } = useLearningMode();
  
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };
  
  return (
    <div className="pb-4">
      {/* Video title - larger, more prominent */}
      <h1 className="text-xl font-bold mb-2 text-text-primary">
        React JS Tutorial for Beginners - Full Course in 12 Hours [2023]
      </h1>
      
      <div className="flex items-start flex-wrap justify-between mt-3">
        {/* Channel info section */}
        <div className="flex items-center">
          {/* Channel avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            P
          </div>
          
          {/* Channel name and subscriber count */}
          <div className="ml-3">
            <div className="font-medium text-text-primary">Programming with Mosh</div>
            <div className="text-sm text-text-secondary">1.2M subscribers</div>
          </div>
          
          {/* Subscribe button - styled like YouTube's */}
          <button
            className={`ml-4 py-2 px-4 rounded-full text-sm font-medium ${
              isSubscribed
                ? 'bg-secondary text-text-primary hover:bg-surface'
                : 'bg-text-primary text-background hover:bg-opacity-90'
            }`}
            onClick={handleSubscribe}
          >
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
        
        {/* Action buttons - like, share, etc. */}
        {!learningMode && (
          <div className="flex mt-2 space-x-2">
            {/* Like/dislike buttons */}
            <div className="flex rounded-full bg-secondary overflow-hidden">
              <button className="flex items-center px-4 py-2 hover:bg-surface">
                <ThumbsUp size={20} className="mr-2" />
                <span className="text-sm font-medium">56K</span>
              </button>
              <div className="w-px bg-surface"></div>
              <button className="flex items-center px-4 py-2 hover:bg-surface">
                <ThumbsDown size={20} />
              </button>
            </div>
            
            {/* Share button */}
            <button className="flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-surface">
              <Share2 size={20} className="mr-2" />
              <span className="text-sm font-medium">Share</span>
            </button>
            
            {/* Download button */}
            <button className="flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-surface">
              <Download size={20} className="mr-2" />
              <span className="text-sm font-medium">Download</span>
            </button>
            
            {/* More options button */}
            <button className="p-2 rounded-full bg-secondary hover:bg-surface">
              <MoreHorizontal size={20} />
            </button>
          </div>
        )}
      </div>
      
      {/* Video description */}
      {!learningMode && (
        <div 
          className={`mt-4 p-4 bg-secondary rounded-lg ${showDescription ? 'max-h-none' : 'max-h-24 overflow-hidden'}`}
        >
          <div className="text-sm">
            {/* Views and date */}
            <div className="font-medium mb-2 text-text-secondary">1.2M views • Apr 12, 2023</div>
            {/* Main description */}
            <p className="text-text-primary">
              Learn the basics of React in just 30 minutes! In this beginner-friendly tutorial, we'll cover components, props, state, hooks, and more.
              Perfect for those who are just starting out with React.
            </p>
            <p className="mt-2 text-text-secondary">
              #react #webdevelopment #javascript
            </p>
          </div>
          <button 
            className="mt-2 text-sm font-medium text-text-primary"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? (
              <span className="flex items-center">Show less <ChevronUp size={16} className="ml-1" /></span>
            ) : (
              <span className="flex items-center">...more <ChevronDown size={16} className="ml-1" /></span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoInfo;