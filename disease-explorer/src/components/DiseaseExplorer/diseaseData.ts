export interface PopularDisease {
  name: string;
  iconName: 'activity' | 'wind' | 'brain' | 'shield' | 'heart' | 'dna';
  shortDescription: string;
  category: string;
}

export const popularDiseases: PopularDisease[] = [
  {
    name: 'Type 2 Diabetes',
    iconName: 'activity',
    shortDescription: 'Metabolic disorder affecting blood sugar levels',
    category: 'Metabolic'
  },
  {
    name: 'Asthma',
    iconName: 'wind',
    shortDescription: 'Chronic respiratory condition',
    category: 'Respiratory'
  },
  {
    name: "Alzheimer's Disease",
    iconName: 'brain',
    shortDescription: 'Progressive neurological disorder',
    category: 'Neurological'
  },
  {
    name: 'Multiple Sclerosis',
    iconName: 'shield',
    shortDescription: 'Autoimmune disorder affecting the nervous system',
    category: 'Autoimmune'
  },
  {
    name: 'Hypertension',
    iconName: 'heart',
    shortDescription: 'High blood pressure condition',
    category: 'Cardiovascular'
  },
  {
    name: 'Breast Cancer',
    iconName: 'dna',
    shortDescription: 'Cancer affecting breast tissue',
    category: 'Cancer'
  }
];