import React from 'react';
import { 
  TrendingUp, 
  Award, 
  Clock, 
  Target,
  Calendar,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Analytics: React.FC = () => {
  const progressData = [
    { date: '2024-01-15', overall: 65, content: 60, fluency: 70, nonverbal: 68, confidence: 62 },
    { date: '2024-01-22', overall: 68, content: 65, fluency: 72, nonverbal: 70, confidence: 65 },
    { date: '2024-01-29', overall: 72, content: 70, fluency: 75, nonverbal: 74, confidence: 69 },
    { date: '2024-02-05', overall: 75, content: 73, fluency: 77, nonverbal: 76, confidence: 73 },
    { date: '2024-02-12', overall: 78, content: 80, fluency: 75, nonverbal: 80, confidence: 76 },
  ];

  const practiceStats = [
    { month: 'Jan', sessions: 4, avgScore: 68 },
    { month: 'Feb', sessions: 6, avgScore: 76 },
  ];

  const skillBreakdown = [
    { skill: 'Content Quality', current: 82, target: 85, improvement: '+8%' },
    { skill: 'Speech Fluency', current: 75, target: 80, improvement: '+5%' },
    { skill: 'Eye Contact', current: 85, target: 90, improvement: '+12%' },
    { skill: 'Body Language', current: 78, target: 85, improvement: '+10%' },
    { skill: 'Confidence', current: 76, target: 80, improvement: '+7%' },
  ];

  const recentSessions = [
    {
      id: '1',
      date: '2024-02-12',
      role: 'Software Engineer',
      duration: '25 min',
      score: 78,
      improvement: '+3'
    },
    {
      id: '2',
      date: '2024-02-08',
      role: 'Product Manager',
      duration: '30 min',
      score: 75,
      improvement: '+2'
    },
    {
      id: '3',
      date: '2024-02-03',
      role: 'Data Scientist',
      duration: '28 min',
      score: 73,
      improvement: '+5'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
        <p className="text-gray-600 mt-2">Track your interview skills progress and identify areas for improvement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Current Score</p>
              <p className="text-3xl font-bold text-gray-900">78%</p>
              <p className="text-green-600 text-sm flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Practice Sessions</p>
              <p className="text-3xl font-bold text-gray-900">15</p>
              <p className="text-blue-600 text-sm flex items-center mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                6 this month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Practice Time</p>
              <p className="text-3xl font-bold text-gray-900">6h 45m</p>
              <p className="text-purple-600 text-sm flex items-center mt-1">
                <Clock className="w-4 h-4 mr-1" />
                Average: 27 min/session
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Goal Progress</p>
              <p className="text-3xl font-bold text-gray-900">78%</p>
              <p className="text-orange-600 text-sm flex items-center mt-1">
                <Target className="w-4 h-4 mr-1" />
                Target: 85%
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Progress Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
              <YAxis domain={[0, 100]} />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value: number, name: string) => [`${value}%`, name]}
              />
              <Line type="monotone" dataKey="overall" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="content" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="fluency" stroke="#8B5CF6" strokeWidth={2} />
              <Line type="monotone" dataKey="nonverbal" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Practice Volume */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Practice Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={practiceStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sessions" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skill Breakdown */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Skill Development</h3>
        <div className="space-y-6">
          {skillBreakdown.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.skill}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      {skill.current}% / {skill.target}%
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      {skill.improvement}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${skill.current}%` }}
                    />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gray-400 h-2 rounded-full" 
                      style={{ width: `${skill.target}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Current</span>
                  <span>Target</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sessions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentSessions.map((session) => (
            <div key={session.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{session.role}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(session.date).toLocaleDateString()} • {session.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{session.score}%</span>
                      <span className="text-green-600 text-sm font-medium">
                        {session.improvement}
                      </span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Performance Insights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Strengths</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Consistent improvement in eye contact (+12%)</li>
              <li>• Strong content structure using STAR method</li>
              <li>• Good practice frequency (6 sessions this month)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Focus Areas</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Reduce filler words in speech delivery</li>
              <li>• Work on maintaining consistent posture</li>
              <li>• Practice speaking at a slightly slower pace</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;