'use client';

import React, { useState } from 'react';
import { Download, Sparkles } from 'lucide-react';

// 简化版模板数据
const templates = [
  {
    id: 'beauty-01',
    name: '清新淡妆',
    category: 'beauty',
    colors: {
      background: ['#FFE4E8', '#FFF5F7'],
      text: '#333333',
      accent: '#FF2442',
    },
    fontSize: { title: 72, subtitle: 36 },
  },
  {
    id: 'fashion-01',
    name: '日常穿搭',
    category: 'fashion',
    colors: {
      background: ['#FFF5EE', '#FFE4B5'],
      text: '#333333',
      accent: '#FF6B6B',
    },
    fontSize: { title: 56, subtitle: 32 },
  },
];

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [title, setTitle] = useState('在这里输入标题');
  const [subtitle, setSubtitle] = useState('添加副标题（可选）');
  const [customColors, setCustomColors] = useState(selectedTemplate.colors);

  const handleExport = async () => {
    alert('导出功能需要安装依赖后才能使用。请先运行：npm install');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">小红书封面生成器</h1>
              <p className="text-sm text-gray-500">3分钟制作爆款封面</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* 左侧编辑区 */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">文字内容</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    标题
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="输入封面标题"
                    maxLength={30}
                  />
                  <p className="text-xs text-gray-400 mt-1">{title.length}/30字</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    副标题（可选）
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="添加副标题"
                    maxLength={50}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleExport}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              导出封面（PNG）
            </button>
          </div>

          {/* 中间预览区 */}
          <div className="col-span-5 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-6">实时预览</h2>
            
            <div className="flex justify-center">
              <div style={{ transform: 'scale(0.35)', transformOrigin: 'top center' }}>
                <div
                  style={{
                    width: '1080px',
                    height: '1440px',
                    background: `linear-gradient(180deg, ${customColors.background[0]}, ${customColors.background[1]})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                  className="shadow-2xl"
                >
                  <div className="text-center px-16">
                    <h1
                      style={{
                        fontSize: '72px',
                        color: customColors.text,
                        fontWeight: 'bold',
                        lineHeight: '1.3',
                      }}
                    >
                      {title}
                    </h1>
                    {subtitle && (
                      <p
                        style={{
                          fontSize: '36px',
                          color: customColors.accent,
                          fontWeight: '500',
                          marginTop: '24px',
                        }}
                      >
                        {subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧模板库 */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">选择模板</h2>
              
              <div className="space-y-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template);
                      setCustomColors(template.colors);
                    }}
                    className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedTemplate.id === template.id
                        ? 'ring-4 ring-red-500 scale-105'
                        : 'hover:scale-105 shadow-sm'
                    }`}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '160px',
                        background: `linear-gradient(180deg, ${template.colors.background[0]}, ${template.colors.background[1]})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <p style={{ fontSize: '18px', color: template.colors.text, fontWeight: 'bold' }}>
                        {template.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📚 使用说明</h2>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">选择模板</h3>
              <p className="text-sm text-gray-600">从右侧选择喜欢的模板</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">编辑内容</h3>
              <p className="text-sm text-gray-600">输入标题和副标题</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">实时预览</h3>
              <p className="text-sm text-gray-600">查看封面效果</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">4️⃣</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">一键导出</h3>
              <p className="text-sm text-gray-600">下载PNG图片</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
