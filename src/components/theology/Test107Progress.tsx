'use client';

// Test All 107 Progress Component
// Shows phase indicator, question counter, and progress bars for both phases

import { CheckCircle, CheckSquare, MessageSquare, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import { Test107Phase } from '@/stores/test107SessionStore';

interface Test107ProgressProps {
  phase: Test107Phase;
  currentQuestion: number;  // 1-107
  phase1Completed: number;
  phase2Completed: number;
  phase1Score: number;      // 0-100 average
  phase2Score: number;      // 0-100 average
  loopCount: number;
}

export function Test107Progress({
  phase,
  currentQuestion,
  phase1Completed,
  phase2Completed,
  phase1Score,
  phase2Score,
  loopCount,
}: Test107ProgressProps) {
  const phase1Complete = phase1Completed === 107;
  const phase2Complete = phase2Completed === 107;

  return (
    <div className="bg-card border rounded-xl p-4 mb-6 shadow-sm">
      {/* Phase Indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        <div
          className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-all ${
            phase === 'mcq'
              ? 'bg-theology text-white shadow-md'
              : phase1Complete
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          <CheckSquare className="h-4 w-4" />
          <span className="text-xs sm:text-sm font-medium">Phase 1: MCQ</span>
          {phase1Complete && <CheckCircle className="h-4 w-4" />}
        </div>

        <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />

        <div
          className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full transition-all ${
            phase === 'free_response'
              ? 'bg-blue-600 text-white shadow-md'
              : phase2Complete
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          <MessageSquare className="h-4 w-4" />
          <span className="text-xs sm:text-sm font-medium">Phase 2: Free Response</span>
          {phase2Complete && <CheckCircle className="h-4 w-4" />}
        </div>
      </div>

      {/* Question Counter */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2">
          <span className="text-4xl font-bold bg-gradient-to-r from-theology to-blue-600 bg-clip-text text-transparent">
            Q{currentQuestion}
          </span>
          <span className="text-lg text-muted-foreground">of 107</span>
        </div>
        {loopCount > 0 && (
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <RotateCcw className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
              Loop {loopCount + 1}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bars */}
      <div className="space-y-3">
        {/* Phase 1 Progress */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-muted-foreground font-medium">Phase 1 Progress</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">{phase1Completed}/107</span>
              {phase1Completed > 0 && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                  phase1Score >= 80
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : phase1Score >= 60
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {Math.round(phase1Score)}%
                </span>
              )}
            </div>
          </div>
          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out ${
                phase1Complete
                  ? 'bg-gradient-to-r from-green-500 to-green-400'
                  : 'bg-gradient-to-r from-theology to-theology/80'
              }`}
              style={{ width: `${(phase1Completed / 107) * 100}%` }}
            />
          </div>
        </div>

        {/* Phase 2 Progress */}
        <div>
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-muted-foreground font-medium">Phase 2 Progress</span>
            <div className="flex items-center gap-2">
              <span className="font-mono">{phase2Completed}/107</span>
              {phase2Completed > 0 && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                  phase2Score >= 80
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : phase2Score >= 60
                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}>
                  {Math.round(phase2Score)}%
                </span>
              )}
            </div>
          </div>
          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ease-out ${
                phase2Complete
                  ? 'bg-gradient-to-r from-green-500 to-green-400'
                  : 'bg-gradient-to-r from-blue-600 to-blue-500'
              }`}
              style={{ width: `${(phase2Completed / 107) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Overall Progress Summary (shown when both phases have progress) */}
      {(phase1Completed > 0 || phase2Completed > 0) && (
        <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Overall Progress</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-theology via-blue-500 to-green-500"
                style={{ width: `${((phase1Completed + phase2Completed) / 214) * 100}%` }}
              />
            </div>
            <span className="font-mono text-muted-foreground">
              {Math.round(((phase1Completed + phase2Completed) / 214) * 100)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Completion summary component shown after completing all 107 in both phases
interface Test107CompletionProps {
  phase1Score: number;
  phase2Score: number;
  phase1Results: { score: number; questionNumber: number }[];
  phase2Results: { score: number; questionNumber: number }[];
  loopCount: number;
  onLoop: () => void;
  onFinish: () => void;
}

export function Test107Completion({
  phase1Score,
  phase2Score,
  phase1Results,
  phase2Results,
  loopCount,
  onLoop,
  onFinish,
}: Test107CompletionProps) {
  const overallScore = (phase1Score + phase2Score) / 2;

  // Count perfect answers
  const phase1Perfect = phase1Results.filter(r => r.score === 100).length;
  const phase2Perfect = phase2Results.filter(r => r.score >= 95).length; // 95%+ for free response

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-theology via-blue-600 to-green-500 p-6 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur mb-4">
            <Trophy className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Congratulations!</h2>
          <p className="text-white/80 text-sm">
            You&apos;ve completed all 107 questions in both phases!
          </p>
          {loopCount > 0 && (
            <p className="text-white/60 text-xs mt-1">
              Loop {loopCount + 1} complete
            </p>
          )}
        </div>

        {/* Score Summary */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-theology/10 rounded-xl">
              <div className="text-3xl font-bold text-theology">
                {Math.round(phase1Score)}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">Phase 1 (MCQ)</div>
              <div className="text-[10px] text-muted-foreground">
                {phase1Perfect}/107 perfect
              </div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">
                {Math.round(phase2Score)}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">Phase 2 (Free Response)</div>
              <div className="text-[10px] text-muted-foreground">
                {phase2Perfect}/107 near-perfect
              </div>
            </div>
          </div>

          {/* Overall Score */}
          <div className="text-center p-4 bg-gradient-to-r from-theology/5 via-blue-500/5 to-green-500/5 rounded-xl mb-6">
            <div className="text-sm text-muted-foreground mb-1">Overall Score</div>
            <div className={`text-4xl font-bold ${
              overallScore >= 80
                ? 'text-green-600'
                : overallScore >= 60
                ? 'text-amber-600'
                : 'text-red-600'
            }`}>
              {Math.round(overallScore)}%
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onFinish}
              className="flex-1 px-4 py-3 rounded-xl border border-border hover:bg-muted transition-colors font-medium"
            >
              Finish
            </button>
            <button
              onClick={onLoop}
              className="flex-1 px-4 py-3 rounded-xl bg-theology text-white hover:bg-theology/90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Loop Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
