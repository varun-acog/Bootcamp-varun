import React from 'react';
import { Category } from './Category';
import { PopularDiseases } from './PopularDiseases';
import { categories } from './categories';
import { DiseaseDetails } from './DiseaseDetails';
import { Disease } from '../../types/disease';

interface DiseaseExplorerProps {
  onSearch: (term: string) => void;
  selectedDisease?: Disease | null;
  onDiseaseSelect?: (disease: Disease | null) => void;
}

export const DiseaseExplorer: React.FC<DiseaseExplorerProps> = ({ 
  onSearch, 
  selectedDisease,
  onDiseaseSelect 
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {selectedDisease && onDiseaseSelect ? (
        <div className="mb-8">
          <DiseaseDetails 
            disease={selectedDisease} 
            onClose={() => onDiseaseSelect(null)} 
          />
        </div>
      ) : (
        <>
          <PopularDiseases onSelect={onSearch} />

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Explore Diseases by Category
            </h2>
            <p className="text-gray-600">
              Select a category or specific disease to begin your research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Category
                key={category.title}
                icon={category.icon}
                title={category.title}
                examples={category.examples}
                onSearch={onSearch}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};