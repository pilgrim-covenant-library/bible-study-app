'use client';

import { useState } from 'react';
import { ChevronDown, Lightbulb, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import type { ChapterQuestion } from '@/data/one2one-questions';

interface QuestionCardProps {
  question: ChapterQuestion;
  questionNumber: number;
  totalQuestions: number;
  response: string;
  onResponseChange: (response: string) => void;
  autoFocus?: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  response,
  onResponseChange,
  autoFocus = false,
}: QuestionCardProps) {
  const [showTips, setShowTips] = useState(false);

  // Determine if this is an action question (no response needed)
  const isActionQuestion = question.id === 1 || question.id === 7; // Read Aloud or Prayer

  return (
    <Card variant="one2one" className="overflow-hidden">
      <CardHeader className="pb-3">
        {/* Question header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {/* Question number badge */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-one2one text-white flex items-center justify-center font-semibold">
              {question.id}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{question.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Question {questionNumber} of {totalQuestions}
              </p>
            </div>
          </div>

          {/* Focus verse badge if present */}
          {question.focusVerse && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-one2one/10 text-one2one text-xs font-medium">
              <BookOpen className="h-3 w-3" />
              {question.focusVerse}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Instruction */}
        <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-one2one">
          <p className="text-foreground">{question.instruction}</p>
        </div>

        {/* Tips accordion */}
        {question.tips && question.tips.length > 0 && (
          <div className="border rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setShowTips(!showTips)}
              className="w-full flex items-center justify-between p-3 text-sm font-medium bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-one2one">
                <Lightbulb className="h-4 w-4" />
                Helpful Tips
              </div>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  showTips ? 'rotate-180' : ''
                }`}
              />
            </button>
            {showTips && (
              <div className="p-3 border-t bg-background">
                <ul className="space-y-2">
                  {question.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-one2one mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Response area - only for non-action questions */}
        {!isActionQuestion ? (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Response</label>
            <textarea
              value={response}
              onChange={(e) => onResponseChange(e.target.value)}
              placeholder="Write your thoughts here..."
              autoFocus={autoFocus}
              className="w-full min-h-[150px] p-4 rounded-lg border bg-background resize-y focus:outline-none focus:ring-2 focus:ring-one2one focus:border-transparent placeholder:text-muted-foreground"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{response.length} characters</span>
              {response.length > 0 && (
                <span className="text-one2one">Auto-saved</span>
              )}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-lg bg-one2one/5 border border-one2one/20">
            <p className="text-sm text-muted-foreground text-center">
              {question.id === 1
                ? 'Take turns reading the passage aloud together. When done, move to the next question.'
                : 'Spend time in prayer together. When finished, you can complete the session.'}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Compact version for progress display
interface QuestionProgressProps {
  questions: ChapterQuestion[];
  currentIndex: number;
  responses: { questionId: number; response: string }[];
  onQuestionSelect: (index: number) => void;
}

export function QuestionProgress({
  questions,
  currentIndex,
  responses,
  onQuestionSelect,
}: QuestionProgressProps) {
  const hasResponse = (questionId: number) => {
    const response = responses.find(r => r.questionId === questionId);
    return response && response.response.trim().length > 0;
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {questions.map((q, index) => (
        <button
          key={q.id}
          type="button"
          onClick={() => onQuestionSelect(index)}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
            index === currentIndex
              ? 'bg-one2one text-white scale-110 shadow-md'
              : hasResponse(q.id)
              ? 'bg-one2one/20 text-one2one'
              : 'bg-muted text-muted-foreground hover:bg-one2one/10'
          }`}
          title={q.title}
        >
          {q.id}
        </button>
      ))}
    </div>
  );
}
