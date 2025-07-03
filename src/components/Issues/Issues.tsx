import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import IssueCard from './IssueCard';
import IssueFilters from './IssueFilters';

/**
 * Issues Component
 * Displays current environmental issues with compact filters and search
 */
const Issues: React.FC = () => {
  // Filter and search state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Environmental issues data with real sources
  const issues = [
    {
      id: 1,
      title: 'Amazon Rainforest Deforestation Reaches Critical Levels',
      category: 'Deforestation',
      region: 'South America',
      severity: 'Critical',
      description: 'Deforestation in the Amazon rainforest has increased by 11.3% in 2023, with over 11,568 square kilometers lost.',
      source: 'National Institute for Space Research (INPE)',
      link: 'https://www.inpe.br/',
      date: '2024-01-15',
      location: 'Amazon Basin, Brazil',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        affected_area: '11,568 km²',
        impact_level: 'High',
        communities_affected: '180+'
      }
    },
    {
      id: 2,
      title: 'Great Barrier Reef Experiences Fourth Mass Bleaching Event',
      category: 'Marine Life',
      region: 'Australia',
      severity: 'High',
      description: 'Rising ocean temperatures have triggered the fourth mass coral bleaching event in six years, affecting 91% of reefs surveyed.',
      source: 'Australian Institute of Marine Science',
      link: 'https://www.aims.gov.au/',
      date: '2024-01-10',
      location: 'Queensland, Australia',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        affected_area: '2,300 km',
        impact_level: 'Severe',
        species_affected: '400+'
      }
    },
    {
      id: 3,
      title: 'Arctic Sea Ice Reaches Record Low Winter Maximum',
      category: 'Climate Change',
      region: 'Arctic',
      severity: 'Critical',
      description: 'Arctic sea ice extent reached its lowest winter maximum on record, indicating accelerating climate change impacts.',
      source: 'National Snow and Ice Data Center',
      link: 'https://nsidc.org/',
      date: '2024-01-08',
      location: 'Arctic Ocean',
      image: 'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        ice_extent: '14.88 million km²',
        decline_rate: '2.6% per decade',
        temperature_rise: '+2.3°C'
      }
    },
    {
      id: 4,
      title: 'Illegal Wildlife Trade Threatens African Elephant Populations',
      category: 'Wildlife',
      region: 'Africa',
      severity: 'High',
      description: 'Poaching for ivory continues to threaten African elephant populations, with an estimated 20,000 elephants killed annually.',
      source: 'World Wildlife Fund',
      link: 'https://www.worldwildlife.org/',
      date: '2024-01-05',
      location: 'Sub-Saharan Africa',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        population_decline: '60% since 2010',
        annual_loss: '20,000 elephants',
        remaining_population: '415,000'
      }
    },
    {
      id: 5,
      title: 'Microplastics Found in 90% of Global Water Sources',
      category: 'Pollution',
      region: 'Global',
      severity: 'High',
      description: 'New research reveals microplastics contamination in 90% of global water sources, posing risks to human health and ecosystems.',
      source: 'Environmental Science & Technology Journal',
      link: 'https://pubs.acs.org/journal/esthag',
      date: '2024-01-03',
      location: 'Worldwide',
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        contamination_rate: '90%',
        particles_per_liter: '5.45',
        sources_tested: '159'
      }
    }
  ];

  // Filter issues based on selected filters and search term
  const filteredIssues = issues.filter(issue => {
    const categoryMatch = selectedCategory === 'all' || issue.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || issue.region === selectedRegion;
    const searchMatch = searchTerm === '' || 
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && regionMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Filter Icon in Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <button className="p-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* Compact Filters with Search */}
      <IssueFilters
        selectedCategory={selectedCategory}
        selectedRegion={selectedRegion}
        onCategoryChange={setSelectedCategory}
        onRegionChange={setSelectedRegion}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Issues Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredIssues.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No issues found matching your criteria.</p>
          <button 
            onClick={() => {
              setSelectedCategory('all');
              setSelectedRegion('all');
              setSearchTerm('');
            }}
            className="mt-4 text-red-600 hover:text-red-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Make a Difference</h2>
        <p className="text-green-100 mb-6">
          Join our community in taking action against these environmental challenges
        </p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Issues;