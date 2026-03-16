import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import registry from '@/lib/registry.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new NextResponse('ID de certificado no especificado', { status: 400 });
  }

  const certificate = registry.certificates.find(c => c.id === id);

  if (!certificate) {
    return new NextResponse('Certificado no encontrado', { status: 404 });
  }

  const safeFileName = path.basename(certificate.fileName);
  const certsDir = path.join(process.cwd(), 'public', 'certificates');
  const filePath = path.join(certsDir, safeFileName);

  if (path.resolve(filePath).indexOf(path.resolve(certsDir)) !== 0) {
    return new NextResponse('Acceso no autorizado', { status: 403 });
  }

  if (!fs.existsSync(filePath)) {
    console.error(`File not found at path: ${filePath}`);
    return new NextResponse('Archivo de certificado no encontrado en el servidor', { status: 500 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  const headers = new Headers();
  const encodedFileName = encodeURIComponent(safeFileName);
  headers.append('Content-Disposition', `attachment; filename="${safeFileName}"; filename*=UTF-8''${encodedFileName}`);
  headers.append('Content-Type', 'application/pdf');

  return new NextResponse(fileBuffer as any, {
    status: 200,
    headers,
  });
}
