import React from 'react';
import { Disease } from '../../types/disease';
import { Activity, AlertCircle, Link, Tag } from 'lucide-react';

interface DiseaseDetailsProps {
  disease: Disease;
  onClose: () => void;
}

export const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({ disease, onClose }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-50 p-6 border-b border-blue-100">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{disease.label}</h2>
            <p className="text-blue-600 text-sm mt-1">{disease.obo_id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description Section */}
        {disease.description && disease.description.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
              <AlertCircle size={20} className="text-blue-500" />
              Description
            </h3>
            <div className="prose prose-sm max-w-none space-y-2">
              {disease.description.map((desc, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Classification Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
            <Tag size={20} className="text-blue-500" />
            Classification
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Source</p>
              <p className="text-gray-900">{disease.ontology_name.toUpperCase()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Identifier</p>
              <p className="text-gray-900">{disease.obo_id}</p>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
            <Link size={20} className="text-blue-500" />
            External Resources
          </h3>
          <div className="space-y-2">
            <a
              href={`https://www.ncbi.nlm.nih.gov/search/all/?term=${encodeURIComponent(disease.label)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              View on PubMed
              <Activity size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};