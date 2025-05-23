import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, ChevronDown } from 'lucide-react';
import { useLearningMode } from '../contexts/LearningModeContext';

const comments = [
	{
		id: 1,
		user: 'TechEnthusiast',
		avatar: 'TE',
		content:
			'This was incredibly helpful for understanding React hooks. Thank you!',
		likes: 243,
		time: '2 days ago',
		replies: 12,
	},
	{
		id: 2,
		user: 'JaneCode',
		avatar: 'JC',
		content:
			'I wish my CS professor explained things this clearly. Going to share this with my study group!',
		likes: 157,
		time: '1 month ago',
		replies: 5,
	},
	{
		id: 3,
		user: 'ReactNewbie',
		avatar: 'RN',
		content:
			'Finally understood what the useState hook actually does. Been struggling with this concept for weeks!',
		likes: 89,
		time: '3 weeks ago',
		replies: 3,
	},
];

const Comments: React.FC = () => {
	const [commentText, setCommentText] = useState('');
	const { learningMode } = useLearningMode();

	if (learningMode) return null;

	return (
		<div className="border-t border-surface pt-6">
			{/* Comments header with count */}
			<div className="flex items-center mb-4">
				<h3 className="text-xl font-medium mr-2">Comments</h3>
				<span className="text-text-secondary">{comments.length}</span>
			</div>

			{/* Add comment input area */}
			<div className="flex mb-8">
				<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-text-secondary font-bold flex-shrink-0">
					Y
				</div>
				<div className="ml-3 flex-grow">
					<input
						type="text"
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
						placeholder="Add a comment..."
						className="w-full border-b border-surface bg-transparent py-1 focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary"
					/>
				</div>
			</div>

			{/* Comments list */}
			<div className="space-y-6">
				{comments.map((comment) => (
					<div key={comment.id} className="flex">
						{/* Comment avatar */}
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
							{comment.avatar}
						</div>
						{/* Comment content */}
						<div className="ml-3 flex-grow">
							{/* Username and time */}
							<div className="flex items-center">
								<span className="font-medium text-sm text-text-primary">
									{comment.user}
								</span>
								<span className="ml-2 text-xs text-text-secondary">
									{comment.time}
								</span>
							</div>
							{/* Comment text */}
							<p className="mt-1 text-sm text-text-primary">
								{comment.content}
							</p>
							{/* Like/dislike buttons */}
							<div className="flex items-center mt-2">
								<button className="flex items-center text-text-secondary hover:text-text-primary mr-4">
									<ThumbsUp size={14} className="mr-1" />
									<span className="text-xs">{comment.likes}</span>
								</button>
								<button className="text-text-secondary hover:text-text-primary mr-4">
									<ThumbsDown size={14} />
								</button>
								<button className="text-xs font-medium text-text-secondary hover:text-text-primary">
									Reply
								</button>
							</div>

							{/* View replies button */}
							{comment.replies > 0 && (
								<button className="mt-2 flex items-center text-primary text-sm font-medium">
									<ChevronDown size={16} className="mr-1" />
									{comment.replies} replies
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;