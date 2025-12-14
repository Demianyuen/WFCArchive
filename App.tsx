import React, { useState, useMemo } from 'react';
import { RESOURCES } from './constants';
import { ResourceCard } from './components/ResourceCard';
import { ResourceTag } from './types';
import { Flame, FilterX } from 'lucide-react';

const App: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<ResourceTag | null>(null);

  const filteredResources = useMemo(() => {
    return RESOURCES.filter(resource => {
      const matchesTag = selectedTag ? resource.tags.includes(selectedTag) : true;
      return matchesTag;
    });
  }, [selectedTag]);

  const allTags = Object.values(ResourceTag);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-md bg-white/90">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-stone-100 rounded-full text-stone-600">
               <Flame size={20} />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
              2025年11月26日香港大埔宏福苑火警 <span className="text-gray-400 font-normal ml-1">資源紀錄</span>
            </h1>
          </div>
          <p className="text-sm text-gray-500 ml-11 max-w-lg">
            彙整民間、媒體與官方之相關連結，以供查閱與紀念。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:px-6 w-full">
        
        {/* Controls */}
        <div className="mb-8 space-y-4">
          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
             <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all flex items-center gap-1 ${
                  selectedTag === null
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {selectedTag === null && <FilterX size={12} className="inline mr-1"/>}
                全部
              </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  tag === selectedTag
                    ? 'bg-gray-800 text-white border-gray-800 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <p className="text-gray-400 text-sm">沒有找到相關資源</p>
              <button 
                onClick={() => setSelectedTag(null)}
                className="mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium"
              >
                顯示全部
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-gray-600 mb-2">
            網頁會持續更新
          </p>
          <p className="text-xs text-gray-400">
            本網站僅作資源索引，內容版權歸原作者所有。<br className="sm:hidden"/>
            資料如有遺漏，請參考各大資訊平台。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;