'use client';

import { useState } from 'react';
import CertificateCard from '@/components/CertificateCard';
import registry from '@/lib/registry.json';
import { Search, FileText } from 'lucide-react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertificates = registry.certificates.filter((cert) =>
    cert.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">CertiFind</h1>
          <p className="text-slate-600">Busca y descarga tus certificados oficiales</p>
        </header>

        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Introduce tu nombre o ID de certificado..."
            className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificateCard key={cert.id} certificate={cert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">No se han encontrado certificados con esos criterios.</p>
          </div>
        )}
      </div>
    </div>
  );
}