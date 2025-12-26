'use client';

// Test All 107 Resume Modal
// Shown when user returns to practice page with an active session

import { Clock, PlayCircle, RefreshCw, CheckSquare, MessageSquare } from 'lucide-react';
import { Test107Session } from '@/stores/test107SessionStore';

interface Test107ResumeModalProps {
  isOpen: boolean;
  session: Test107Session;
  onResume: () => void;
  onStartFresh: () => void;
  onClose: () => void;
}

export function Test107ResumeModal({
  isOpen,
  session,
  onResume,
  onStartFresh,
  onClose,
}: Test107ResumeModalProps) {
  if (!isOpen) return null;

  // Calculate time since last activity
  const lastUpdated = new Date(session.lastUpdatedAt);
  const now = new Date();
  const diffMs = now.getTime() - lastUpdated.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  let timeAgo: string;
  if (diffDays > 0) {
    timeAgo = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    timeAgo = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffMins > 0) {
    timeAgo = `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
  } else {
    timeAgo = 'just now';
  }

  const phase1Progress = Math.round((session.phase1Results.length / 107) * 100);
  const phase2Progress = Math.round((session.phase2Results.length / 107) * 100);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-theology to-blue-600 p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <PlayCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Resume Test All 107?</h2>
              <p className="text-white/80 text-sm">You have an active session</p>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="p-5">
          <div className="bg-muted/50 rounded-xl p-4 mb-5">
            {/* Current Position */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {session.currentPhase === 'mcq' ? (
                  <CheckSquare className="h-5 w-5 text-theology" />
                ) : (
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                )}
                <span className="font-medium">
                  {session.currentPhase === 'mcq' ? 'Phase 1 (MCQ)' : 'Phase 2 (Free Response)'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-theology">
                  Q{session.currentQuestionIndex + 1}
                </span>
                <span className="text-muted-foreground text-sm"> of 107</span>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">Phase 1 Complete</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-theology"
                      style={{ width: `${phase1Progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-mono">{session.phase1Results.length}/107</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">Phase 2 Complete</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${phase2Progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-mono">{session.phase2Results.length}/107</span>
                </div>
              </div>
            </div>

            {/* Scores if available */}
            {(session.phase1Score > 0 || session.phase2Score > 0) && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {session.phase1Score > 0 && (
                  <div className="text-center">
                    <span className={`text-lg font-bold ${
                      session.phase1Score >= 80 ? 'text-green-600' :
                      session.phase1Score >= 60 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {Math.round(session.phase1Score)}%
                    </span>
                    <div className="text-xs text-muted-foreground">Phase 1 Score</div>
                  </div>
                )}
                {session.phase2Score > 0 && (
                  <div className="text-center">
                    <span className={`text-lg font-bold ${
                      session.phase2Score >= 80 ? 'text-green-600' :
                      session.phase2Score >= 60 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {Math.round(session.phase2Score)}%
                    </span>
                    <div className="text-xs text-muted-foreground">Phase 2 Score</div>
                  </div>
                )}
              </div>
            )}

            {/* Last Activity */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Last active: {timeAgo}</span>
            </div>

            {/* Loop count if applicable */}
            {session.loopCount > 0 && (
              <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Currently on loop {session.loopCount + 1}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onStartFresh}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              <RefreshCw className="h-4 w-4" />
              Start Fresh
            </button>
            <button
              onClick={onResume}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-theology text-white hover:bg-theology/90 transition-colors text-sm font-medium"
            >
              <PlayCircle className="h-4 w-4" />
              Resume Session
            </button>
          </div>

          {/* Cancel link */}
          <button
            onClick={onClose}
            className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancel (go back to mode selection)
          </button>
        </div>
      </div>
    </div>
  );
}
