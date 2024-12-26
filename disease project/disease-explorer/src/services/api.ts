import axios from 'axios';
import { SearchResponse, HierarchyResponse } from '../types/disease';

const OLS_API_BASE = 'https://www.ebi.ac.uk/ols4/api';

export const searchDiseases = async (query: string) => {
  if (!query.trim()) return null;
  
  const response = await axios.get<SearchResponse>(`${OLS_API_BASE}/select`, {
    params: {
      q: query,
      ontology: 'efo,mondo',
      rows: 20,
      start: 0,
      format: 'json'
    },
  });
  return response.data;
};

export const getDiseaseHierarchy = async (iri: string) => {
  if (!iri) return null;
  
  const encodedIri = encodeURIComponent(iri);
  const response = await axios.get<HierarchyResponse>(
    `${OLS_API_BASE}/ontologies/terms/${encodedIri}/hierarchicalAncestors`
  );
  return response.data;
};