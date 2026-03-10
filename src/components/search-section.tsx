'use client';

import { useState, useTransition, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2, Sparkles, X, ChevronRight } from 'lucide-react';
import { CertificateCard } from '@/components/certificate-card';
import { Certificate } from '@/lib/certificates';
import { searchAction, getSuggestionsAction } from '@/app/actions/certificate-actions';
import { cn } from '@/lib/utils';

export function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Certificate[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;
    
    setHasSearched(true);
    startTransition(async () => {
      const searchResults = await searchAction(searchQuery);
      setResults(searchResults);
    });
  };

  const getAIHelp = async () => {
    if (!query.trim()) return;
    setIsSuggesting(true);
    const aiSuggestions = await getSuggestionsAction(query);
    setSuggestions(aiSuggestions);
    setIsSuggesting(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSuggestions([]);
    setHasSearched(false);
  };

  return (
    <div className="w-full space-y-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-muted-foreground">
              <Search className="w-5 h-5" />
            </div>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search by name, ID, or certificate type..."
              className="h-14 pl-12 pr-28 rounded-xl border-none bg-white shadow-xl text-lg focus-visible:ring-primary"
            />
            <div className="absolute right-2 flex gap-1">
              {query && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={clearSearch}
                  className="rounded-lg text-muted-foreground hover:bg-muted"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
              <Button 
                onClick={() => handleSearch()} 
                disabled={isPending}
                className="rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg px-6"
              >
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 gap-2"
            onClick={getAIHelp}
            disabled={isSuggesting || !query}
          >
            {isSuggesting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 text-secondary" />
            )}
            AI Search Assistant
          </Button>
        </div>

        {suggestions.length > 0 && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-500 bg-secondary/5 border border-secondary/20 rounded-xl p-4 space-y-3">
            <p className="text-sm font-medium text-secondary flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Refine your search:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(suggestion);
                    handleSearch(suggestion);
                    setSuggestions([]);
                  }}
                  className="px-3 py-1.5 bg-white border border-secondary/10 hover:border-secondary/50 hover:bg-secondary/10 rounded-lg text-sm transition-all flex items-center gap-1 group"
                >
                  {suggestion}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {hasSearched && (
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              Search Results
              <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {results.length} found
              </span>
            </h2>
          </div>
        )}

        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[450px] bg-white animate-pulse rounded-xl border border-muted"></div>
            ))}
          </div>
        ) : hasSearched && results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {results.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        ) : hasSearched && results.length === 0 ? (
          <div className="text-center py-20 space-y-4 animate-in fade-in duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">No certificates found</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Try adjusting your search terms or use the AI Search Assistant for better suggestions.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}