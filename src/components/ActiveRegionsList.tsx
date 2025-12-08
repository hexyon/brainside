import { BrainRegion } from '@/data/brainRegions';
import { Brain } from 'lucide-react';

interface ActiveRegionsListProps {
  regions: BrainRegion[];
  onRegionClick: (region: BrainRegion) => void;
  query: string;
}

export function ActiveRegionsList({ regions, onRegionClick, query }: ActiveRegionsListProps) {
  if (regions.length === 0) return null;

  return (
    <div className="apple-card p-6 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-5 h-5 text-primary" />
        <h3 className="text-[17px] font-semibold">
          Active Regions for "{query}"
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => onRegionClick(region)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 active:scale-95"
          >
            <div
              className="w-2.5 h-2.5 rounded-full animate-pulse-slow"
              style={{ 
                backgroundColor: region.color,
                boxShadow: `0 0 10px ${region.color}80`
              }}
            />
            <span className="text-[15px] font-medium">
              {region.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
