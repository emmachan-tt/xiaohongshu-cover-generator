'use client';

import React from 'react';
import { CoverTemplate } from '@/lib/templates';

interface TemplateCardProps {
  template: CoverTemplate;
  isSelected: boolean;
  onClick: () => void;
}

export default function TemplateCard({ template, isSelected, onClick }: TemplateCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full aspect-[3/4] rounded-xl overflow-hidden
        border-4 transition-all duration-200 hover:scale-105
        ${isSelected ? 'border-blue-500 ring-4 ring-blue-200' : 'border-gray-200 hover:border-gray-300'}
      `}
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center p-4"
        style={{ background: template.bgGradient }}
      >
        <div className="text-4xl mb-2">{template.preview}</div>
        <div
          className="text-lg font-bold mb-1"
          style={{ color: template.textColor }}
        >
          {template.name}
        </div>
        <div
          className="text-xs px-3 py-1 rounded-full"
          style={{
            backgroundColor: template.accentColor,
            color: '#ffffff',
          }}
        >
          {template.category}
        </div>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          ✓
        </div>
      )}
    </button>
  );
}
