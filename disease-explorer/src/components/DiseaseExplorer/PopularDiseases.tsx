import React from 'react';
import { DiseaseIcon } from './DiseaseIcon';
import { popularDiseases } from './diseaseData';

interface PopularDiseasesProps {
  onSelect: (disease: string) => void;
}

export const PopularDiseases: React.FC<PopularDiseasesProps> = ({ onSelect }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Diseases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {popularDiseases.map((disease) => (
          <button
            key={disease.name}
            onClick={() => onSelect(disease.name)}
            className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mr-3 text-blue-600">
              <DiseaseIcon name={disease.iconName} />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">{disease.name}</h3>
              <p className="text-sm text-gray-500">{disease.shortDescription}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};