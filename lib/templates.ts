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

export const templates: CoverTemplate[] = [
  {
    id: 'modern-pink',
    name: '时尚粉',
    category: '美妆',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textColor: '#ffffff',
    accentColor: '#ffd700',
    layout: 'center',
    preview: '🌸',
  },
  {
    id: 'fresh-green',
    name: '清新绿',
    category: '生活',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    textColor: '#ffffff',
    accentColor: '#ffeb3b',
    layout: 'top',
    preview: '🌿',
  },
  {
    id: 'tech-blue',
    name: '科技蓝',
    category: '知识',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    textColor: '#ffffff',
    accentColor: '#ff6b6b',
    layout: 'bottom',
    preview: '💡',
  },
  {
    id: 'warm-orange',
    name: '温暖橙',
    category: '美食',
    bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    textColor: '#ffffff',
    accentColor: '#ff5722',
    layout: 'center',
    preview: '🍊',
  },
  {
    id: 'elegant-purple',
    name: '优雅紫',
    category: '时尚',
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    textColor: '#333333',
    accentColor: '#9c27b0',
    layout: 'left',
    preview: '💜',
  },
  {
    id: 'sunset-red',
    name: '夕阳红',
    category: '旅行',
    bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    textColor: '#ffffff',
    accentColor: '#ff4081',
    layout: 'center',
    preview: '🌅',
  },
  {
    id: 'ocean-blue',
    name: '海洋蓝',
    category: '运动',
    bgGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    textColor: '#ffffff',
    accentColor: '#00bcd4',
    layout: 'bottom',
    preview: '🌊',
  },
  {
    id: 'forest-green',
    name: '森林绿',
    category: '健康',
    bgGradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    textColor: '#2e7d32',
    accentColor: '#4caf50',
    layout: 'top',
    preview: '🌲',
  },
  {
    id: 'golden-yellow',
    name: '金色梦',
    category: '商业',
    bgGradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    textColor: '#333333',
    accentColor: '#ff9800',
    layout: 'center',
    preview: '✨',
  },
  {
    id: 'romantic-rose',
    name: '浪漫玫瑰',
    category: '情感',
    bgGradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    textColor: '#ffffff',
    accentColor: '#e91e63',
    layout: 'left',
    preview: '🌹',
  },
];

export const defaultTemplate = templates[0];
