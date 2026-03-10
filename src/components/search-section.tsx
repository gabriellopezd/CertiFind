'use client';

import { useState, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2, X } from 'lucide-react';
import { CertificateCard } from '@/components/certificate-card';
import { Certificate } from '@/lib/certificates';
import { searchAction } from '@/app/actions/certificate-actions';

export function SearchSection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Certificate[]>([]);
  const [isPending, startTransition] = useTransition();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;
    
    setHasSearched(true);
    startTransition(async () => {
      const searchResults = await searchAction(searchQuery);
      setResults(searchResults);
    });
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
  };

  return (
    <div className="w-full space-y-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-muted-foreground">
              <Search className="w-5 h-5" />
            </div>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Busca por nombre, ID o tipo de certificado..."
              className="h-14 pl-12 pr-28 rounded-xl border-border bg-white shadow-sm text-lg focus-visible:ring-primary"
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
                className="rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold shadow-md px-6"
              >
                {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Buscar'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {hasSearched && (
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              Resultados de búsqueda
              <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {results.length} encontrados
              </span>
            </h2>
          </div>
        )}

        {isPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-white animate-pulse rounded-xl border border-muted"></div>
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
            <h3 className="text-xl font-semibold text-foreground">No se encontraron certificados</h3>
            <p className="text-muted-foreground max-w-sm mx-auto">
              Intenta ajustar tus términos de búsqueda o verifica que el ID sea correcto.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
