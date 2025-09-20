import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  TrendingUp, 
  Eye, 
  Mic, 
  MessageSquare,
  Download,
  Play,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const InterviewResults: React.FC = () => {
  const overallScore = 78;
  const scores = {
    content: 82,
    fluency: 75,
    nonverbal: 80,
    confidence: 76
  };

  const detailedMetrics = [
    { name: 'Content', score: scores.content, color: '#3B82F6' },
    { name: 'Fluency', score: scores.fluency, color: '#10B981' },
    { name: 'Non-verbal', score: scores.nonverbal, color: '#8B5CF6' },
    { name: 'Confidence', score: scores.confidence, color: '#F59E0B' }
  ];

  const radarData = [
    { subject: 'Content Quality', A: scores.content, fullMark: 100 },
    { subject: 'Fluency', A: scores.fluency, fullMark: 100 },
    { subject: 'Eye Contact', A: 85, fullMark: 100 },
    { subject: 'Body Language', A: 78, fullMark: 100 },
    { subject: 'Voice Clarity', A: 88, fullMark: 100 },
    { subject: 'Confidence', A: scores.confidence, fullMark: 100 }
  ];

  const highlights = [
    {
      time: '1:32',
      type: 'positive',
      title: 'Great eye contact',
      description: 'Maintained direct eye contact while explaining your experience'
    },
    {
      time: '2:45',
      type: 'warning',
      title: 'Filler words detected',
      description: 'Used "um" and "uh" - try pausing instead'
    },
    {
      time: '4:10',
      type: 'positive',
      title: 'Strong STAR structure',
      description: 'Clearly outlined situation, task, action, and result'
    },
    {
      time: '5:20',
      type: 'improvement',
      title: 'Posture adjustment needed',
      description: 'Slouching detected - maintain upright posture'
    }
  ];

  const improvements = [
    {
      category: 'Speech Delivery',
      suggestion: 'Practice speaking slower to reduce filler words. Your current pace of 165 WPM is slightly fast.',
      priority: 'high'
    },
    {
      category: 'Body Language',
      suggestion: 'Work on maintaining consistent posture throughout the interview.',
      priority: 'medium'
    },
    {
      category: 'Content Structure',
      suggestion: 'Great use of STAR method! Continue practicing with different scenarios.',
      priority: 'low'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Interview Results</h1>
              <p className="text-gray-600">Mock Interview Session • Software Engineer Role</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </button>
              <Link 
                to="/interview"
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Practice Again</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Score */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-4 ${getScoreColor(overallScore)}`}>
              {overallScore}%
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {getScoreLabel(overallScore)} Performance!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You demonstrated strong interview skills with clear communication and good structure. 
              Focus on reducing filler words and maintaining consistent body language for even better results.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Detailed Scores */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Breakdown</h3>
              <div className="space-y-4">
                {detailedMetrics.map((metric) => (
                  <div key={metric.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: metric.color }}
                      />
                      <span className="font-medium text-gray-900">{metric.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            backgroundColor: metric.color,
                            width: `${metric.score}%` 
                          }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 w-10">
                        {metric.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Score Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={detailedMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            {/* Radar Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Skills Radar</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" className="text-xs" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
                  <Radar 
                    name="Your Score" 
                    dataKey="A" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Key Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Eye Contact</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Mic className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">165</div>
                  <div className="text-sm text-gray-600">Words/Min</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">7</div>
                  <div className="text-sm text-gray-600">Filler Words</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">12m</div>
                  <div className="text-sm text-gray-600">Total Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timestamped Highlights */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Timestamped Highlights</h3>
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  {highlight.type === 'positive' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : highlight.type === 'warning' ? (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">{highlight.time}</span>
                    <span className="text-sm font-medium text-gray-900">{highlight.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
                <button className="flex-shrink-0 text-blue-600 hover:text-blue-500">
                  <Play className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Personalized Improvement Tips</h3>
          <div className="space-y-4">
            {improvements.map((improvement, index) => (
              <div key={index} className="p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{improvement.category}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    improvement.priority === 'high' 
                      ? 'bg-red-100 text-red-800'
                      : improvement.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {improvement.priority} priority
                  </span>
                </div>
                <p className="text-gray-600">{improvement.suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              to="/interview"
              className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all"
            >
              <Play className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-900">Practice Again</h4>
                <p className="text-sm text-gray-600">Try another mock interview</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
            
            <Link 
              to="/analytics"
              className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all"
            >
              <TrendingUp className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="font-medium text-gray-900">View Progress</h4>
                <p className="text-sm text-gray-600">Track your improvement</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
            
            <Link 
              to="/profile"
              className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all"
            >
              <Award className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="font-medium text-gray-900">Update Goals</h4>
                <p className="text-sm text-gray-600">Refine your target role</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewResults;