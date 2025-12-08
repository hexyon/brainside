import { useState, useCallback } from 'react';
import { BrainScene } from '@/components/BrainScene';
import { SearchBar } from '@/components/SearchBar';
import { RegionInfo } from '@/components/RegionInfo';
import { ActiveRegionsList } from '@/components/ActiveRegionsList';
import { BrainRegion, findActiveRegions, ActivityMapping } from '@/data/brainRegions';
import { useAIBrainAnalysis } from '@/hooks/useAIBrainAnalysis';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeRegions, setActiveRegions] = useState<BrainRegion[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<BrainRegion | null>(null);
  const [currentMapping, setCurrentMapping] = useState<ActivityMapping | null>(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const { analyzeActivity, isLoading, error } = useAIBrainAnalysis();
  const { toast } = useToast();

  const handleSearch = useCallback(async (query: string) => {
    setCurrentQuery(query);
    setSelectedRegion(null);

    // First try local matching
    const localResult = findActiveRegions(query);

    // If no local matches, use AI analysis
    if (localResult.regions.length === 0) {
      const aiResult = await analyzeActivity(query);
      if (aiResult.regions.length > 0) {
        setActiveRegions(aiResult.regions);
        setCurrentMapping(aiResult.mapping);
        toast({
          title: "AI Analysis Complete",
          description: `Found ${aiResult.regions.length} related brain regions`,
        });
      } else {
        setActiveRegions([]);
        setCurrentMapping(null);
        toast({
          title: "No regions found",
          description: "Try describing a specific activity or mental state",
          variant: "destructive",
        });
      }
    } else {
      setActiveRegions(localResult.regions);
      setCurrentMapping(localResult.mapping);
    }
  }, [analyzeActivity, toast]);

  const handleRegionClick = useCallback((region: BrainRegion) => {
    setSelectedRegion(region);
  }, []);

  const handleCloseInfo = useCallback(() => {
    setSelectedRegion(null);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-12 pb-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/src/favicon/favicon.ico" alt="Brain Side Logo" className="w-12 h-12" />
            <h1 className="text-5xl font-semibold tracking-tight">
              Brain Side
            </h1>
          </div>
          <p className="text-muted-foreground text-[19px] max-w-2xl mx-auto">
            Discover which brain regions activate during different activities
          </p>
        </div>
      </header>

      {/* Search Section */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Brain Visualization - Fixed height */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="apple-card overflow-hidden" style={{ height: '600px' }}>
            <BrainScene
              activeRegions={activeRegions}
              onRegionClick={handleRegionClick}
            />
          </div>
        </div>
      </section>

      {/* Info Panels */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Active regions list */}
          {activeRegions.length > 0 && (
            <ActiveRegionsList
              regions={activeRegions}
              onRegionClick={handleRegionClick}
              query={currentQuery}
            />
          )}

          {/* Selected region info */}
          {selectedRegion && (
            <RegionInfo
              region={selectedRegion}
              activityMapping={currentMapping}
              onClose={handleCloseInfo}
            />
          )}

          {/* Loading state */}
          {isLoading && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span className="text-[17px] font-medium">
                  Analyzing brain activity with AI...
                </span>
              </div>
            </div>
          )}

          {/* Empty state */}
          {activeRegions.length === 0 && !selectedRegion && !isLoading && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-[17px] text-muted-foreground">
                  Search for any activity to see brain regions light up
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
