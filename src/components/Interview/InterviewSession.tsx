import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Camera, 
  Mic, 
  Square, 
  Play, 
  Pause,
  SkipForward,
  RotateCcw,
  Timer,
  Eye,
  AlertCircle
} from 'lucide-react';

const InterviewSession: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 minutes
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [hasPermissions, setHasPermissions] = useState(false);
  const [showConsent, setShowConsent] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: "Tell me about yourself and why you're interested in this role.",
      category: "Introduction",
      timeLimit: 180
    },
    {
      id: 2,
      text: "Describe a challenging project you worked on and how you overcame obstacles.",
      category: "Experience",
      timeLimit: 240
    },
    {
      id: 3,
      text: "Where do you see yourself in 5 years, and how does this role fit into your career goals?",
      category: "Goals",
      timeLimit: 180
    },
    {
      id: 4,
      text: "Tell me about a time when you had to work with a difficult team member.",
      category: "Teamwork",
      timeLimit: 200
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused, timeRemaining]);

  const requestPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setMediaStream(stream);
      setHasPermissions(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Camera and microphone access is required for the interview session.');
    }
  };

  const startRecording = () => {
    if (!mediaStream) return;
    
    const mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorderRef.current = mediaRecorder;
    
    mediaRecorder.start();
    setIsRecording(true);
    setTimeRemaining(currentQuestion.timeLimit);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  const nextQuestion = () => {
    stopRecording();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimeRemaining(questions[currentQuestionIndex + 1].timeLimit);
    } else {
      // Interview completed
      navigate('/interview/results');
    }
  };

  const retakeQuestion = () => {
    stopRecording();
    setTimeRemaining(currentQuestion.timeLimit);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleConsentAccept = () => {
    setShowConsent(false);
    requestPermissions();
  };

  if (showConsent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Privacy & Consent</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Camera Access</h3>
                <p className="text-gray-600 text-sm">We'll analyze your body language, eye contact, and facial expressions to provide feedback.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mic className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Microphone Access</h3>
                <p className="text-gray-600 text-sm">We'll transcribe your speech and analyze fluency, pace, and filler words.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Data Privacy</h3>
                <p className="text-gray-600 text-sm">All recordings are processed locally and securely. You can delete your data anytime.</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConsentAccept}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept & Start Interview
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!hasPermissions) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Camera Access Required</h2>
          <p className="text-gray-600 mb-6">Please allow camera and microphone access to continue with your interview.</p>
          <button
            onClick={requestPermissions}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Grant Permissions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Mock Interview Session
              </h1>
              <p className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                <Timer className="w-4 h-4 text-gray-600" />
                <span className={`font-mono text-lg ${
                  timeRemaining < 30 ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-900 relative">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Recording Indicator */}
                {isRecording && !isPaused && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Recording</span>
                  </div>
                )}

                {isPaused && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4">
                      <Pause className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-900 font-medium">Recording Paused</p>
                    </div>
                  </div>
                )}

                {/* Live Analysis Indicators */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Eye Contact: 85%
                  </div>
                  <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    Posture: Good
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="p-6 bg-gray-50 border-t">
                <div className="flex items-center justify-center space-x-4">
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Play className="w-5 h-5" />
                      <span>Start Recording</span>
                    </button>
                  ) : (
                    <div className="flex space-x-3">
                      <button
                        onClick={togglePause}
                        className="flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                        <span>{isPaused ? 'Resume' : 'Pause'}</span>
                      </button>
                      <button
                        onClick={stopRecording}
                        className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Square className="w-4 h-4" />
                        <span>Stop</span>
                      </button>
                    </div>
                  )}
                  
                  <button
                    onClick={retakeQuestion}
                    className="flex items-center space-x-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake</span>
                  </button>
                  
                  <button
                    onClick={nextQuestion}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span>Next Question</span>
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Question Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                  {currentQuestion.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion.text}
              </h2>
              <div className="text-sm text-gray-600">
                <p><strong>Time limit:</strong> {Math.floor(currentQuestion.timeLimit / 60)} minutes</p>
                <p className="mt-2"><strong>Tip:</strong> Structure your answer using the STAR method (Situation, Task, Action, Result).</p>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Session Progress</h3>
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div key={question.id} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      index < currentQuestionIndex 
                        ? 'bg-green-100 text-green-800' 
                        : index === currentQuestionIndex
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`text-sm ${
                      index === currentQuestionIndex ? 'font-medium text-gray-900' : 'text-gray-600'
                    }`}>
                      {question.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Feedback */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Live Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Eye Contact</span>
                  <span className="text-sm font-medium text-green-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Speech Rate</span>
                  <span className="text-sm font-medium text-blue-600">135 WPM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Filler Words</span>
                  <span className="text-sm font-medium text-yellow-600">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Confidence</span>
                  <span className="text-sm font-medium text-green-600">High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;