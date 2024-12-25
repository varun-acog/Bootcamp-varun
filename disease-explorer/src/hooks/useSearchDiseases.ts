import { useQuery } from '@tanstack/react-query';
import { searchDiseases } from '../services/api';
import { removeDuplicateDiseases } from '../utils/diseaseUtils';

export function useSearchDiseases(query: string) {
  return useQuery({
    queryKey: ['diseases', query],
    queryFn: () => searchDiseases(query),
    enabled: query.length > 2,
    select: (data) => data?.response.docs ? removeDuplicateDiseases(data.response.docs) : [],
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}