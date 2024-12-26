import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackToExploreButtonProps {
  onClick: () => void;
}

export function BackToExploreButton({ onClick }: BackToExploreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Explore
    </button>
  );
}