import React from 'react';
import { ResourceLink } from '../types';
import { TagBadge } from './TagBadge';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceLink;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <a 
      href={resource.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {resource.tags.map(tag => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
            {resource.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            {resource.description}
          </p>
        </div>
        <div className="ml-4 text-gray-300 group-hover:text-blue-500 transition-colors">
          <ExternalLink size={20} />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-50">
        <p className="text-xs text-gray-400 font-mono truncate">
          {resource.url}
        </p>
      </div>
    </a>
  );
};