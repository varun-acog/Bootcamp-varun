import { Disease } from '../types/disease';

export function getUniqueKey(disease: Disease): string {
  return `${disease.iri}_${disease.ontology_name}`;
}

export function removeDuplicateDiseases(diseases: Disease[]): Disease[] {
  const seen = new Set<string>();
  return diseases.filter(disease => {
    const key = getUniqueKey(disease);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}