import React from 'react';

const YouTubeLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg
        className="w-8 h-8 text-red-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
      <span className="ml-1 text-lg font-semibold">YouTube</span>
    </div>
  );
};

export default YouTubeLogo;