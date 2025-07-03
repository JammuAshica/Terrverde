import React from 'react';
import { ExternalLink, Calendar, MapPin, AlertTriangle } from 'lucide-react';

interface IssueCardProps {
  issue: {
    id: number;
    title: string;
    category: string;
    region: string;
    severity: string;
    description: string;
    source: string;
    link: string;
    date: string;
    location: string;
    image: string;
    stats: Record<string, string>;
  };
}

/**
 * Issue Card Component
 * Displays individual environmental issue with details and source links
 */
const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  /**
   * Get severity color based on severity level
   */
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Issue Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={issue.image}
          alt={issue.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(issue.severity)}`}>
            {issue.severity}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
            {issue.category}
          </span>
        </div>
      </div>

      {/* Issue Content */}
      <div className="p-6">
        {/* Title and Meta Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {issue.title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(issue.date)}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {issue.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {issue.description}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(issue.stats).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                {key.replace('_', ' ')}
              </p>
              <p className="text-sm font-semibold text-gray-900">{value}</p>
            </div>
          ))}
        </div>

        {/* Source and Link */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-600">Source</p>
            <p className="text-sm font-medium text-gray-900">{issue.source}</p>
          </div>
          
          <a
            href={issue.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <span className="text-sm font-medium mr-1">Read More</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;