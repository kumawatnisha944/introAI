export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'professional';
  experience: string;
  targetRole: string;
  avatar?: string;
  createdAt: Date;
}

export interface InterviewSession {
  id: string;
  userId: string;
  questionBank: string;
  questions: Question[];
  answers: Answer[];
  scores: Scores;
  feedback: Feedback;
  duration: number;
  createdAt: Date;
  status: 'completed' | 'in-progress' | 'abandoned';
}

export interface Question {
  id: string;
  text: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number;
  keywords: string[];
  modelAnswer?: string;
}

export interface Answer {
  questionId: string;
  transcript: string;
  audioUrl: string;
  videoUrl: string;
  duration: number;
  timestamps: Timestamp[];
}

export interface Timestamp {
  time: number;
  event: 'filler' | 'pause' | 'eye_contact_lost' | 'posture_issue' | 'gesture';
  description: string;
}

export interface Scores {
  overall: number;
  content: number;
  fluency: number;
  nonverbal: number;
  confidence: number;
  breakdown: {
    keywordCoverage: number;
    starMethod: number;
    fillerCount: number;
    speechRate: number;
    eyeContact: number;
    posture: number;
  };
}

export interface Feedback {
  strengths: string[];
  improvements: string[];
  tips: string[];
  highlightTimestamps: Array<{
    time: number;
    issue: string;
    suggestion: string;
  }>;
}

export interface QuestionBank {
  id: string;
  name: string;
  role: string;
  questions: Question[];
  isActive: boolean;
}