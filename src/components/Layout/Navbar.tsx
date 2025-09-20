import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  User, 
  LogOut, 
  Settings, 
  BarChart3, 
  Camera,
  Shield
} from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  if (!user) return null;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InterviewAI</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/dashboard') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/interview" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/interview') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Start Interview
              </Link>
              <Link 
                to="/analytics" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/analytics') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-1" />
                Analytics
              </Link>
              {user.role === 'professional' && (
                <Link 
                  to="/admin" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/admin') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Shield className="w-4 h-4 inline mr-1" />
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Profile Settings</span>
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 transition-colors w-full text-left"
                >
                  <LogOut className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;