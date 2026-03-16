import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');

  if (!file) {
    return new NextResponse('Archivo no especificado', { status: 400 });
  }

  // Prevenir directory traversal vulnerabilities (ej. buscar archivos fuera de la carpeta con ../..)
  const normalizedFile = path.normalize(file).replace(/^(\.\.(\\/|\\|$))+/, '');
  const filePath = path.join(process.cwd(), 'public', 'certificates', normalizedFile);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Certificado no encontrado', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  // Forzar la descarga en el navegador con el nombre original del archivo
  const headers = new Headers();
  const encodedFileName = encodeURIComponent(normalizedFile);
  headers.append('Content-Disposition', `attachment; filename="${normalizedFile}"; filename*=UTF-8''${encodedFileName}`);
  headers.append('Content-Type', 'application/pdf');

  return new NextResponse(fileBuffer as any, {
    status: 200,
    headers,
  });
}
