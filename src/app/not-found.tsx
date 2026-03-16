import Link from 'next/link';
import { Home, Search, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-red-50 p-6 rounded-full ring-8 ring-red-50/50">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Certificado no encontrado</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Lo sentimos, el certificado que buscas no existe en nuestra base de datos o el ID es incorrecto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold py-3 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Search className="w-5 h-5" />
            Nueva búsqueda
          </Link>
        </div>
      </div>
    </div>
  );
}
