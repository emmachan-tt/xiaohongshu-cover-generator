'use client';

import React, { useState, useRef } from 'react';
import { templates, defaultTemplate } from '@/lib/templates';
import { exportToPNG } from '@/lib/canvas-utils';
import CoverPreview from '@/components/CoverPreview';
import TemplateCard from '@/components/TemplateCard';
import ColorPicker from '@/components/ColorPicker';
import { Sparkles, Download, FileText, Palette, Type } from 'lucide-react';

type Platform = '小红书' | '抖音/TikTok' | 'B站' | 'YouTube';

export default function Home() {
  const [platform, setPlatform] = useState<Platform>('小红书');
  const [selectedTemplate, setSelectedTemplate] = useState(defaultTemplate);
  const [title, setTitle] = useState('5分钟学会AI封面制作');
  const [subtitle, setSubtitle] = useState('零基础也能轻松上手');
  const [bgGradient, setBgGradient] = useState(defaultTemplate.bgGradient);
  const [textColor, setTextColor] = useState(defaultTemplate.textColor);
  const [accentColor, setAccentColor] = useState(defaultTemplate.accentColor);
  const [fontSize, setFontSize] = useState(72);
  const coverRef = useRef<HTMLDivElement>(null);

  const handleTemplateSelect = (template: typeof defaultTemplate) => {
    setSelectedTemplate(template);
    setBgGradient(template.bgGradient);
    setTextColor(template.textColor);
    setAccentColor(template.accentColor);
  };

  const handleExport = async () => {
    if (coverRef.current) {
      await exportToPNG(coverRef.current, `${platform}-封面-${Date.now()}.png`);
    }
  };

  const platforms: Platform[] = ['小红书', '抖音/TikTok', 'B站', 'YouTube'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Gemini 3.0 爆款封面辅助工具</h1>
            </div>
            <div className="flex gap-2">
              {platforms.map((p) => (
                <button
                  key={p}
                  onClick={() => setPlatform(p)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    platform === p
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧：编辑区域 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 模板选择卡片 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">选择模板</h2>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    isSelected={selectedTemplate.id === template.id}
                    onClick={() => handleTemplateSelect(template)}
                  />
                ))}
              </div>
            </div>

            {/* 文字编辑卡片 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">编辑文字</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    主标题 ({title.length}/30)
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value.slice(0, 30))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="输入吸引眼球的标题"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    副标题 ({subtitle.length}/50)
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value.slice(0, 50))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="输入补充说明文字"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    字体大小: {fontSize}px
                  </label>
                  <input
                    type="range"
                    min="40"
                    max="120"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* 颜色定制卡片 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">自定义配色</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">背景渐变</label>
                  <input
                    type="text"
                    value={bgGradient}
                    onChange={(e) => setBgGradient(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <ColorPicker label="文字颜色" value={textColor} onChange={setTextColor} />
                <ColorPicker label="强调色" value={accentColor} onChange={setAccentColor} />
              </div>
            </div>
          </div>

          {/* 右侧：预览和操作 */}
          <div className="space-y-6">
            {/* 预览卡片 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">实时预览</h2>
              <div className="relative overflow-hidden rounded-xl border-2 border-gray-200">
                <div className="transform scale-[0.28] origin-top-left" style={{ width: '357%', height: '357%' }}>
                  <CoverPreview
                    ref={coverRef}
                    title={title}
                    subtitle={subtitle}
                    bgGradient={bgGradient}
                    textColor={textColor}
                    accentColor={accentColor}
                    fontSize={fontSize}
                    layout={selectedTemplate.layout}
                  />
                </div>
              </div>
            </div>

            {/* 生成按钮 */}
            <button
              onClick={handleExport}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              立即生成封面
            </button>

            {/* 使用说明 */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">使用说明</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 选择心仪的模板风格</li>
                <li>• 输入标题和副标题文字</li>
                <li>• 调整字体大小和颜色</li>
                <li>• 点击"生成封面"导出PNG</li>
                <li>• 封面尺寸：1080×1440px</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
