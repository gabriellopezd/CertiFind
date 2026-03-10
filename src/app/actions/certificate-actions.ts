'use server';

import { searchCertificates, Certificate } from '@/lib/certificates';

export async function searchAction(query: string): Promise<Certificate[]> {
  return await searchCertificates(query);
}
