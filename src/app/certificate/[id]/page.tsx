'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import registry from '@/lib/registry.json';
import { Download, Calendar, User, Hash, ArrowLeft, FileText, ChevronRight, Home } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  recipient: string;
  issueDate: string;
  fileName: string;
  description?: string;
  previewImage?: string;
}

export default function CertificateDetailPage() {
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    setIsMounted(true);
    if (id) {
      const foundCertificate = registry.certificates.find(cert => cert.id === id);
      if (foundCertificate) {
        setCertificate(foundCertificate);
      } else {
        router.push('/');
      }
    }
  }, [id, router]);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-slate-500 text-lg">Cargando detalles del certificado...</p>
      </div>
    );
  }

  const downloadPath = `/certificates/${certificate.fileName}`;
  const animationClass = isMounted ? 'opacity-100 transition-opacity duration-700 ease-out' : 'opacity-0';

  return (
    <div className="min-h-screen bg-background font-sans text-slate-800">
        <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3 text-primary">
                         <div className="bg-white p-2 rounded-full shadow-md">
                            <img src="/previews/Logo.png" alt="CertiFacil Logo" className="w-10 h-auto"/>
                        </div>
                        <span className="font-bold text-2xl hidden sm:inline">CertiFacil</span>
                    </Link>
                    <nav className="flex items-center text-base font-medium text-slate-500 bg-slate-100/80 px-4 py-2 rounded-full">
                        <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                            <Home className="w-4 h-4"/>
                            <span>Inicio</span>
                        </Link>
                        <ChevronRight className="h-5 w-5 mx-1.5 text-slate-400" />
                        <span className="font-semibold text-primary">Detalle</span>
                    </nav>
                </div>
            </div>
      </header>

      <main className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 ${animationClass}`}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div className="lg:col-span-3">
             {certificate.previewImage && (
                <div className="w-full h-auto bg-white p-5 rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-200/80 sticky top-28">
                <img 
                    src={certificate.previewImage}
                    alt={`Vista previa de ${certificate.name}`}
                    className="w-full h-full object-contain rounded-xl border border-slate-200/60"
                />
                </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-accent mb-4">
                <FileText className="w-6 h-6" />
                <span className="text-md font-bold uppercase tracking-widest">Certificado Oficial</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">{certificate.name}</h1>
            <p className="text-slate-600 text-lg mb-8">{certificate.description}</p>
            
            <a
                href={downloadPath}
                download={certificate.fileName}
                className="flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-lg transform hover:-translate-y-0.5"
                >
                <Download className="w-6 h-6" />
                Descargar Certificado (PDF)
            </a>
            
            <div className="border-t border-slate-200/80 my-8 md:my-10"></div>

            <div className="space-y-5">
                 <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <h3 className="text-md font-semibold text-slate-500 mb-2 flex items-center gap-3"><User className="w-5 h-5 text-slate-400" /><span>Otorgado a</span></h3>
                    <p className="text-xl font-semibold text-slate-800">{certificate.recipient}</p>
                </div>
                <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <h3 className="text-md font-semibold text-slate-500 mb-2 flex items-center gap-3"><Calendar className="w-5 h-5 text-slate-400" /><span>Fecha de Expedición</span></h3>
                    <p className="text-xl font-semibold text-slate-800">{certificate.issueDate}</p>
                </div>
                <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <h3 className="text-md font-semibold text-slate-500 mb-2 flex items-center gap-3"><Hash className="w-5 h-5 text-slate-400" /><span>ID de Verificación</span></h3>
                    <p className="text-lg font-mono text-slate-700 bg-slate-100 py-2 px-3 rounded-md inline-block">{certificate.id}</p>
                </div>
            </div>
             <div className="text-center mt-12">
              <Link href="/">
                  <span className="text-primary hover:text-accent font-bold flex items-center justify-center gap-2 group text-base transition-colors">
                      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1.5"/> 
                      Volver al Portal
                  </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
