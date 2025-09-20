import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Mic, 
  Brain, 
  Eye, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'AI-Powered Video Analysis',
      description: 'Advanced computer vision analyzes your body language, posture, and facial expressions in real-time.'
    },
    {
      icon: Mic,
      title: 'Speech & Fluency Analysis',
      description: 'Our AI detects filler words, speech pace, and provides detailed transcription with timestamps.'
    },
    {
      icon: Brain,
      title: 'Content Quality Scoring',
      description: 'Semantic analysis evaluates your answers using STAR method detection and keyword coverage.'
    },
    {
      icon: Eye,
      title: 'Eye Contact Tracking',
      description: 'Monitor and improve your eye contact patterns for more confident interview performance.'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track your progress over time with comprehensive scoring across multiple dimensions.'
    },
    {
      icon: Shield,
      title: 'Privacy-First Design',
      description: 'Your data stays secure with explicit consent controls and local processing options.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'InterviewAI helped me identify and fix my nervous habits. I landed my dream job after just 3 weeks of practice!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager at Microsoft',
      content: 'The detailed feedback on my body language was a game-changer. I felt so much more confident in my real interviews.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Data Scientist at Amazon',
      content: 'The STAR method coaching and content analysis helped me structure my answers perfectly. Highly recommend!',
      rating: 5,
      avatar: 'ED'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Practice Sessions' },
    { number: '89%', label: 'Success Rate' },
    { number: '2,500+', label: 'Happy Users' },
    { number: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">InterviewAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/login"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Interview Training Platform
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Master Your Interview Skills with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI-Powered</span> Training
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get personalized feedback on your speech, body language, and content quality. 
                Practice with confidence and land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Practice
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Overall Score</span>
                    <span className="text-2xl font-bold text-green-600">85%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Eye Contact</span>
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Speech Fluency</span>
                      <span className="text-sm font-semibold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">Live Analysis</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">Confidence: High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Technology for Interview Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with proven interview techniques 
              to give you comprehensive, actionable feedback.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How InterviewAI Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes and see improvement in days
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Setup Your Profile</h3>
              <p className="text-gray-600">
                Tell us about your target role and experience level to get personalized questions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practice Interviews</h3>
              <p className="text-gray-600">
                Answer questions while our AI analyzes your speech, body language, and content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Detailed Feedback</h3>
              <p className="text-gray-600">
                Receive comprehensive reports with timestamped insights and improvement tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Users
            </h2>
            <p className="text-xl text-gray-600">
              See how InterviewAI helped professionals land their dream jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who've improved their interview skills with InterviewAI.
            Start your free practice session today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Practice
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InterviewAI</span>
              </div>
              <p className="text-gray-400">
                AI-powered mock interview platform helping professionals succeed in their career goals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div><Link to="/features" className="hover:text-white transition-colors">Features</Link></div>
                <div><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></div>
                <div><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div><Link to="/about" className="hover:text-white transition-colors">About</Link></div>
                <div><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></div>
                <div><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></div>
                <div><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></div>
                <div><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InterviewAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;