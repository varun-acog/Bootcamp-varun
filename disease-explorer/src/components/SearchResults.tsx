import React from 'react';
import { Disease } from '../types/disease';
import { DiseaseCard } from './DiseaseCard';
import { LoadingSpinner } from './LoadingSpinner';
import { getUniqueKey } from '../utils/diseaseUtils';
import { BackToExploreButton } from './BackToExploreButton';

interface SearchResultsProps {
  diseases: Disease[] | undefined;
  isSearching: boolean;
  searchQuery: string;
  onSelectDisease: (disease: Disease) => void;
  onBackToExplore: () => void;
}

export function SearchResults({ 
  diseases, 
  isSearching, 
  searchQuery, 
  onSelectDisease,
  onBackToExplore
}: SearchResultsProps) {
  if (isSearching) {
    return <LoadingSpinner />;
  }

  if (diseases?.length) {
    const uniqueDiseases = diseases.filter((disease, index, self) =>
      index === self.findIndex(d => getUniqueKey(d) === getUniqueKey(disease))
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-start">
          <BackToExploreButton onClick={onBackToExplore} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {uniqueDiseases.map((disease) => (
            <DiseaseCard
              key={getUniqueKey(disease)}
              disease={disease}
              onSelect={onSelectDisease}
            />
          ))}
        </div>
      </div>
    );
  }

  if (searchQuery.length > 2) {
    return (
      <div className="space-y-6">
        <div className="flex justify-start">
          <BackToExploreButton onClick={onBackToExplore} />
        </div>
        <p className="text-center text-gray-600">No results found</p>
      </div>
    );
  }

  return null;
}