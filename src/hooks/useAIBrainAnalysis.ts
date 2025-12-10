import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { brainRegions, BrainRegion, ActivityMapping } from '@/data/brainRegions';

interface AIAnalysisResult {
  regions: BrainRegion[];
  mapping: ActivityMapping | null;
  isLoading: boolean;
  error: string | null;
}

export function useAIBrainAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeActivity = async (query: string): Promise<{ regions: BrainRegion[]; mapping: ActivityMapping | null }> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('analyze-brain-activity', {
        body: { query }
      });

      if (fnError) {
        throw new Error(fnError.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      // Map the returned region IDs to actual brain region objects
      const activeRegions = brainRegions.filter(region => 
        data.regions.includes(region.id)
      );

      // Create a dynamic activity mapping from the AI response
      const dynamicMapping: ActivityMapping = {
        keywords: [query.toLowerCase()],
        regions: data.regions,
        description: data.description
      };

      return { regions: activeRegions, mapping: dynamicMapping };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze activity';
      setError(errorMessage);
      console.error('AI analysis error:', err);
      return { regions: [], mapping: null };
    } finally {
      setIsLoading(false);
    }
  };

  return { analyzeActivity, isLoading, error };
}
