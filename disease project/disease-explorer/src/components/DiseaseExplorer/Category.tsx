import React from 'react';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  examples: string[];
  onSearch: (term: string) => void;
}

export const Category: React.FC<CategoryProps> = ({ icon, title, examples, onSearch }) => (
  <div 
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
    onClick={() => onSearch(examples[0])}
  >
    <div className="flex items-center space-x-3 mb-3">
      <div className="text-blue-600">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="space-y-2">
      {examples.map((example) => (
        <button
          key={example}
          onClick={(e) => {
            e.stopPropagation();
            onSearch(example);
          }}
          className="text-sm text-gray-600 hover:text-blue-600 block transition-colors"
        >
          • {example}
        </button>
      ))}
    </div>
  </div>
);