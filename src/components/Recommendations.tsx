import React from 'react';
import { useLearningMode } from '../contexts/LearningModeContext';

const videoThumbnails = [
	{
		id: 1,
		title: 'Building a REST API with Node.js',
		channel: 'Coding Garden',
		views: '124K views',
		time: '2 weeks ago',
		thumbnail: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/hqdefault.jpg',
	},
	{
		id: 2,
		title: 'TypeScript Crash Course',
		channel: 'Traversy Media',
		views: '502K views',
		time: '1 month ago',
		thumbnail: 'https://i.ytimg.com/vi/BCg4U1FzODs/hqdefault.jpg',
	},
	{
		id: 3,
		title: 'JavaScript Array Methods You Need To Know',
		channel: 'Web Dev Simplified',
		views: '345K views',
		time: '3 weeks ago',
		thumbnail: 'https://i.ytimg.com/vi/R8rmfD9Y5-c/hqdefault.jpg',
	},
	{
		id: 4,
		title: 'React State Management for Beginners',
		channel: 'Fireship',
		views: '781K views',
		time: '6 months ago',
		thumbnail: 'https://i.ytimg.com/vi/O6P86uwfdR0/hqdefault.jpg',
	},
	{
		id: 5,
		title: 'Build a Portfolio Website with Next.js',
		channel: 'Sonny Sangha',
		views: '212K views',
		time: '2 months ago',
		thumbnail: 'https://i.ytimg.com/vi/urgi2iz9P6U/hqdefault.jpg',
	},
];

const Recommendations: React.FC = () => {
	const { learningMode } = useLearningMode();

	if (learningMode) return null;

	return (
		<div>
			<h3 className="text-lg font-medium mb-3">Recommended videos</h3>
			<div className="space-y-3">
				{videoThumbnails.map((video) => (
					<div key={video.id} className="flex cursor-pointer group">
						<div className="w-40 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
							<img
								src={video.thumbnail}
								alt={video.title}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="ml-2 flex-grow">
							<h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary">
								{video.title}
							</h4>
							<p className="text-xs text-text-secondary mt-1">
								{video.channel}
							</p>
							<div className="flex text-xs text-text-secondary mt-1">
								<span>{video.views}</span>
								<span className="mx-1">•</span>
								<span>{video.time}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recommendations;