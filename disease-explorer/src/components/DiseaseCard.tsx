import React from 'react';
import { Disease } from '../types/disease';
import { ChevronRight, Info } from 'lucide-react';

interface DiseaseCardProps {
  disease: Disease;
  onSelect: (disease: Disease) => void;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease, onSelect }) => {
  return (
    <div 
      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      onClick={() => onSelect(disease)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{disease.label}</h3>
          <p className="text-sm text-gray-500 mt-1">{disease.obo_id}</p>
          {disease.description && disease.description[0] && (
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {disease.description[0]}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Info size={16} className="text-blue-500" />
          <ChevronRight size={16} className="text-gray-400" />
        </div>
      </div>
      <div className="mt-2">
        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded">
          {disease.ontology_name.toUpperCase()}
        </span>
      </div>
    </div>
  );
};