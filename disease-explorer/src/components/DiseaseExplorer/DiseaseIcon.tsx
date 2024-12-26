import React from 'react';
import { Activity, Wind, Brain, Shield, Heart, Dna, LucideIcon } from 'lucide-react';

export const diseaseIcons: Record<string, LucideIcon> = {
  activity: Activity,
  wind: Wind,
  brain: Brain,
  shield: Shield,
  heart: Heart,
  dna: Dna,
};

interface DiseaseIconProps {
  name: keyof typeof diseaseIcons;
  size?: number;
}

export const DiseaseIcon: React.FC<DiseaseIconProps> = ({ name, size = 24 }) => {
  const Icon = diseaseIcons[name];
  return <Icon size={size} />;
};