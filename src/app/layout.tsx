import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: '이서정 | Web & UI/UX Designer',
  description:
    '웹 및 UI/UX 디자인을 전문으로 하며, 콘텐츠 기획과 사진 촬영을 함께하는 디자이너 이서정입니다.',
  keywords: ['UI/UX Designer', 'Web Designer', '포트폴리오', '이서정', '웹 디자인', '사용자 경험'],
  authors: [{ name: '이서정' }],
  openGraph: {
    title: '이서정 | Web & UI/UX Designer',
    description:
      '웹 및 UI/UX 디자인을 전문으로 하며, 콘텐츠 기획과 사진 촬영을 함께하는 디자이너 이서정입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
