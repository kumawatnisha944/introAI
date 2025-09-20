import React, { useState } from 'react';
import { 
  Users, 
  FileQuestion, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'questions' | 'users' | 'analytics' | 'settings'>('questions');
  
  const questionBanks = [
    {
      id: '1',
      name: 'Software Engineer - Entry Level',
      role: 'Software Engineer',
      questionCount: 15,
      isActive: true,
      lastUpdated: '2024-02-10'
    },
    {
      id: '2',
      name: 'Product Manager - Mid Level',
      role: 'Product Manager',
      questionCount: 12,
      isActive: true,
      lastUpdated: '2024-02-08'
    },
    {
      id: '3',
      name: 'Data Scientist - Senior',
      role: 'Data Scientist',
      questionCount: 18,
      isActive: false,
      lastUpdated: '2024-02-05'
    },
  ];

  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'student',
      sessionsCount: 15,
      avgScore: 78,
      lastActive: '2024-02-12'
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      role: 'professional',
      sessionsCount: 8,
      avgScore: 85,
      lastActive: '2024-02-11'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'student',
      sessionsCount: 22,
      avgScore: 72,
      lastActive: '2024-02-10'
    },
  ];

  const analytics = {
    totalUsers: 1247,
    totalSessions: 8932,
    avgSessionScore: 74.2,
    topPerformingRole: 'Product Manager'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage questions, users, and system settings</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'questions', name: 'Question Banks', icon: FileQuestion },
            { id: 'users', name: 'Users', icon: Users },
            { id: 'analytics', name: 'Analytics', icon: BarChart3 },
            { id: 'settings', name: 'Settings', icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 pb-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Question Banks Tab */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Question Banks</h2>
              <p className="text-gray-600">Manage interview questions by role and difficulty</p>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add Question Bank</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search question banks..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {questionBanks.map((bank) => (
                <div key={bank.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${bank.isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <div>
                        <h3 className="font-medium text-gray-900">{bank.name}</h3>
                        <p className="text-sm text-gray-500">
                          {bank.questionCount} questions • Last updated: {new Date(bank.lastUpdated).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
              <p className="text-gray-600">View and manage user accounts and activity</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Export Data
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{analytics.totalUsers}</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{analytics.totalSessions}</div>
              <div className="text-sm text-gray-600">Total Sessions</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{analytics.avgSessionScore}%</div>
              <div className="text-sm text-gray-600">Avg Score</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-2xl font-bold text-gray-900">{analytics.topPerformingRole}</div>
              <div className="text-sm text-gray-600">Top Role</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sessions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'professional' 
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.sessionsCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.avgScore}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.lastActive).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">System Analytics</h2>
            <p className="text-gray-600">Overview of platform usage and performance metrics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,247</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                  <div className="text-green-600 text-sm mt-1">+12% this month</div>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">8,932</div>
                  <div className="text-sm text-gray-600">Total Sessions</div>
                  <div className="text-green-600 text-sm mt-1">+18% this month</div>
                </div>
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">74.2%</div>
                  <div className="text-sm text-gray-600">Avg Score</div>
                  <div className="text-blue-600 text-sm mt-1">+2.1% this month</div>
                </div>
                <FileQuestion className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.2</div>
                  <div className="text-sm text-gray-600">Avg Sessions/User</div>
                  <div className="text-green-600 text-sm mt-1">+0.3 this month</div>
                </div>
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">New user registered</p>
                  <p className="text-sm text-gray-600">sarah.johnson@example.com joined the platform</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Question bank updated</p>
                  <p className="text-sm text-gray-600">Software Engineer - Senior level questions modified</p>
                </div>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">High scoring session</p>
                  <p className="text-sm text-gray-600">User achieved 95% score in Product Manager interview</p>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">System Settings</h2>
            <p className="text-gray-600">Configure platform settings and preferences</p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Model Configuration</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Speech-to-Text Model</label>
                    <p className="text-sm text-gray-600">Currently using Whisper v3</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Configure
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Content Analysis</label>
                    <p className="text-sm text-gray-600">Sentence-BERT embeddings</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Configure
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Computer Vision</label>
                    <p className="text-sm text-gray-600">MediaPipe for body language analysis</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Data Retention Period</label>
                    <p className="text-sm text-gray-600">How long to keep user recordings</p>
                  </div>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Consent Requirements</label>
                    <p className="text-sm text-gray-600">Require explicit consent for video analysis</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Max Session Duration</label>
                    <p className="text-sm text-gray-600">Maximum length for interview sessions</p>
                  </div>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-gray-900">Question Timer</label>
                    <p className="text-sm text-gray-600">Default time limit per question</p>
                  </div>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>2 minutes</option>
                    <option>3 minutes</option>
                    <option>5 minutes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;