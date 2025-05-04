import React, { useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { useVideo } from '../contexts/VideoContext';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { 
    isPlaying, 
    currentTime, 
    duration,
    togglePlay, 
    setCurrentTime,
    setDuration,
    setIsPlaying
  } = useVideo();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    
    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };
    
    const onEnded = () => {
      setIsPlaying(false);
    };
    
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('ended', onEnded);
    
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('ended', onEnded);
    };
  }, [setCurrentTime, setDuration, setIsPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.play().catch(error => {
        console.error('Error playing video:', error);
        setIsPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    if (progressRef.current) {
      const progress = (currentTime / (duration || 1)) * 100;
      progressRef.current.style.width = `${progress}%`;
    }
  }, [currentTime, duration]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * (duration || 0);
    
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video 
        ref={videoRef}
        className="w-full h-full"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        onClick={togglePlay}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
        <div 
          className="w-full h-1.5 bg-gray-600/50 rounded-full cursor-pointer mb-2 touch-none"
          onClick={handleProgressBarClick}
        >
          <div 
            ref={progressRef}
            className="h-full bg-primary rounded-full relative"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform" />
          </div>
        </div>
        
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <button 
              className="p-1.5 rounded-full hover:bg-white/20 transition"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button className="p-1.5 rounded-full hover:bg-white/20 transition">
              <Volume2 size={20} />
            </button>
            
            <span className="text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration || 0)}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1.5 rounded-full hover:bg-white/20 transition">
              <Settings size={20} />
            </button>
            
            <button className="p-1.5 rounded-full hover:bg-white/20 transition">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-black/80 transition"
          onClick={togglePlay}
        >
          <Play size={32} />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;