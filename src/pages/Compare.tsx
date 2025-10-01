import { useParams, Link } from "react-router-dom";
import { adaptersData } from "@/data/adapters";
import ComparisonTable from "@/components/ComparisonTable";
import Icon from "@/components/ui/icon";

const Compare = () => {
  const { slug } = useParams();

  const getComparison = () => {
    if (!slug) {
      return {
        title: "Сравнение всех eSIM адаптеров",
        description: "Полное сравнение всех доступных адаптеров для выбора лучшего варианта",
        adapters: adaptersData
      };
    }

    const comparisons: Record<string, { title: string; description: string; slugs: string[] }> = {
      "premium": {
        title: "Премиум адаптеры",
        description: "Сравнение лучших премиум решений с максимальным покрытием",
        slugs: ["switch-esim", "fiveber"]
      },
      "budget": {
        title: "Бюджетные адаптеры",
        description: "Сравнение самых доступных вариантов для экономных путешественников",
        slugs: ["nine-esim", "esim-me"]
      },
      "business": {
        title: "Для бизнеса",
        description: "Сравнение решений для корпоративных клиентов и предпринимателей",
        slugs: ["unisimka", "switch-esim"]
      },
      "popular": {
        title: "Самые популярные",
        description: "Сравнение топовых адаптеров по версии пользователей",
        slugs: ["switch-esim", "esim-me", "fiveber"]
      }
    };

    const comparison = comparisons[slug];
    if (!comparison) {
      return null;
    }

    return {
      ...comparison,
      adapters: adaptersData.filter(a => comparison.slugs.includes(a.slug))
    };
  };

  const comparison = getComparison();

  if (!comparison) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Сравнение не найдено</h1>
          <Link to="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Назад к списку
        </Link>

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
      </div>
    </div>
  );
};

export default Compare;