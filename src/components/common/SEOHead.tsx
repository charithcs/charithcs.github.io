import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/config/constants';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  keywords = [...SITE_CONFIG.keywords],
  ogImage = SITE_CONFIG.ogImage,
  canonicalUrl = SITE_CONFIG.url,
  structuredData
}: SEOHeadProps) => {
  const fullTitle = title === SITE_CONFIG.title ? title : `${title} | ${SITE_CONFIG.name}`;

  return (
    <Helmet>
      {/* Enhanced Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.rss2json.com https://formspree.io; frame-src 'none'; object-src 'none'; base-uri 'self';" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()" />
      
      {/* Enhanced Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={SITE_CONFIG.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_CONFIG.author} - Cybersecurity Analyst Portfolio`} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_CONFIG.author} - Cybersecurity Analyst Portfolio`} />
      <meta name="twitter:creator" content="@charithcs9" />
      <meta name="twitter:site" content="@charithcs9" />
      
      {/* LinkedIn Meta Tags */}
      <meta property="linkedin:owner" content="charith-sighakollu" />
      
      {/* Additional Meta Tags for Performance and Security */}
      <meta name="theme-color" content="#00ff66" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
      <meta name="application-name" content={`${SITE_CONFIG.name} Portfolio`} />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.rss2json.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://medium.com" />
      <link rel="dns-prefetch" href="https://formspree.io" />
      
      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": SITE_CONFIG.author,
          "jobTitle": "Cybersecurity Analyst",
          "description": description,
          "url": canonicalUrl,
          "image": ogImage,
          "sameAs": [
            "https://www.linkedin.com/in/charith-sighakollu/",
            "https://github.com/Securedsoul99",
            "https://medium.com/@charithcs9"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Skillmine Technology"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Tech Mahindra"
          },
          "knowsAbout": [
            "Cybersecurity",
            "Incident Response",
            "Blue Team Operations",
            "SOC Analysis",
            "Threat Detection",
            "SIEM",
            "EDR",
            "Cloud Security",
            "Threat Hunting",
            "Malware Analysis",
            "Security Automation",
            "SOAR",
            "Vulnerability Assessment"
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "Security+ (In Progress)",
              "credentialCategory": "Certification"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "charithsighakollu@gmail.com",
            "contactType": "Professional"
          }
        })}
      </script>
      
      {/* Additional Structured Data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;