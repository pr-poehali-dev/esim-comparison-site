export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "eSIM Адаптеры",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Независимое сравнение провайдеров eSIM для путешественников"
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "eSIM Адаптеры",
  "url": "https://yourdomain.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://yourdomain.com${item.url}`
  }))
});

export const generateProductSchema = (adapter: {
  name: string;
  description: string;
  rating: number;
  price: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": adapter.name,
  "description": adapter.description,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": adapter.rating,
    "bestRating": "5",
    "ratingCount": "100"
  },
  "offers": {
    "@type": "Offer",
    "price": adapter.price.replace(/[^\d.]/g, ''),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": `https://yourdomain.com${adapter.url}`
  }
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Organization",
    "name": "eSIM Адаптеры"
  },
  "publisher": {
    "@type": "Organization",
    "name": "eSIM Адаптеры",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yourdomain.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://yourdomain.com${article.url}`
  }
});
