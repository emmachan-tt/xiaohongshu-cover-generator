import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '小红书封面生成器 - 3分钟制作爆款封面',
  description: '免费在线小红书封面设计工具，支持多种模板，一键生成1080x1440标准尺寸封面图',
  keywords: '小红书封面,封面生成器,小红书设计,图片制作',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
