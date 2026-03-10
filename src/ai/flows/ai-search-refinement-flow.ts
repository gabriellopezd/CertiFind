'use server';
/**
 * @fileOverview An AI search assistant flow that interprets natural language queries
 * and suggests more precise search terms for certificate discovery.
 *
 * - aiSearchRefinement - A function that handles the AI-powered search query refinement process.
 * - AISearchRefinementInput - The input type for the aiSearchRefinement function.
 * - AISearchRefinementOutput - The return type for the aiSearchRefinement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISearchRefinementInputSchema = z.object({
  userQuery: z.string().describe('The natural language or incomplete search query provided by the user.'),
});
export type AISearchRefinementInput = z.infer<typeof AISearchRefinementInputSchema>;

const AISearchRefinementOutputSchema = z.object({
  suggestedSearchTerms: z.array(z.string()).describe('A list of 1 to 3 refined and more precise search terms based on the user query, suitable for directly searching a document repository.'),
});
export type AISearchRefinementOutput = z.infer<typeof AISearchRefinementOutputSchema>;

export async function aiSearchRefinement(input: AISearchRefinementInput): Promise<AISearchRefinementOutput> {
  return aiSearchRefinementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSearchRefinementPrompt',
  input: {schema: AISearchRefinementInputSchema},
  output: {schema: AISearchRefinementOutputSchema},
  prompt: `You are an AI search assistant designed to help users find certificates.
The user has provided the following natural language or incomplete search query: "{{{userQuery}}}".
Your task is to interpret this query and suggest 1 to 3 more precise search terms that could be used to find relevant certificates.
Focus on extracting key entities like full names, specific certificate types (e.g., "ISO 9001", "PMP"), unique identifiers, or specific keywords related to certificates.
Provide the suggestions in a JSON format matching the AISearchRefinementOutputSchema.`,
});

const aiSearchRefinementFlow = ai.defineFlow(
  {
    name: 'aiSearchRefinementFlow',
    inputSchema: AISearchRefinementInputSchema,
    outputSchema: AISearchRefinementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
