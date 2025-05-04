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
    <div className="mt-4 pb-4 border-b border-surface">
      <h1 className="text-xl font-semibold mb-2">
        Learn React in 100 Seconds
      </h1>
      
      <div className="flex items-start flex-wrap justify-between">
        <div className="flex items-center mt-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            F
          </div>
          
          <div className="ml-2">
            <div className="font-semibold">Fireship</div>
            <div className="text-sm text-text-secondary">2.5M subscribers</div>
          </div>
          
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
        
        {!learningMode && (
          <div className="flex mt-2 space-x-1">
            <div className="flex rounded-full bg-secondary overflow-hidden">
              <button className="flex items-center px-3 py-1 hover:bg-surface">
                <ThumbsUp size={18} className="mr-1" />
                <span className="text-sm">15K</span>
              </button>
              <div className="w-px bg-surface"></div>
              <button className="flex items-center px-3 py-1 hover:bg-surface">
                <ThumbsDown size={18} />
              </button>
            </div>
            
            <button className="flex items-center px-3 py-1 rounded-full bg-secondary hover:bg-surface">
              <Share2 size={18} className="mr-1" />
              <span className="text-sm">Share</span>
            </button>
            
            <button className="flex items-center px-3 py-1 rounded-full bg-secondary hover:bg-surface">
              <Download size={18} className="mr-1" />
              <span className="text-sm">Download</span>
            </button>
            
            <button className="p-2 rounded-full bg-secondary hover:bg-surface">
              <MoreHorizontal size={18} />
            </button>
          </div>
        )}
      </div>
      
      {!learningMode && (
        <div 
          className={`mt-4 p-3 bg-secondary rounded-lg ${showDescription ? 'max-h-none' : 'max-h-20 overflow-hidden'}`}
        >
          <div className="text-sm">
            <div className="font-semibold mb-1 text-text-secondary">1.2M views • 1 year ago</div>
            <p className="text-text-primary">
              Learn the basics of React.js in just 100 seconds! This crash course covers components, props, state, hooks, and more - everything you need to know to start building modern web applications with React.
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