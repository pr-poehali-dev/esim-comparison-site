import { useParams, Link } from "react-router-dom";
import { adaptersData } from "@/data/adapters";
import ComparisonTable from "@/components/ComparisonTable";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import Icon from "@/components/ui/icon";

const Compare = () => {
  const comparison = {
    title: "Сравнение всех eSIM адаптеров",
    description: "Полное сравнение всех доступных адаптеров для выбора лучшего варианта",
    adapters: adaptersData
  };

  const seoTitle = "Сравнение всех eSIM адаптеров 2025 - детальная таблица";
  const seoDescription = "Подробное сравнение 6 популярных eSIM провайдеров: тарифы, покрытие, поддержка, функции. Выберите лучший вариант для путешествий.";

  const breadcrumbItems = [
    { name: "Сравнение всех адаптеров", url: "/compare" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords="сравнение esim, лучшие esim, esim для путешествий, премиум esim, бюджетный esim, esim для бизнеса"
        canonical="/compare"
      />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {comparison.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {comparison.description}
          </p>
        </div>

        <div className="mb-8 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Info" size={24} />
            Как пользоваться таблицей
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 shrink-0 mt-0.5" />
              <span>Нажмите на название адаптера, чтобы перейти к детальному обзору</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 shrink-0 mt-0.5" />
              <span>Сравните ключевые характеристики: цену, покрытие, поддержку</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-500 shrink-0 mt-0.5" />
              <span>Изучите преимущества и недостатки каждого варианта</span>
            </li>
          </ul>
        </div>

        <ComparisonTable adapters={comparison.adapters} />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" size={24} className="text-blue-500" />
              Как выбрать адаптер?
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Определите бюджет поездки</li>
              <li>• Проверьте покрытие в нужных странах</li>
              <li>• Оцените важность скорости поддержки</li>
              <li>• Рассчитайте необходимый объем трафика</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-green-500" />
              Наши рекомендации
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Для бизнеса: Switch eSIM или Unisimka</li>
              <li>• Для экономии: 9eSIM</li>
              <li>• Для путешествий: eSIM.me или Switch eSIM</li>
              <li>• Премиум сервис: 5ber</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться к каталогу
          </Link>
        </div>

        <RelatedLinks 
          links={[
            {
              title: "Все адаптеры",
              description: "Полный каталог eSIM провайдеров для путешествий",
              url: "/",
              icon: "Grid3x3",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              title: "Обзоры",
              description: "Читайте подробные обзоры каждого провайдера",
              url: "/reviews",
              icon: "BookOpen",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              title: "Switch eSIM",
              description: "Лидер рынка с 190+ странами",
              url: "/adapter/switch-esim",
              icon: "Wifi",
              gradient: "from-teal-500 to-cyan-500"
            },
            {
              title: "9eSIM",
              description: "Самые доступные цены для путешествий",
              url: "/adapter/nine-esim",
              icon: "DollarSign",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              title: "5ber",
              description: "Премиум качество с VIP поддержкой",
              url: "/adapter/fiveber",
              icon: "Crown",
              gradient: "from-orange-500 to-red-500"
            },
            {
              title: "Unisimka",
              description: "Корпоративные решения с API",
              url: "/adapter/unisimka",
              icon: "Briefcase",
              gradient: "from-indigo-500 to-purple-500"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Compare;