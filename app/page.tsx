'use client';

import React, { useState, useRef } from 'react';
import { Camera, Image, Palette, Sparkles, Download, Edit2 } from 'lucide-react';
import { platformSizes, styleTemplates, PlatformSize, StyleTemplate } from '@/lib/templates';
import CoverPreview from '@/components/CoverPreview';
import { exportToPNG } from '@/lib/canvas-utils';

interface GeneratedCover {
  id: number;
  title: string;
  subtitle: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
  fontSize: number;
  platform: PlatformSize;
  style: StyleTemplate;
}

export default function Home() {
  // 状态管理
  const [videoTitle, setVideoTitle] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformSize>(platformSizes[0]);
  const [selectedStyle, setSelectedStyle] = useState<StyleTemplate>(styleTemplates[0]);
  const [uploadedImages, setUploadedImages] = useState<{ keyframe?: string; person?: string; reference?: string }>({});
  const [generatedCovers, setGeneratedCovers] = useState<GeneratedCover[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editingCover, setEditingCover] = useState<number | null>(null);

  const previewRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // 处理文件上传
  const handleFileUpload = (type: 'keyframe' | 'person' | 'reference', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages((prev) => ({ ...prev, [type]: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // AI生成封面（模拟）
  const handleGenerateCovers = async () => {
    if (!videoTitle.trim()) {
      alert('请输入视频标题或关键词！');
      return;
    }

    setIsGenerating(true);

    // 模拟AI生成延迟
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 生成3-4个方案
    const variations = [
      { subtitle: '方案A', fontSize: 72, colorShift: 0 },
      { subtitle: '方案B', fontSize: 80, colorShift: 1 },
      { subtitle: '方案C', fontSize: 68, colorShift: 2 },
      { subtitle: '方案D', fontSize: 76, colorShift: 3 },
    ];

    const covers: GeneratedCover[] = variations.map((variant, index) => ({
      id: Date.now() + index,
      title: videoTitle,
      subtitle: `${variant.subtitle} - ${selectedStyle.name}`,
      bgGradient: styleTemplates[(styleTemplates.indexOf(selectedStyle) + variant.colorShift) % styleTemplates.length].bgGradient,
      textColor: selectedStyle.textColor,
      accentColor: selectedStyle.accentColor,
      fontSize: variant.fontSize,
      platform: selectedPlatform,
      style: selectedStyle,
    }));

    setGeneratedCovers(covers);
    setIsGenerating(false);
  };

  // 导出封面
  const handleExport = (coverId: number) => {
    const element = previewRefs.current[coverId];
    if (element) {
      const cover = generatedCovers.find((c) => c.id === coverId);
      exportToPNG(element, `${cover?.title}_${cover?.platform.name}_${coverId}.png`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* 头部 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎬 AI视频封面生成器
          </h1>
          <p className="text-gray-600 mt-1">一键生成多平台爆款封面 · 支持抖音/小红书/B站/YouTube</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 左侧：输入区 */}
          <div className="lg:col-span-1 space-y-6">
            {/* 1. 素材输入 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Edit2 className="w-5 h-5" />
                1. 素材输入
              </h2>

              {/* 视频标题 */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">视频标题/关键词 *</label>
                <textarea
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="例如：7天瘦10斤的减肥食谱"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              {/* 素材上传 */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">素材上传（可选）</label>

                {/* 视频关键帧 */}
                <div>
                  <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                    <Camera className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">上传视频关键帧</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload('keyframe', e)} className="hidden" />
                  </label>
                  {uploadedImages.keyframe && <img src={uploadedImages.keyframe} alt="关键帧" className="mt-2 w-full h-24 object-cover rounded-lg" />}
                </div>

                {/* 人物图 */}
                <div>
                  <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                    <Image className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">上传人物图</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload('person', e)} className="hidden" />
                  </label>
                  {uploadedImages.person && <img src={uploadedImages.person} alt="人物" className="mt-2 w-full h-24 object-cover rounded-lg" />}
                </div>

                {/* 风格参考图 */}
                <div>
                  <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                    <Palette className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-600">上传风格参考图</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload('reference', e)} className="hidden" />
                  </label>
                  {uploadedImages.reference && <img src={uploadedImages.reference} alt="参考" className="mt-2 w-full h-24 object-cover rounded-lg" />}
                </div>
              </div>
            </div>

            {/* 2. 平台尺寸 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">2. 选择平台尺寸</h2>
              <div className="grid grid-cols-2 gap-3">
                {platformSizes.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedPlatform.id === platform.id
                        ? 'border-purple-500 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{platform.icon}</div>
                    <div className="font-medium text-sm">{platform.name}</div>
                    <div className="text-xs text-gray-500">{platform.ratio}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. 风格选择 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">3. 选择风格</h2>
              <div className="grid grid-cols-2 gap-3">
                {styleTemplates.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedStyle.id === style.id ? 'border-purple-500 bg-purple-50 shadow-md' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{style.icon}</div>
                    <div className="font-medium text-sm">{style.name}</div>
                    <div className="text-xs text-gray-500">{style.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. 生成按钮 */}
            <button
              onClick={handleGenerateCovers}
              disabled={isGenerating || !videoTitle.trim()}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {isGenerating ? '正在生成中...' : 'AI一键生成封面'}
            </button>
          </div>

          {/* 右侧：生成结果 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">生成结果</h2>

              {generatedCovers.length === 0 ? (
                <div className="text-center py-20">
                  <Sparkles className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">填写信息后点击"AI一键生成封面"</p>
                  <p className="text-sm text-gray-400 mt-2">将为您生成3-4个不同风格的封面方案</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {generatedCovers.map((cover) => (
                    <div key={cover.id} className="group relative">
                      {/* 封面预览 */}
                      <div className="relative overflow-hidden rounded-xl shadow-md border-2 border-gray-200 group-hover:border-purple-500 transition-colors">
                        <div
                          ref={(el) => {
                            previewRefs.current[cover.id] = el;
                          }}
                          style={{ transform: 'scale(0.35)', transformOrigin: 'top left' }}
                        >
                          <CoverPreview
                            title={cover.title}
                            subtitle={cover.subtitle}
                            bgGradient={cover.bgGradient}
                            textColor={cover.textColor}
                            accentColor={cover.accentColor}
                            fontSize={cover.fontSize}
                            layout="center"
                          />
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      <div className="mt-3 flex gap-2">
                        <button
                          onClick={() => handleExport(cover.id)}
                          className="flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          下载
                        </button>
                        <button
                          onClick={() => setEditingCover(cover.id)}
                          className="py-2 px-4 border-2 border-gray-300 rounded-lg hover:border-purple-500 transition-colors flex items-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          编辑
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
