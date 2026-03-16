
'use client';

import { useState } from 'react';
import Image from 'next/image';
import CertificateCard from '@/components/CertificateCard';
import registry from '@/lib/registry.json';
import placeholders from '@/app/lib/placeholder-images.json';
import { Search, Award, Star, ShieldCheck, Download } from 'lucide-react';

const totalCount = registry.certificates.length;

function normalizeString(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const isSearching = searchTerm.length > 0 && searchTerm.length <= 2;
  const hasQuery = searchTerm.length > 2;

  const filteredCertificates = hasQuery
    ? registry.certificates.filter((cert) => {
      const lowerSearch = searchTerm.toLowerCase();
      const normSearch = normalizeString(lowerSearch);
      const words = normSearch.split(' ').filter(w => w.length > 0);

      const normRecipient = normalizeString(cert.recipient.toLowerCase());
      const recipientMatch = words.every(w => normRecipient.includes(w));

      const normName = normalizeString(cert.name.toLowerCase());
      const nameMatch = normName.includes(normSearch);

      const idMatch = cert.id.toLowerCase().includes(lowerSearch);

      return recipientMatch || nameMatch || idMatch;
    })
    : registry.certificates;

  return (
    <div className="min-h-screen bg-background font-sans text-slate-800">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative text-white overflow-hidden bg-slate-900 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Background Gradients and patterns */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-primary/40 to-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-accent/30 to-sky-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-slate-200 tracking-wide">Portal de Validación Oficial</span>
          </div>

          <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-6 leading-[1.15]"
            style={{ animationDelay: '0.1s' }}>
            Valida tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-300">Certificados</span> <br className="hidden sm:block" />
            al instante.
          </h1>
          <p className="animate-fade-in-up text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto font-light"
            style={{ animationDelay: '0.2s' }}>
            Accede a nuestra base de datos para verificar, descargar y compartir tus certificaciones de forma fácil y segura.
          </p>
        </div>
      </section>

      {/* ── STATS BANNER ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-extrabold text-primary">{totalCount}</p>
            <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">Certificados</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-accent">100%</p>
            <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">Verificados</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-indigo-600">PDF</p>
            <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide">Descarga Gratis</p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Search bar */}
        <div className="animate-fade-in-up relative max-w-3xl mx-auto mb-3" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por nombre, curso o ID..."
            className="block w-full pl-16 pr-6 py-5 border-none rounded-full bg-white shadow-2xl shadow-slate-300/40 focus:ring-4 focus:ring-accent/50 transition-all duration-300 outline-none text-slate-800 placeholder-slate-500 text-lg"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Search hint */}
        <div className="max-w-3xl mx-auto mb-10 h-5 text-center">
          {isSearching && (
            <p className="text-sm text-slate-400 animate-fade-in">
              Escribe al menos <strong>3 caracteres</strong> para buscar…
            </p>
          )}
          {hasQuery && (
            <p className="text-sm text-slate-500 animate-fade-in">
              Mostrando <strong>{filteredCertificates.length}</strong> de <strong>{totalCount}</strong> certificados
            </p>
          )}
        </div>

        {/* Results grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <CertificateCard certificate={cert} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 sm:py-28 bg-white/80 rounded-3xl border-2 border-dashed border-slate-200/80 shadow-sm animate-fade-in">
            <div className="mx-auto w-fit bg-accent/10 p-5 rounded-full mb-6 ring-8 ring-accent/5">
              <Award className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-slate-800 text-2xl font-bold">No se encontraron certificados</h3>
            <p className="text-slate-500 mt-3 max-w-md mx-auto">
              Intenta con el nombre completo del participante, el nombre del curso, o el ID del certificado.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-6 text-sm text-primary hover:text-accent font-semibold underline underline-offset-4 transition-colors"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-slate-800 rounded-full shadow-lg relative w-20 h-20 mx-auto overflow-hidden">
              <Image 
                src={placeholders.logo.url} 
                alt="CertiFind Logo" 
                fill 
                className="object-contain"
                data-ai-hint="company logo footer"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-8">
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-amber-400" /><span>Verificación Rápida</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400" /><span>Documentos Seguros</span></div>
            <div className="flex items-center gap-2"><Download className="w-5 h-5 text-sky-400" /><span>Descargas Ilimitadas</span></div>
          </div>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} CertiFind. Una plataforma de confianza.</p>
        </div>
      </footer>
    </div>
  );
}
