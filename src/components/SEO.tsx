import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

const SEO = ({ title, description, keywords, ogImage, canonical, structuredData }: SEOProps) => {
  const fullTitle = `${title} | eSIM Адаптеры`;
  const defaultImage = ogImage || "/og-image.jpg";
  const siteUrl = window.location.origin;
  const currentUrl = canonical ? `${siteUrl}${canonical}` : window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <link rel="canonical" href={currentUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${defaultImage}`} />
      <meta property="og:url" content={currentUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${defaultImage}`} />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;