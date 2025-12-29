'use client';

import Link from 'next/link';
import { Book, Users, Zap, HelpCircle, Sun, Moon, BookOpen, ScrollText, BookMarked } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/stores/authStore';

const features = [
  {
    title: 'One2One Bible Study',
    description: "Partner Bible reading using Andrew Cornes' 7-question method. Perfect for discipleship and deep study.",
    icon: Users,
    href: '/one2one',
    color: 'one2one',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Scripture Memory',
    description: 'Challenge friends to memorize Bible verses together. Fill in the blanks and compete in real-time.',
    icon: Zap,
    href: '/memory',
    color: 'memory',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    title: 'Bible Trivia',
    description: 'Test your Bible knowledge with questions from Old Testament to New Testament and everything in between.',
    icon: HelpCircle,
    href: '/trivia',
    color: 'trivia',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'Systematic Theology',
    description: 'Master the Westminster Shorter Catechism with 107 foundational questions on Reformed doctrine.',
    icon: BookOpen,
    href: '/theology',
    color: 'theology',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Church History',
    description: 'Explore 21 theologians from Augustine to Machen, spanning Early Church to Modern Reformed with free resources.',
    icon: ScrollText,
    href: '/history',
    color: 'history',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Bible Study',
    description: 'Explore 1,189 chapter summaries with Reformed commentary insights. Discover Christ in every chapter of Scripture.',
    icon: BookMarked,
    href: '/bible-study',
    color: 'bible',
    gradient: 'from-teal-500 to-cyan-600',
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Home() {
  const { user, isInitialized } = useAuthStore();

  return (
    <div className="min-h-screen">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10">
              <Book className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Bible Study App
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Grow in faith together through structured Bible reading, scripture memorization, and fun trivia challenges.
          </p>

          {isInitialized && !user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" size="lg">Create Account</Button>
              </Link>
            </div>
          )}

          {user && (
            <p className="text-muted-foreground">
              Welcome back, <span className="font-medium text-foreground">{user.displayName}</span>!
            </p>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Choose Your Study Mode</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href} className="group">
                <Card
                  variant={feature.color as 'one2one' | 'memory' | 'trivia' | 'theology' | 'history' | 'bible'}
                  className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Get started
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats or Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div>
              <div className="text-3xl font-bold text-one2one mb-2">7</div>
              <div className="text-sm text-muted-foreground">One2One Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-memory mb-2">2,267</div>
              <div className="text-sm text-muted-foreground">Memory Verses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trivia mb-2">1,117</div>
              <div className="text-sm text-muted-foreground">Trivia Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-theology mb-2">107</div>
              <div className="text-sm text-muted-foreground">Catechism Q&A</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-history mb-2">21</div>
              <div className="text-sm text-muted-foreground">Theologians</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bible mb-2">1,189</div>
              <div className="text-sm text-muted-foreground">Chapter Summaries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>Bible texts from ESV, NIV, KJV, and NASB translations</p>
          <p className="mt-2">Built for growing in faith together</p>
        </div>
      </footer>
    </div>
  );
}
