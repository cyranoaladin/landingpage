import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundContainer from '@/components/BackgroundContainer';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0F',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://moneyfactory.ai'),
  title: 'Money Factory AI - The Cognitive Activation Protocol™',
  description: 'Transformez vos compétences en capital avec le protocole d\'activation cognitive de Money Factory AI. Apprenez, construisez, prouvez et activez votre potentiel sur la blockchain.',
  keywords: [
    'Money Factory AI',
    'MFAI',
    'Cognitive Activation Protocol',
    'Web3',
    'Blockchain',
    'Solana',
    'Token',
    'NFT',
    'DAO',
    'Gouvernance',
  ],
  openGraph: {
    title: 'Money Factory AI - The Cognitive Activation Protocol™',
    description: 'Transformez vos compétences en capital avec le protocole d\'activation cognitive de Money Factory AI.',
    images: ['/images/og-image.jpg'],
    url: 'https://moneyfactory.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Factory AI - The Cognitive Activation Protocol™',
    description: 'Transformez vos compétences en capital avec le protocole d\'activation cognitive de Money Factory AI.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-full bg-black text-white overflow-x-hidden">
        <BackgroundContainer>{children}</BackgroundContainer>
      </body>
    </html>
  );
}