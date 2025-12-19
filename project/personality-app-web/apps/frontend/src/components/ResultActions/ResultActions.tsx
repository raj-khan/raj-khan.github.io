'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toPng } from 'html-to-image';
import { useTestStore } from '@/store/testStore';

interface ResultActionsProps {
  personalityCode: string;
  personalityName: string;
}

export function ResultActions({ personalityCode, personalityName }: ResultActionsProps) {
  const router = useRouter();
  const [copying, setCopying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/result?type=${personalityCode}`
    : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy link');
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const element = document.getElementById('result-card');
      if (element) {
        const dataUrl = await toPng(element, { 
          quality: 0.95,
          pixelRatio: 2 
        });
        
        const link = document.createElement('a');
        link.download = `personality-${personalityCode}.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Failed to download:', error);
      alert('Failed to download image');
    }
    setDownloading(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm a ${personalityName}!`,
          text: `I just discovered I'm a ${personalityCode} - ${personalityName} personality type!`,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

  const handleRetake = () => {
    if (window.confirm('Are you sure you want to retake the test? Your current results will be lost.')) {
      // Reset the store
      const { resetTest } = useTestStore.getState();
      resetTest();
      router.push('/test');
    }
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Share Your Results
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Share button (mobile) */}
        {typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined' && (
          <button
            onClick={handleShare}
            className="btn-primary bg-gradient-to-r from-analyst to-diplomat text-white flex flex-col items-center py-3"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-xs">Share</span>
          </button>
        )}

        {/* Copy link */}
        <button
          onClick={handleCopyLink}
          className="btn-secondary border-gray-300 hover:border-analyst flex flex-col items-center py-3"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">{copying ? 'Copied!' : 'Copy Link'}</span>
        </button>

        {/* Download */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="btn-secondary border-gray-300 hover:border-diplomat flex flex-col items-center py-3 disabled:opacity-50"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-xs">{downloading ? 'Saving...' : 'Download'}</span>
        </button>

        {/* Retake */}
        <button
          onClick={handleRetake}
          className="btn-secondary border-gray-300 hover:border-red-400 flex flex-col items-center py-3"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-xs">Retake</span>
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Download your result as an image to share on social media
      </p>
    </div>
  );
}
