import React from 'react';
import { Download, Calendar, User, Hash } from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  recipient: string;
  issueDate: string;
  fileName: string;
  description?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const downloadPath = `/certificates/${certificate.fileName}`;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-blue-600 mb-3">
          <Hash className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">{certificate.id}</span>
        </div>
        
        <h2 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
          {certificate.name}
        </h2>
        
        {certificate.description && (
          <p className="text-slate-500 text-sm mb-4 line-clamp-2">
            {certificate.description}
          </p>
        )}

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-slate-600">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">{certificate.recipient}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{certificate.issueDate}</span>
          </div>
        </div>
      </div>

      <a
        href={downloadPath}
        download={certificate.fileName}
        className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300"
      >
        <Download className="w-4 h-4" />
        Descargar PDF
      </a>
    </div>
  );
};

export default CertificateCard;