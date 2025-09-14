import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Ovo, Zen_Maru_Gothic } from 'next/font/google';
import './globals.css';
import GlobalFooter from '../components/global-footer';
import GlobalNavigation from '../components/global-navigation';
import LoadingWrapper from '../components/loading-wrapper';

const inter = Inter({ subsets: ['latin'] });
const ovo = Ovo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ovo',
});
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-zen-maru-gothic',
});

export const metadata: Metadata = {
  title: 'Surf City Christian Child Development Preschool',
  description: 'Nurturing young minds with Christian values',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${ovo.variable} ${zenMaruGothic.variable}`}
    >
      <body className="antialiased">
        <LoadingWrapper>
          <GlobalNavigation />
          <div className="pt-[80px]">{children}</div>
          <GlobalFooter />
        </LoadingWrapper>
      </body>
    </html>
  );
}
