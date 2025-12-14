// 平台尺寸配置
export interface PlatformSize {
  id: string;
  name: string;
  ratio: string;
  width: number;
  height: number;
  icon: string;
}

export const platformSizes: PlatformSize[] = [
  { id: 'douyin', name: '抖音', ratio: '9:16', width: 1080, height: 1920, icon: '📱' },
  { id: 'xiaohongshu', name: '小红书', ratio: '3:4', width: 1080, height: 1440, icon: '📕' },
  { id: 'bilibili', name: 'B站', ratio: '16:9', width: 1920, height: 1080, icon: '📺' },
  { id: 'youtube', name: 'YouTube', ratio: '16:9', width: 1920, height: 1080, icon: '▶️' },
  { id: 'weixin', name: '微信视频号', ratio: '1:1', width: 1080, height: 1080, icon: '💬' },
];

// 风格模板配置
export interface StyleTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
  keywords: string[];
  icon: string;
}

export const styleTemplates: StyleTemplate[] = [
  {
    id: 'ai-smart',
    name: 'AI智能生成',
    category: '智能',
    description: 'AI根据内容自动匹配最佳风格',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textColor: '#ffffff',
    accentColor: '#ffd700',
    keywords: ['智能', 'AI', '自动'],
    icon: '🤖',
  },
  {
    id: 'douyin-hot',
    name: '抖音爆款',
    category: '抖音',
    description: '高对比度，吸睛标题，适合抖音',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    textColor: '#ffffff',
    accentColor: '#ffeb3b',
    keywords: ['爆款', '吸睛', '高对比'],
    icon: '🔥',
  },
  {
    id: 'xhs-fresh',
    name: '小红书清新',
    category: '小红书',
    description: '温柔配色，生活感，适合小红书',
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    textColor: '#333333',
    accentColor: '#ff6b9d',
    keywords: ['清新', '温柔', '生活'],
    icon: '🌸',
  },
  {
    id: 'bili-anime',
    name: 'B站二次元',
    category: 'B站',
    description: '鲜艳色彩，动漫风，适合B站',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    textColor: '#ffffff',
    accentColor: '#ff4081',
    keywords: ['二次元', '动漫', '鲜艳'],
    icon: '🎮',
  },
  {
    id: 'beauty',
    name: '美妆模板',
    category: '美妆',
    description: '优雅高级，适合美妆内容',
    bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    textColor: '#ffffff',
    accentColor: '#9c27b0',
    keywords: ['美妆', '化妆', '护肤'],
    icon: '💄',
  },
  {
    id: 'food',
    name: '美食模板',
    category: '美食',
    description: '温暖食欲，适合美食内容',
    bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    textColor: '#ffffff',
    accentColor: '#ff5722',
    keywords: ['美食', '料理', '食谱'],
    icon: '🍱',
  },
  {
    id: 'knowledge',
    name: '知识模板',
    category: '知识',
    description: '专业可信，适合知识科普',
    bgGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    textColor: '#ffffff',
    accentColor: '#00bcd4',
    keywords: ['知识', '科普', '教程'],
    icon: '📚',
  },
  {
    id: 'vlog',
    name: 'Vlog模板',
    category: 'Vlog',
    description: '真实自然，适合日常Vlog',
    bgGradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    textColor: '#333333',
    accentColor: '#ff9800',
    keywords: ['vlog', '日常', '生活'],
    icon: '📹',
  },
];

// 封面模板接口（保留原有功能）
export interface CoverTemplate {
  id: string;
  name: string;
  category: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
  layout: 'center' | 'top' | 'bottom' | 'left';
  preview: string;
}

export const templates: CoverTemplate[] = styleTemplates.map((style) => ({
  id: style.id,
  name: style.name,
  category: style.category,
  bgGradient: style.bgGradient,
  textColor: style.textColor,
  accentColor: style.accentColor,
  layout: 'center',
  preview: style.icon,
}));

export const defaultTemplate = templates[0];
