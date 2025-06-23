import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/config/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead = ({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  ogImage = SITE_CONFIG.ogImage,
  canonicalUrl = SITE_CONFIG.url
}: SEOHeadProps) => {
  const fullTitle = title === SITE_CONFIG.title ? title : `${title} | ${SITE_CONFIG.name}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={SITE_CONFIG.author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags for Performance */}
      <meta name="theme-color" content="#00ff66" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.rss2json.com" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://medium.com" />
      <link rel="dns-prefetch" href="https://formspree.io" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": SITE_CONFIG.author,
          "jobTitle": "Cybersecurity Analyst",
          "description": description,
          "url": canonicalUrl,
          "sameAs": [
            "https://www.linkedin.com/in/charith-sighakollu/",
            "https://github.com/Securedsoul99",
            "https://medium.com/@charithcs9"
          ],
          "knowsAbout": [
            "Cybersecurity",
            "Incident Response",
            "Blue Team Operations",
            "SOC Analysis",
            "Threat Detection",
            "SIEM",
            "EDR",
            "Cloud Security"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;