import React from 'react';
import { 
  Brain, 
  Heart, 
  Wind,
  Shield, // Replacing Virus with Shield for autoimmune
  Baby, 
  Bone, 
  Eye,
  Dna,
  Pill
} from 'lucide-react';

export const categories = [
  {
    icon: <Brain size={24} />,
    title: 'Neurological',
    examples: ['Alzheimer', 'Parkinson', 'Multiple Sclerosis']
  },
  {
    icon: <Heart size={24} />,
    title: 'Cardiovascular',
    examples: ['Hypertension', 'Heart Disease', 'Stroke']
  },
  {
    icon: <Wind size={24} />,
    title: 'Respiratory',
    examples: ['Asthma', 'COPD', 'Pneumonia']
  },
  {
    icon: <Shield size={24} />,
    title: 'Autoimmune',
    examples: ['Lupus', 'Rheumatoid Arthritis', 'Type 1 Diabetes']
  },
  {
    icon: <Baby size={24} />,
    title: 'Genetic',
    examples: ['Cystic Fibrosis', 'Down Syndrome', 'Hemophilia']
  },
  {
    icon: <Bone size={24} />,
    title: 'Musculoskeletal',
    examples: ['Osteoporosis', 'Arthritis', 'Fibromyalgia']
  },
  {
    icon: <Eye size={24} />,
    title: 'Ophthalmological',
    examples: ['Glaucoma', 'Cataracts', 'Macular Degeneration']
  },
  {
    icon: <Dna size={24} />,
    title: 'Cancer',
    examples: ['Breast Cancer', 'Lung Cancer', 'Leukemia']
  },
  {
    icon: <Pill size={24} />,
    title: 'Metabolic',
    examples: ['Type 2 Diabetes', 'Obesity', 'Thyroid Disease']
  }
];