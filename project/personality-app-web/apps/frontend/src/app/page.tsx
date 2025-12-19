'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-analyst/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-diplomat/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sentinel/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-explorer/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Main content */}
      <div className={`max-w-4xl w-full space-y-8 relative z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-analyst via-diplomat to-explorer bg-clip-text text-transparent animate-fade-in">
            Discover Your True Self
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto text-balance">
            Unlock insights into your personality with our comprehensive assessment
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="card group hover:scale-105 transition-transform">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-analyst/10 rounded-lg group-hover:bg-analyst/20 transition-colors">
                <svg className="w-6 h-6 text-analyst" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Quick & Accurate</h3>
                <p className="text-gray-600 text-sm">Complete the test in just 5-10 minutes with scientifically-backed questions</p>
              </div>
            </div>
          </div>

          <div className="card group hover:scale-105 transition-transform">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-diplomat/10 rounded-lg group-hover:bg-diplomat/20 transition-colors">
                <svg className="w-6 h-6 text-diplomat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">16 Unique Types</h3>
                <p className="text-gray-600 text-sm">Explore detailed profiles across 4 role categories</p>
              </div>
            </div>
          </div>

          <div className="card group hover:scale-105 transition-transform">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-sentinel/10 rounded-lg group-hover:bg-sentinel/20 transition-colors">
                <svg className="w-6 h-6 text-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">100% Private</h3>
                <p className="text-gray-600 text-sm">Anonymous testing, no account required, your results stay with you</p>
              </div>
            </div>
          </div>

          <div className="card group hover:scale-105 transition-transform">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-explorer/10 rounded-lg group-hover:bg-explorer/20 transition-colors">
                <svg className="w-6 h-6 text-explorer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Share Results</h3>
                <p className="text-gray-600 text-sm">Generate beautiful photocards to share your personality type</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center space-y-4">
          <Link href="/test">
            <button className="btn-primary bg-gradient-to-r from-analyst to-diplomat text-white text-lg px-12 py-4 shadow-xl hover:shadow-2xl">
              Start Your Journey
            </button>
          </Link>
          <p className="text-sm text-gray-500">
            Takes about 5-10 minutes • No registration needed
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">24</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">16</div>
            <div className="text-sm text-gray-600">Personality Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-800">4</div>
            <div className="text-sm text-gray-600">Role Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}
