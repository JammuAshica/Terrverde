import React from 'react';
import { Filter, Search } from 'lucide-react';

interface IssueFiltersProps {
  selectedCategory: string;
  selectedRegion: string;
  onCategoryChange: (category: string) => void;
  onRegionChange: (region: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

/**
 * Issue Filters Component
 * Compact filtering options with search bar for environmental issues
 */
const IssueFilters: React.FC<IssueFiltersProps> = ({
  selectedCategory,
  selectedRegion,
  onCategoryChange,
  onRegionChange,
  searchTerm,
  onSearchChange
}) => {
  // Filter options
  const categories = [
    'all',
    'Deforestation',
    'Marine Life',
    'Climate Change',
    'Wildlife',
    'Pollution'
  ];

  const regions = [
    'all',
    'Global',
    'South America',
    'Australia',
    'Arctic',
    'Africa',
    'Asia',
    'North America',
    'Europe'
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      {/* Search Bar */}
      <div className="relative flex-1 min-w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search environmental issues..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
        />
      </div>
      
      {/* Compact Filters */}
      <div className="flex items-center space-x-3">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>

        {/* Region Filter */}
        <select
          value={selectedRegion}
          onChange={(e) => onRegionChange(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region === 'all' ? 'All Regions' : region}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Icon */}
      <div className="absolute top-6 right-6">
        <button className="p-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Filter className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default IssueFilters;