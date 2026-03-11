import Link from 'next/link';
import { Certificate } from '@/lib/types';
import { Calendar, User, ArrowRight, ImageIcon, Hash } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

interface CertificateCardProps {
  certificate: Certificate;
}

function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), "d 'de' MMMM 'de' yyyy", { locale: es });
  } catch {
    return dateStr;
  }
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-slate-200/80 overflow-hidden transform hover:-translate-y-1 group flex flex-col">
      <Link href={`/certificate/${certificate.id}`} className="block bg-slate-100/80 aspect-video overflow-hidden">
        {certificate.previewImage ? (
          <img
            src={certificate.previewImage}
            alt={`Vista previa de ${certificate.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100">
            <ImageIcon className="w-12 h-12 mb-2" />
            <span className="text-xs">Sin vista previa</span>
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors mb-3">
          <Link href={`/certificate/${certificate.id}`}>{certificate.name}</Link>
        </h3>

        <div className="space-y-2 text-sm flex-1">
          <div className="flex items-center gap-3 text-slate-600">
            <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="font-medium truncate">{certificate.recipient}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="font-medium">{formatDate(certificate.issueDate)}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <Hash className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded-md">{certificate.id}</span>
          </div>
        </div>
      </div>

      <Link href={`/certificate/${certificate.id}`}
        className="block bg-slate-50 group-hover:bg-accent/10 p-4 text-center text-primary font-semibold group-hover:text-accent transition-all duration-300">
        <div className="flex items-center justify-center gap-2">
          <span>Ver Detalles del Certificado</span>
          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
