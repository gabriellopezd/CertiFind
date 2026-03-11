import Link from 'next/link';
import { Certificate } from '@/lib/types';
import { Calendar, User, ArrowRight, FileText, ImageIcon } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-slate-200/80 overflow-hidden transform hover:-translate-y-1 group">
      <Link href={`/certificate/${certificate.id}`} legacyBehavior>
        <a className="block bg-slate-100/80 aspect-video overflow-hidden">
          {certificate.previewImage ? (
            <img 
              src={certificate.previewImage} 
              alt={`Vista previa de ${certificate.name}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100">
              <ImageIcon className="w-12 h-12 mb-2"/>
              <span className="text-xs">Sin vista previa</span>
            </div>
          )}
        </a>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
            <div>
                <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                   <Link href={`/certificate/${certificate.id}`}>{certificate.name}</Link>
                </h3>
            </div>
        </div>
        
        <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-slate-600">
                <User className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span className="font-medium truncate">{certificate.recipient}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
                <Calendar className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span className="font-medium">{certificate.issueDate}</span>
            </div>
        </div>
      </div>
      <Link href={`/certificate/${certificate.id}`} legacyBehavior>
        <a className="block bg-slate-50 group-hover:bg-accent/10 p-4 text-center text-primary font-semibold group-hover:text-accent transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
                <span>Ver Detalles del Certificado</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </a>
      </Link>
    </div>
  );
}
