'use client';

import React, { forwardRef } from 'react';

interface CoverPreviewProps {
  title: string;
  subtitle: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
  fontSize: number;
  layout: 'center' | 'top' | 'bottom' | 'left';
}

const CoverPreview = forwardRef<HTMLDivElement, CoverPreviewProps>(
  ({ title, subtitle, bgGradient, textColor, accentColor, fontSize, layout }, ref) => {
    const getLayoutClasses = () => {
      switch (layout) {
        case 'top':
          return 'justify-start pt-20';
        case 'bottom':
          return 'justify-end pb-20';
        case 'left':
          return 'justify-center items-start pl-16';
        default:
          return 'justify-center items-center';
      }
    };

    return (
      <div
        ref={ref}
        className={`w-[1080px] h-[1440px] flex flex-col ${getLayoutClasses()} px-16`}
        style={{ background: bgGradient }}
      >
        <div className="text-center max-w-[900px]">
          <h1
            className="font-bold mb-6 leading-tight break-words"
            style={{
              color: textColor,
              fontSize: `${fontSize}px`,
            }}
          >
            {title || '点击输入标题'}
          </h1>
          {subtitle && (
            <div
              className="inline-block px-8 py-4 rounded-2xl text-2xl font-medium"
              style={{
                backgroundColor: accentColor,
                color: '#ffffff',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    );
  }
);

CoverPreview.displayName = 'CoverPreview';

export default CoverPreview;
