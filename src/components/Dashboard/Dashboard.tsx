import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Camera, 
  TrendingUp, 
  Clock, 
  Award,
  Play,
  BarChart3,
  Calendar,
  Target
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const recentSessions = [
    {
      id: '1',
      role: 'Software Engineer',
      score: 78,
      date: '2 days ago',
      duration: '25 min',
      status: 'completed'
    },
    {
      id: '2',
      role: 'Product Manager',
      score: 85,
      date: '1 week ago',
      duration: '30 min',
      status: 'completed'
    },
    {
      id: '3',
      role: 'Data Scientist',
      score: 72,
      date: '2 weeks ago',
      duration: '28 min',
      status: 'completed'
    }
  ];

  const stats = {
    totalSessions: 15,
    averageScore: 78,
    totalTime: '6h 45m',
    improvement: '+12%'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Ready to practice your interview skills? Let's get you prepared for success.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link 
          to="/interview"
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Start Interview</h3>
              <p className="text-blue-100">Begin a new practice session</p>
            </div>
            <Play className="w-8 h-8" />
          </div>
        </Link>

        <Link 
          to="/analytics"
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">View Analytics</h3>
              <p className="text-gray-600">Track your progress</p>
            </div>
            <BarChart3 className="w-8 h-8 text-blue-600" />
          </div>
        </Link>

        <Link 
          to="/profile"
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Update Profile</h3>
              <p className="text-gray-600">Customize your experience</p>
            </div>
            <Target className="w-8 h-8 text-green-600" />
          </div>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Sessions</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalSessions}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Average Score</p>
              <p className="text-3xl font-bold text-gray-900">{stats.averageScore}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Practice Time</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalTime}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Improvement</p>
              <p className="text-3xl font-bold text-green-600">{stats.improvement}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sessions */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Recent Sessions</h2>
            <Link 
              to="/analytics" 
              className="text-blue-600 hover:text-blue-500 font-medium text-sm"
            >
              View all
            </Link>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {recentSessions.map((session) => (
            <div key={session.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{session.role}</h3>
                    <p className="text-sm text-gray-500 flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {session.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {session.duration}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{session.score}%</span>
                      <div className={`w-2 h-2 rounded-full ${
                        session.score >= 80 ? 'bg-green-500' : 
                        session.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    </div>
                    <p className="text-xs text-gray-500 capitalize">{session.status}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-500 font-medium text-sm">
                    View Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tips */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 Tips to Improve Your Performance
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Practice Eye Contact</h4>
            <p className="text-sm text-gray-600">
              Look directly at your camera to maintain eye contact with the interviewer.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Reduce Filler Words</h4>
            <p className="text-sm text-gray-600">
              Practice speaking slowly and pause instead of using "um" or "uh".
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Use STAR Method</h4>
            <p className="text-sm text-gray-600">
              Structure answers with Situation, Task, Action, and Result for clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;