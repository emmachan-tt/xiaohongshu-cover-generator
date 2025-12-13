'use client';

import React from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  presets?: string[];
}

export default function ColorPicker({ label, value, onChange, presets }: ColorPickerProps) {
  const defaultPresets = [
    '#667eea', '#764ba2', '#f093fb', '#f5576c',
    '#4facfe', '#00f2fe', '#fa709a', '#fee140',
    '#a8edea', '#fed6e3', '#ff9a9e', '#fecfef',
    '#30cfd0', '#330867', '#d299c2', '#fef9d7',
    '#ffecd2', '#fcb69f', '#ff6e7f', '#bfe9ff'
  ];

  const colorList = presets || defaultPresets;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-12 rounded border-2 border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="#000000"
        />
      </div>
      <div className="grid grid-cols-10 gap-2 mt-3">
        {colorList.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className="w-8 h-8 rounded border-2 border-gray-200 hover:scale-110 transition-transform"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}
