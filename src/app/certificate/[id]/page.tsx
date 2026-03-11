import Link from 'next/link';
import { notFound } from 'next/navigation';
import registry from '@/lib/registry.json';
import { Download, Calendar, User, Hash, ArrowLeft, FileText, ChevronRight, Home } from 'lucide-react';
import type { Metadata } from 'next';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

interface PageProps {
  params: Promise<{ id: string }>;
}

function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), "d 'de' MMMM 'de' yyyy", { locale: es });
  } catch {
    return dateStr;
  }
}

export async function generateStaticParams() {
  return registry.certificates.map((cert) => ({ id: cert.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const cert = registry.certificates.find(c => c.id === id);
  if (!cert) return { title: 'Certificado no encontrado' };
  return {
    title: `${cert.name} — ${cert.recipient} | CertiFind`,
    description: `Verifica y descarga el certificado oficial de ${cert.recipient} para el curso "${cert.name}". ID: ${cert.id}.`,
  };
}

export default async function CertificateDetailPage({ params }: PageProps) {
  const { id } = await params;
  const certificate = registry.certificates.find(cert => cert.id === id);

  if (!certificate) {
    notFound();
  }

  const downloadPath = `/certificates/${certificate.fileName}`;

  return (
    <div className="min-h-screen bg-background font-sans text-slate-800">



      {/* ── MAIN ──────────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Preview image */}
          <div className="lg:col-span-3">
            {certificate.previewImage && (
              <div className="w-full bg-white p-5 rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-200/80 sticky top-28">
                <img
                  src={certificate.previewImage}
                  alt={`Vista previa de ${certificate.name}`}
                  className="w-full h-full object-contain rounded-xl border border-slate-200/60"
                />
              </div>
            )}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-accent mb-4">
              <FileText className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-widest">Certificado Oficial</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              {certificate.name}
            </h1>

            {certificate.description && (
              <p className="text-slate-600 text-lg mb-8">{certificate.description}</p>
            )}

            <a
              href={`/api/download?file=${encodeURIComponent(certificate.fileName)}`}
              download={certificate.fileName}
              className="flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full text-lg transform hover:-translate-y-0.5"
            >
              <Download className="w-6 h-6" />
              Descargar Certificado (PDF)
            </a>

            <div className="border-t border-slate-200/80 my-8 md:my-10" />

            {/* Metadata cards */}
            <div className="space-y-4">
              <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 mb-1.5 flex items-center gap-2">
                  <User className="w-4 h-4 text-slate-400" />Otorgado a
                </h3>
                <p className="text-xl font-semibold text-slate-800">{certificate.recipient}</p>
              </div>

              <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 mb-1.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />Fecha de Expedición
                </h3>
                <p className="text-xl font-semibold text-slate-800">{formatDate(certificate.issueDate)}</p>
              </div>

              <div className="bg-white/80 p-5 rounded-xl border border-slate-200/80 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-500 mb-1.5 flex items-center gap-2">
                  <Hash className="w-4 h-4 text-slate-400" />ID de Verificación
                </h3>
                <p className="text-lg font-mono text-slate-700 bg-slate-100 py-2 px-3 rounded-md inline-block">
                  {certificate.id}
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/"
                className="text-primary hover:text-accent font-bold flex items-center justify-center gap-2 group text-base transition-colors">
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1.5" />
                Volver al Portal
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
