import { useState, useCallback } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const suggestions = [
  "Running a marathon",
  "Solving a math problem",
  "Playing the piano",
  "Reading a book",
  "Coding a website",
  "Dancing salsa",
  "Feeling anxious",
  "Riding a bicycle",
];

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  }, [query, onSearch]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
  };

  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe an activity..."
            className="apple-input pl-12 pr-12"
          />
          {query && (
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </button>
          )}
        </div>
      </form>
      
      {/* Suggestions */}
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            className="apple-badge hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
