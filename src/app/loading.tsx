import { Award } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-200 animate-fade-in">
          <Award className="w-12 h-12 text-primary animate-bounce" />
        </div>
      </div>
      <p className="mt-6 text-slate-500 font-medium tracking-wide animate-pulse">
        Cargando certificados...
      </p>
    </div>
  );
}
