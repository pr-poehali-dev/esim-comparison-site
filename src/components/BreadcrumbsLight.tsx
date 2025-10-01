import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { generateBreadcrumbSchema } from "@/utils/structuredData";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsLightProps {
  items: BreadcrumbItem[];
}

const BreadcrumbsLight = ({ items }: BreadcrumbsLightProps) => {
  const allItems = [{ name: "Главная", url: "/" }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            
            return (
              <li key={item.url} className="flex items-center gap-2">
                {index > 0 && (
                  <Icon name="ChevronRight" size={16} className="text-white/60" />
                )}
                {isLast ? (
                  <span className="font-medium text-white" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.url}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbsLight;
