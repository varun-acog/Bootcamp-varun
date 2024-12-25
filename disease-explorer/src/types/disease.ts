export interface Disease {
  iri: string;
  label: string;
  description?: string[];
  ontology_name: string;
  obo_id: string;
  parents?: Disease[];
  children?: Disease[];
}

export interface SearchResponse {
  response: {
    docs: Disease[];
    numFound: number;
    start: number;
  };
}

export interface HierarchyResponse {
  terms: Disease[];
}