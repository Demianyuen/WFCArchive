import React from 'react';
import { ResourceTag } from '../types';

interface TagBadgeProps {
  tag: ResourceTag;
}

export const TagBadge: React.FC<TagBadgeProps> = ({ tag }) => {
  const getColors = (t: ResourceTag) => {
    switch (t) {
      case ResourceTag.MEMORIAL:
        return 'bg-stone-100 text-stone-700 border-stone-200';
      case ResourceTag.DOCUMENTARY:
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case ResourceTag.NEWS:
        return 'bg-red-50 text-red-700 border-red-100';
      case ResourceTag.OFFICIAL:
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case ResourceTag.SUPPORT:
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case ResourceTag.DONATION:
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case ResourceTag.ALBUM:
        return 'bg-purple-50 text-purple-700 border-purple-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${getColors(tag)}`}>
      {tag}
    </span>
  );
};