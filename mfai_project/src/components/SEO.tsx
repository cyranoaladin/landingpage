import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
}

export function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  ogUrl = 'https://moneyfactory.ai',
}: SEOProps) {
  const siteTitle = 'Money Factory AI';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultKeywords = [
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
  ];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={[...defaultKeywords, ...keywords].join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0B0B0F" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
} 