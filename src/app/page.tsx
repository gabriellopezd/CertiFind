'use client';

import { useState, useEffect } from 'react';
import CertificateCard from '@/components/CertificateCard';
import registry from '@/lib/registry.json';
import { Search, Loader, Award, Star, ShieldCheck, Download } from 'lucide-react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const normalizeString = (str: string) => 
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 600); 
    } else {
      setIsLoading(false);
    }
  };

  const filteredCertificates = searchTerm.length > 2 
    ? registry.certificates.filter((cert) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const normalizedSearchTerm = normalizeString(lowerCaseSearchTerm);
        const searchWords = normalizedSearchTerm.split(' ').filter(word => word.length > 0);

        const normalizedRecipient = normalizeString(cert.recipient.toLowerCase());
        const recipientMatch = searchWords.every(word => 
          normalizedRecipient.includes(word)
        );

        const normalizedCertName = normalizeString(cert.name.toLowerCase());
        const nameMatch = normalizedCertName.includes(normalizedSearchTerm);

        const idMatch = cert.id.toLowerCase().includes(lowerCaseSearchTerm);

        return recipientMatch || nameMatch || idMatch;
      })
    : registry.certificates;

  const animationClass = (index: number) => {
    if (!isMounted) return 'opacity-0';
    return `opacity-100 transition-all duration-700 ease-out transform translate-y-0 delay-${index * 100}`;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-slate-800">
      
      <header className="relative text-white overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <div className={`flex justify-center mb-6 ${isMounted ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                <div className="bg-white p-4 rounded-full shadow-2xl shadow-primary/30">
                    <img src="/previews/Logo.png" alt="CertiFacil Logo" className="w-28 h-auto"/>
                </div>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-4 ${animationClass(1)}`}>
                Portal de Certificados CertiFacil
            </h1>
            <p className={`mt-4 text-lg sm:text-xl text-indigo-100/90 max-w-3xl mx-auto ${animationClass(2)}`}>
                Encuentra, verifica y descarga tus certificados oficiales al instante.
            </p>
        </div>
      </header>

      <main className="-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
            <div className={`relative max-w-3xl mx-auto mb-12 md:mb-16 ${animationClass(3)}`}>
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-slate-400" />
                </div>
                <input
                    type="text"
                    placeholder="Buscar por nombre, curso o ID..."
                    className="block w-full pl-16 pr-6 py-5 border-none rounded-full bg-white shadow-2xl shadow-slate-300/40 focus:ring-4 focus:ring-accent/50 transition-all duration-300 outline-none text-slate-800 placeholder-slate-500 text-lg"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {isLoading && (
                    <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                        <Loader className="h-6 w-6 text-accent animate-spin" />
                    </div>
                )}
            </div>

            {filteredCertificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCertificates.map((cert, index) => (
                  <div key={cert.id} className={animationClass(index + 4)}>
                    <CertificateCard certificate={cert} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-20 sm:py-28 bg-white/80 rounded-3xl border-2 border-dashed border-slate-200/80 shadow-sm ${animationClass(4)}`}>
                  <div className="mx-auto w-fit bg-accent/10 p-5 rounded-full mb-6 ring-8 ring-accent/5">
                      <Award className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="text-slate-800 text-2xl font-bold">No se encontraron certificados</h3>
                  <p className="text-slate-500 mt-3 max-w-md mx-auto">La búsqueda no arrojó resultados. Por favor, verifica tus términos o intenta con una búsqueda más amplia.</p>
              </div>
            )}
        </div>
      </main>
      
       <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
                <div className="bg-slate-800 p-3 rounded-full shadow-lg">
                    <img src="/previews/Logo.png" alt="CertiFacil Logo" className="w-16 h-auto opacity-80"/>
                </div>
            </div>
            <div className="flex justify-center gap-8 mb-6">
                <div className="flex items-center gap-2"><Star className="w-5 h-5 text-amber-400"/><span>Verificación Rápida</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400"/><span>Documentos Seguros</span></div>
                <div className="flex items-center gap-2"><Download className="w-5 h-5 text-sky-400"/><span>Descargas Ilimitadas</span></div>
            </div>
            <p className="text-slate-500">&copy; {new Date().getFullYear()} CertiFacil. Una plataforma de confianza.</p>
        </div>
      </footer>
    </div>
  );
}
