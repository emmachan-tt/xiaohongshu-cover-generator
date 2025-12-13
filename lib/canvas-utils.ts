import html2canvas from 'html2canvas';

export interface CoverConfig {
  title: string;
  subtitle: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
  fontSize: number;
  layout: 'center' | 'top' | 'bottom' | 'left';
}

export const exportToPNG = async (element: HTMLElement, filename: string = 'cover.png') => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      width: 1080,
      height: 1440,
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = filename;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  } catch (error) {
    console.error('导出失败:', error);
    throw error;
  }
};

export const validateText = (text: string, maxLength: number): boolean => {
  return text.length <= maxLength;
};

export const getTextLength = (text: string): number => {
  return text.length;
};
