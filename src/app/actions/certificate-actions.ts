'use server';

import { searchCertificates, Certificate } from '@/lib/certificates';
import { aiSearchRefinement } from '@/ai/flows/ai-search-refinement-flow';

export async function searchAction(query: string): Promise<Certificate[]> {
  return await searchCertificates(query);
}

export async function getSuggestionsAction(query: string): Promise<string[]> {
  try {
    const response = await aiSearchRefinement({ userQuery: query });
    return response.suggestedSearchTerms;
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    return [];
  }
}