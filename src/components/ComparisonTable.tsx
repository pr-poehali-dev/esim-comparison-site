import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Adapter {
  name: string;
  shortName: string;
  slug: string;
  rating: number;
  price: string;
  countries: string;
  support: string;
  gradient: string;
  features: string[];
  pros: string[];
  cons: string[];
}

interface ComparisonTableProps {
  adapters: Adapter[];
}

const ComparisonTable = ({ adapters }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="p-4 text-left font-semibold">Характеристика</th>
            {adapters.map((adapter) => (
              <th key={adapter.slug} className="p-4 text-center min-w-[200px]">
                <Link 
                  to={`/adapter/${adapter.slug}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  <div className={`bg-gradient-to-br ${adapter.gradient} text-white rounded-lg p-4 mb-2`}>
                    <h3 className="font-bold text-lg">{adapter.name}</h3>
                  </div>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium">Рейтинг</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{adapter.rating}</span>
                </div>
              </td>
            ))}
          </tr>

          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium">Цена от</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4 text-center font-semibold text-primary">
                {adapter.price}
              </td>
            ))}
          </tr>

          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium">Страны</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4 text-center">
                {adapter.countries}
              </td>
            ))}
          </tr>

          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium">Поддержка</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4 text-center">
                {adapter.support}
              </td>
            ))}
          </tr>

          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium align-top">Преимущества</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4">
                <ul className="space-y-1 text-sm">
                  {adapter.pros.slice(0, 3).map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          <tr className="border-b border-border hover:bg-muted/50">
            <td className="p-4 font-medium align-top">Недостатки</td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4">
                <ul className="space-y-1 text-sm">
                  {adapter.cons.slice(0, 2).map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="XCircle" size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-4"></td>
            {adapters.map((adapter) => (
              <td key={adapter.slug} className="p-4 text-center">
                <Link 
                  to={`/adapter/${adapter.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
