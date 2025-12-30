/**
 * AI Summarizer for Commentary Text
 * Uses Ollama with Qwen3 to create focused summaries of each commentator's insights
 */

export interface SummaryRequest {
  commentator: string;
  bookName: string;
  chapter: number;
  fullText: string;
}

export interface SummaryResult {
  summary: string;
  wordCount: number;
}

const SYSTEM_PROMPT = `You summarize Bible commentaries in exactly 200-300 words. Write in third person. Use modern English. Include theological insights and practical applications. Do not use headers or bullet points. Write a flowing paragraph.`;

async function callOllama(prompt: string, systemPrompt: string): Promise<string> {
  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'qwen3:4b',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      stream: false,
      options: {
        temperature: 0.7,
        num_predict: 1024,
        num_ctx: 8192,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.status}`);
  }

  const data = await response.json();

  // Extract message content
  let result = data.message?.content || '';

  // Remove <think>...</think> blocks if present (Qwen3 thinking mode)
  result = result.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

  // Remove markdown headers if present
  result = result.replace(/^#+\s+.*$/gm, '').trim();

  return result;
}

export async function summarizeCommentary(request: SummaryRequest): Promise<SummaryResult> {
  const { commentator, bookName, chapter, fullText } = request;

  // Skip if text is too short
  if (fullText.length < 200) {
    return {
      summary: fullText,
      wordCount: fullText.split(/\s+/).length,
    };
  }

  const userPrompt = `Write a 200-300 word summary of ${commentator}'s commentary on ${bookName} chapter ${chapter}.

Include: theological insights, practical applications, and Christ connections.

Here is the commentary to summarize:

${fullText.slice(0, 8000)}`;

  try {
    const summary = await callOllama(userPrompt, SYSTEM_PROMPT);

    return {
      summary: summary.trim(),
      wordCount: summary.trim().split(/\s+/).length,
    };
  } catch (error) {
    console.error(`  Error summarizing ${commentator} on ${bookName} ${chapter}:`, error);
    // Fallback to truncated text
    const fallback = fullText.slice(0, 1500).trim();
    return {
      summary: fallback,
      wordCount: fallback.split(/\s+/).length,
    };
  }
}

// Batch summarize with rate limiting
export async function summarizeWithDelay(
  request: SummaryRequest,
  delayMs: number = 100
): Promise<SummaryResult> {
  const result = await summarizeCommentary(request);
  await new Promise(resolve => setTimeout(resolve, delayMs));
  return result;
}
