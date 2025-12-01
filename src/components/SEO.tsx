import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  nofollow?: boolean;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  faqData?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  organizationData?: object;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/thumbnail.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  geoRegion = "IN",
  geoPlacename = "India",
  geoPosition,
  structuredData,
  noindex = false,
  nofollow = false,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  faqData,
  breadcrumbs,
  organizationData,
}: SEOProps) => {
  const siteUrl = "https://rookhq.com";
  const fullTitle = title.includes("Rook") ? title : `${title} | Rook`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;
  const defaultPosition = geoPosition || "28.6139, 77.2090"; // New Delhi, India

  const robotsContent = [];
  if (noindex) robotsContent.push("noindex");
  if (nofollow) robotsContent.push("nofollow");
  if (robotsContent.length === 0) robotsContent.push("index", "follow", "max-snippet:-1", "max-image-preview:large", "max-video-preview:-1");

  // Enhanced Organization Schema (for AEO/GEO)
  const defaultOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rook",
    "alternateName": "Rook HQ",
    "url": siteUrl,
    "logo": `${siteUrl}/thumbnail.png`,
    "description": "Simple SaaS tools that empower creators, freelancers, and founders to get more done with less.",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Rook Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Delhi",
      "addressLocality": "New Delhi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@rookhq.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/rookhq",
      "https://linkedin.com/company/rookhq"
    ],
    "areaServed": "Worldwide",
    "knowsAbout": [
      "SaaS",
      "Software Development",
      "Digital Marketing",
      "Startup Acceleration",
      "Business Automation",
      "Payment Solutions",
      "Link Management",
      "Product Analytics"
    ]
  };

  // Enhanced Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith("http") ? crumb.url : `${siteUrl}${crumb.url}`
    }))
  } : null;

  // Enhanced FAQ Schema (for AEO)
  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Combine all structured data
  const allStructuredData = [];
  if (organizationData || !structuredData) {
    allStructuredData.push(organizationData || defaultOrganization);
  }
  if (structuredData) {
    const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
    allStructuredData.push(...dataArray);
  }
  if (breadcrumbSchema) {
    allStructuredData.push(breadcrumbSchema);
  }
  if (faqSchema) {
    allStructuredData.push(faqSchema);
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent.join(", ")} />
      <meta name="author" content="Rook" />
      <meta name="copyright" content="Rook" />
      <meta name="application-name" content="Rook" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook - Enhanced for WhatsApp, LinkedIn, etc. */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Rook" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}

      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:creator" content="@rookhq" />
      <meta name="twitter:site" content="@rookhq" />
      <meta name="twitter:domain" content="rookhq.com" />

      {/* WhatsApp / LinkedIn Specific */}
      <meta property="og:image:url" content={ogImageUrl} />
      <meta name="linkedin:owner" content="Rook" />

      {/* Geographic Meta Tags - Enhanced for GEO (10x) */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      {geoPosition && <meta name="geo.position" content={geoPosition} />}
      <meta name="ICBM" content={defaultPosition} />
      <meta name="geo.region" content={`${geoRegion}-DL`} />
      <meta name="geo.country" content={geoRegion} />
      <meta name="geo.city" content="New Delhi" />
      <meta name="geo.latitude" content="28.6139" />
      <meta name="geo.longitude" content="77.2090" />
      <meta name="geo.timezone" content="Asia/Kolkata" />
      <meta name="geo.currency" content="INR" />
      <meta name="geo.language" content="en-IN" />
      
      {/* Enhanced Location Data for GEO */}
      <meta name="location" content={`${geoPlacename}, ${geoRegion}`} />
      <meta name="addressLocality" content="New Delhi" />
      <meta name="addressRegion" content="Delhi" />
      <meta name="addressCountry" content={geoRegion} />
      <meta name="postalCode" content="110001" />

      {/* Additional SEO Meta Tags - Enhanced for AEO/GEO (10x) */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#dc2e3e" />
      <meta name="msapplication-TileColor" content="#dc2e3e" />
      <meta name="apple-mobile-web-app-title" content="Rook" />
      
      {/* Enhanced Content Classification for AEO */}
      <meta name="classification" content="Business, Technology, SaaS, Software, Startup, Digital Marketing" />
      <meta name="category" content="Technology" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="topic" content={keywords || "SaaS, Technology, Business Tools"} />
      <meta name="subject" content={title} />
      <meta name="summary" content={description} />
      <meta name="abstract" content={description} />
      
      {/* Enhanced Entity Recognition for AEO */}
      <meta name="entity" content="Rook" />
      <meta name="brand" content="Rook" />
      <meta name="organization" content="Rook" />
      <meta name="company" content="Rook" />
      
      {/* Enhanced Semantic Tags */}
      <meta name="content-type" content="text/html; charset=UTF-8" />
      <meta name="content-language" content="en" />
      <meta name="content-script-type" content="text/javascript" />
      <meta name="content-style-type" content="text/css" />
      
      {/* Enhanced Date/Time Meta Tags */}
      <meta name="date" content={new Date().toISOString()} />
      <meta name="revised" content={new Date().toISOString()} />
      <meta name="creation-date" content="2020-01-01" />
      <meta name="last-modified" content={new Date().toISOString()} />
      
      {/* Enhanced Social Media Meta Tags */}
      <meta name="twitter:label1" content="Est. Reading time" />
      <meta name="twitter:data1" content="5 min read" />
      <meta name="twitter:label2" content="Written by" />
      <meta name="twitter:data2" content="Rook Team" />
      
      {/* Enhanced Open Graph Additional Tags */}
      <meta property="og:email" content="support@rookhq.com" />
      <meta property="og:phone_number" content="+91" />
      <meta property="og:latitude" content="28.6139" />
      <meta property="og:longitude" content="77.2090" />
      <meta property="og:street-address" content="New Delhi" />
      <meta property="og:locality" content="New Delhi" />
      <meta property="og:region" content="Delhi" />
      <meta property="og:postal-code" content="110001" />
      <meta property="og:country-name" content="India" />
      
      {/* Enhanced Knowledge Graph Signals */}
      <meta name="organization:name" content="Rook" />
      <meta name="organization:url" content={siteUrl} />
      <meta name="organization:logo" content={ogImageUrl} />
      <meta name="organization:description" content={description} />
      
      {/* Enhanced Content Signals for AEO */}
      <meta name="content-author" content="Rook Team" />
      <meta name="content-publisher" content="Rook" />
      <meta name="content-creator" content="Rook" />
      <meta name="content-owner" content="Rook" />
      <meta name="content-copyright" content="Rook" />
      <meta name="content-license" content="All Rights Reserved" />
      
      {/* Enhanced Search Engine Signals */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Enhanced Mobile & App Signals */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Enhanced Accessibility & Semantic Signals */}
      <meta name="accessibility-features" content="ARIA, Semantic HTML, Keyboard Navigation" />
      <meta name="accessibility-hazards" content="none" />
      <meta name="accessibility-summary" content="WCAG 2.1 AA compliant" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Search Engine Optimization */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="slurp" content="index, follow" />

      {/* Enhanced Structured Data (JSON-LD) - Multiple Schemas for AEO/GEO (10x) */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Additional WebPage Schema for every page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": fullTitle,
          "description": description,
          "url": canonicalUrl,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "Rook",
            "url": siteUrl
          },
          "about": {
            "@type": "Thing",
            "name": "SaaS Tools",
            "description": "Simple SaaS tools for creators, freelancers, and founders"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": ogImageUrl,
            "width": 1200,
            "height": 630
          },
          "breadcrumb": breadcrumbSchema ? {
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs!.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url.startsWith("http") ? crumb.url : `${siteUrl}${crumb.url}`
            }))
          } : undefined,
          "datePublished": articlePublishedTime || new Date().toISOString(),
          "dateModified": articleModifiedTime || new Date().toISOString(),
          "author": articleAuthor ? {
            "@type": "Person",
            "name": articleAuthor
          } : {
            "@type": "Organization",
            "name": "Rook"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Rook",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/thumbnail.png`
            }
          }
        })}
      </script>
      
      {/* WebSite Schema with SearchAction for better discovery */}
      {canonical === "/" && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Rook",
            "url": siteUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

