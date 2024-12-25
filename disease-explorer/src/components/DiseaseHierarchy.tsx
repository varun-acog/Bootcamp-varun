import React from 'react';
import { Disease } from '../types/disease';
import { ChevronRight } from 'lucide-react';

interface DiseaseHierarchyProps {
  hierarchy: Disease[];
}

export const DiseaseHierarchy: React.FC<DiseaseHierarchyProps> = ({ hierarchy }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Disease Hierarchy</h3>
      <div className="flex flex-wrap items-center gap-2">
        {hierarchy.map((disease, index) => (
          <React.Fragment key={disease.iri}>
            <span className="text-sm font-medium text-gray-700">
              {disease.label}
            </span>
            {index < hierarchy.length - 1 && (
              <ChevronRight size={16} className="text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};