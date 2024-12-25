import React from 'react';
import { Disease } from '../types/disease';
import { DiseaseCard } from './DiseaseCard';
import { LoadingSpinner } from './LoadingSpinner';
import { getUniqueKey } from '../utils/diseaseUtils';

interface SearchResultsProps {
  diseases: Disease[] | undefined;
  isSearching: boolean;
  searchQuery: string;
  onSelectDisease: (disease: Disease) => void;
}

export function SearchResults({ 
  diseases, 
  isSearching, 
  searchQuery, 
  onSelectDisease 
}: SearchResultsProps) {
  if (isSearching) {
    return <LoadingSpinner />;
  }

  if (diseases?.length) {
    // Remove duplicates based on IRI and ontology
    const uniqueDiseases = diseases.filter((disease, index, self) =>
      index === self.findIndex(d => getUniqueKey(d) === getUniqueKey(disease))
    );

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {uniqueDiseases.map((disease) => (
          <DiseaseCard
            key={getUniqueKey(disease)}
            disease={disease}
            onSelect={onSelectDisease}
          />
        ))}
      </div>
    );
  }

  if (searchQuery.length > 2) {
    return <p className="text-center text-gray-600">No results found</p>;
  }

  return null;
}