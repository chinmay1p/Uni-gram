import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Share2, Users, Instagram, Menu } from 'lucide-react';

const Startscreen = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden" style={{position:'absolute',left:'0'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 backdrop-blur-sm bg-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Instagram className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">Uni-Gram</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              
              <Link to="/login" className="text-white/90 hover:text-white transition-colors">Login</Link>
            </div>
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Your Academic Social Platform
          </h1>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Connect with fellow students, share notes, and learn through educational content in a social media environment.
          </p>
          
          <div className="flex gap-6 justify-center mb-16">
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 bg-purple-800 text-white rounded-full font-semibold hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg border border-white/20"
            >
              Sign In
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Universities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80">Study Notes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-white mb-2">5K+</div>
              <div className="text-white/80">Daily Posts</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all border border-white/20">
            <div className="bg-purple-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Share Notes</h3>
            <p className="text-white/80">Exchange study materials and resources with your academic network</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all border border-white/20">
            <div className="bg-purple-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Video className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Educational Reels</h3>
            <p className="text-white/80">Learn complex topics through engaging short-form video content</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all border border-white/20">
            <div className="bg-purple-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Instant Sharing</h3>
            <p className="text-white/80">Share knowledge and collaborate with peers in real-time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all border border-white/20">
            <div className="bg-purple-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Student Community</h3>
            <p className="text-white/80">Connect and grow with a community of passionate learners</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Startscreen;