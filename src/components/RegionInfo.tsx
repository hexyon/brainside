import { X, Brain, Zap } from 'lucide-react';
import { BrainRegion, ActivityMapping } from '@/data/brainRegions';

interface RegionInfoProps {
  region: BrainRegion | null;
  activityMapping: ActivityMapping | null;
  onClose: () => void;
}

export function RegionInfo({ region, activityMapping, onClose }: RegionInfoProps) {
  if (!region) return null;

  return (
    <div className="animate-fade-in-up">
      <div className="apple-card p-6 max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-3 h-3 rounded-full animate-pulse-slow"
              style={{ 
                backgroundColor: region.color,
                boxShadow: `0 0 20px ${region.color}80`
              }}
            />
            <h3 className="text-2xl font-semibold">
              {region.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-secondary transition-all duration-200 active:scale-95"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
        
        {/* Brain region image */}
        <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-background p-6">
          <img 
            src={region.imagePath} 
            alt={region.name}
            className="w-full h-auto object-contain max-h-64 mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        <p className="text-[17px] text-muted-foreground leading-relaxed mb-6">
          {region.description}
        </p>
        
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-5 h-5 text-primary" />
          <span className="text-[17px] font-semibold">Key Functions</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {region.functions.slice(0, 8).map((func) => (
            <span
              key={func}
              className="apple-badge"
              style={{
                backgroundColor: `${region.color}15`,
                color: region.color,
                borderColor: `${region.color}30`,
              }}
            >
              {func}
            </span>
          ))}
        </div>
        
        {activityMapping && (
          <div className="pt-6 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-[17px] font-semibold">Activity Context</span>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {activityMapping.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
