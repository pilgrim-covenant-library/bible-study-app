'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Users, ChevronRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { ONE2ONE_QUESTIONS } from '@/types';

const STUDY_PLANS = [
  {
    id: 'cornes-book1',
    name: 'One2One Book 1',
    author: 'Andrew Cornes',
    description: 'John 13-17, Philippians, and selected Psalms',
    sessions: 24,
  },
  {
    id: 'cornes-book2',
    name: 'One2One Book 2',
    author: 'Andrew Cornes',
    description: 'Matthew, 1 Thessalonians, and Genesis',
    sessions: 24,
  },
  {
    id: 'custom',
    name: 'Custom Study',
    author: 'You',
    description: 'Choose your own passage to study together',
    sessions: null,
  },
];

export default function One2OnePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customPassage, setCustomPassage] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-one2one/10">
              <Users className="h-5 w-5 text-one2one" />
            </div>
            <div>
              <h1 className="font-semibold">One2One Bible Study</h1>
              <p className="text-sm text-muted-foreground">Partner Bible reading</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-8">
          <Card variant="one2one">
            <CardHeader>
              <CardTitle>The One2One Method</CardTitle>
              <CardDescription>
                A simple, reproducible way to read the Bible with someone else using 7 questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {ONE2ONE_QUESTIONS.map((q) => (
                  <div key={q.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-one2one/10 text-one2one flex items-center justify-center text-sm font-medium">
                      {q.id}
                    </div>
                    <div>
                      <p className="font-medium">{q.title}</p>
                      <p className="text-sm text-muted-foreground">{q.instruction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Study Plans */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Choose a Study Plan</h2>
          <div className="grid gap-4">
            {STUDY_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={`cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'ring-2 ring-one2one border-one2one'
                    : 'hover:border-one2one/40'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-one2one/10">
                        <BookOpen className="h-5 w-5 text-one2one" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>By {plan.author}</span>
                          {plan.sessions && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {plan.sessions} sessions
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPlan === plan.id
                        ? 'border-one2one bg-one2one'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedPlan === plan.id && (
                        <CheckCircle className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Custom Passage Input */}
        {selectedPlan === 'custom' && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Enter Your Passage</h2>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Bible Reference
                    </label>
                    <Input
                      placeholder="e.g., John 3:1-21 or Romans 8:28-39"
                      value={customPassage}
                      onChange={(e) => setCustomPassage(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Enter a passage reference in the format: Book Chapter:Verse-Verse
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Start Button */}
        <section>
          <Button
            variant="one2one"
            size="lg"
            className="w-full"
            disabled={!selectedPlan || (selectedPlan === 'custom' && !customPassage)}
          >
            Start Session
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
          <p className="text-sm text-center text-muted-foreground mt-4">
            You can study alone or invite a partner to join
          </p>
        </section>
      </main>
    </div>
  );
}
