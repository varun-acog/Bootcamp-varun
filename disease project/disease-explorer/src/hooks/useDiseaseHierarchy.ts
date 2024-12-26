import { useQuery } from '@tanstack/react-query';
import { getDiseaseHierarchy } from '../services/api';
import { Disease } from '../types/disease';

export function useDiseaseHierarchy(disease: Disease | null) {
  return useQuery({
    queryKey: ['hierarchy', disease?.iri],
    queryFn: () => (disease ? getDiseaseHierarchy(disease.iri) : null),
    enabled: !!disease,
    select: (data) => data?.terms,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}