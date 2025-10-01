import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Reviews = () => {
  const reviews = [
    {
      title: "Switch eSIM: обзор, тарифы, отзывы",
      description: "Профессиональное решение для частых путешественников с покрытием в 190+ странах мира",
      slug: "switch-esim",
      gradient: "from-blue-500 to-cyan-500",
      icon: "Wifi"
    },
    {
      title: "Unisimka: обзор, тарифы, отзывы",
      description: "Идеальное решение для бизнеса с API интеграцией и корпоративными тарифами",
      slug: "unisimka",
      gradient: "from-purple-500 to-pink-500",
      icon: "Briefcase"
    },
    {
      title: "9eSIM: обзор, тарифы, отзывы",
      description: "Доступное решение для путешествий по всему миру с низкими ценами",
      slug: "nine-esim",
      gradient: "from-green-500 to-emerald-500",
      icon: "DollarSign"
    },
    {
      title: "5ber: обзор, тарифы, отзывы",
      description: "Премиум качество связи с VIP поддержкой для требовательных путешественников",
      slug: "fiveber",
      gradient: "from-orange-500 to-red-500",
      icon: "Crown"
    },
    {
      title: "eSIM.me: обзор, тарифы, отзывы",
      description: "Надежный провайдер с cashback программой и покрытием в 170+ странах",
      slug: "esim-me",
      gradient: "from-indigo-500 to-purple-500",
      icon: "Gift"
    },
    {
      title: "xeSIM: обзор, тарифы, отзывы",
      description: "Инновационные технологии с умными тарифами и гибридным форматом",
      slug: "xesim",
      gradient: "from-teal-500 to-blue-500",
      icon: "Cpu"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Обзоры eSIM провайдеров - подробные гайды и сравнения"
        description="Читайте детальные обзоры всех eSIM провайдеров: тарифы, покрытие, качество связи, преимущества и недостатки. Помогаем выбрать лучший eSIM для путешествий."
        keywords="обзоры esim, esim отзывы, сравнение esim, гайд по esim, лучший esim провайдер"
        canonical="/reviews"
      />

      <header className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-xl z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Wifi" size={20} className="text-white" />
              </div>
              <span className="text-xl font-display font-bold">eSIM Адаптеры</span>
            </Link>
            <div className="flex gap-2">
              <Link to="/compare">
                <Button variant="outline" size="sm" className="border-border/50">
                  <Icon name="ArrowLeftRight" className="mr-2" size={16} />
                  Сравнить
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Обзоры", url: "/reviews" }
              ]}
            />
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Обзоры eSIM провайдеров
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Подробные гайды по всем популярным eSIM сервисам. Сравнение тарифов, покрытие, качество связи и реальные отзывы.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {reviews.map((review, idx) => (
              <Link 
                key={idx} 
                to={`/adapter/${review.slug}`}
                className="block group"
              >
                <Card className="overflow-hidden border-2 border-border/50 hover:border-teal-600/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    <div className={`w-full md:w-48 h-48 md:h-auto bg-gradient-to-br ${review.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={review.icon as any} size={64} className="text-white" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-display font-bold mb-3 group-hover:text-teal-600 transition-colors">
                          {review.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {review.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-teal-600 font-semibold">
                        Читать обзор
                        <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Не можете выбрать?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Воспользуйтесь нашей таблицей сравнения, чтобы увидеть все параметры в одном месте
            </p>
            <Link to="/compare">
              <Button size="lg" className="gradient-primary text-white border-0">
                <Icon name="ArrowLeftRight" className="mr-2" size={20} />
                Сравнить всех провайдеров
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
