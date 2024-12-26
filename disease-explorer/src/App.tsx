import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { DiseaseHierarchy } from './components/DiseaseHierarchy';
import { Disease } from './types/disease';
import { Header } from './components/Header';
import { SearchResults } from './components/SearchResults';
import { useSearchDiseases } from './hooks/useSearchDiseases';
import { useDiseaseHierarchy } from './hooks/useDiseaseHierarchy';
import { DiseaseExplorer } from './components/DiseaseExplorer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const { data: diseases, isLoading: isSearching } = useSearchDiseases(searchQuery);
  const { data: hierarchyData } = useDiseaseHierarchy(selectedDisease);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedDisease(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex justify-center">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={() => {}}
            />
          </div>

          {!searchQuery && !selectedDisease && (
            <DiseaseExplorer onSearch={handleSearch} />
          )}

          {selectedDisease && hierarchyData && (
            <DiseaseHierarchy hierarchy={hierarchyData} />
          )}

          <SearchResults
            diseases={diseases}
            isSearching={isSearching}
            searchQuery={searchQuery}
            onSelectDisease={setSelectedDisease}
          />
        </div>
      </main>
    </div>
  );
}