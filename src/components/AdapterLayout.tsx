import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SEO from "@/components/SEO";
import BreadcrumbsLight from "@/components/BreadcrumbsLight";
import RelatedLinks from "@/components/RelatedLinks";
import { ReactNode } from "react";

interface AdapterLayoutProps {
  name: string;
  shortName: string;
  description: string;
  rating: number;
  price: string;
  countries: string;
  support: string;
  gradient: string;
  features: { title: string; description: string; icon: string }[];
  pros: string[];
  cons: string[];
  pricing: { name: string; price: string; data: string; validity: string }[];
  children?: ReactNode;
  detailedReview?: ReactNode;
}

const AdapterLayout = ({
  name,
  shortName,
  description,
  rating,
  price,
  countries,
  support,
  gradient,
  features,
  pros,
  cons,
  pricing,
  detailedReview,
}: AdapterLayoutProps) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const seoTitle = `${name} - обзор, тарифы, отзывы`;
  const seoDescription = `${description}. Рейтинг ${rating}. ${price}. Покрытие: ${countries}. Поддержка: ${support}. Подробный обзор преимуществ и недостатков.`;
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={`${name.toLowerCase()}, esim ${name.toLowerCase()}, ${name} обзор, ${name} тарифы, ${name} отзывы, esim для путешествий`}
        canonical={`/adapter/${slug}`}
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
              <Link to="/reviews">
                <Button variant="outline" size="sm" className="border-border/50">
                  <Icon name="BookOpen" className="mr-2" size={16} />
                  Обзоры
                </Button>
              </Link>
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

      <section className={`py-16 bg-gradient-to-br ${gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="mb-6">
            <BreadcrumbsLight 
              items={[
                { name: shortName, url: `/adapter/${slug}` }
              ]}
            />
          </div>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Icon name="Star" size={16} />
              <span className="text-sm font-medium">Рейтинг {rating}/5.0</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {name}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <Icon name="DollarSign" size={20} />
                <div>
                  <div className="text-xs text-white/70">Цена</div>
                  <div className="font-bold">{price}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <Icon name="Globe" size={20} />
                <div>
                  <div className="text-xs text-white/70">Покрытие</div>
                  <div className="font-bold">{countries} стран</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <Icon name="Headphones" size={20} />
                <div>
                  <div className="text-xs text-white/70">Поддержка</div>
                  <div className="font-bold">{support}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {detailedReview && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {detailedReview}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Ключевые возможности
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, idx) => (
                <Card key={idx} className="gradient-card border-2 border-border/50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                      <Icon name={feature.icon as any} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <Card className="gradient-card border-2 border-green-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Icon name="ThumbsUp" size={20} />
                    Преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-green-600" />
                        </div>
                        <span className="text-foreground">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card border-2 border-orange-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600">
                    <Icon name="ThumbsDown" size={20} />
                    Недостатки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="X" size={14} className="text-orange-600" />
                        </div>
                        <span className="text-foreground">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Тарифные планы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {pricing.map((plan, idx) => (
                <Card key={idx} className="gradient-card border-2 border-border/50 hover:border-teal-600/50 transition-all">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{plan.name}</Badge>
                    <CardTitle className="text-3xl font-display">
                      {plan.price}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Database" size={16} className="text-muted-foreground" />
                        <span>{plan.data}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span>{plan.validity}</span>
                      </div>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${gradient} text-white border-0`}>
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Сравните {shortName} с другими
              </h2>
              <p className="text-muted-foreground mb-8">
                Посмотрите детальное сравнение с конкурентами
              </p>
              <Link to="/compare">
                <Button size="lg" className="gradient-primary text-white border-0">
                  <Icon name="ArrowLeftRight" className="mr-2" size={20} />
                  Перейти к сравнению
                </Button>
              </Link>
            </div>
            
            <RelatedLinks 
              links={[
                {
                  title: "Все адаптеры",
                  description: "Вернуться к полному каталогу eSIM провайдеров",
                  url: "/",
                  icon: "Grid3x3",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Все обзоры",
                  description: "Читайте подробные обзоры всех провайдеров",
                  url: "/reviews",
                  icon: "BookOpen",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Сравнение всех",
                  description: "Сравните всех провайдеров в одной таблице",
                  url: "/compare",
                  icon: "ArrowLeftRight",
                  gradient: "from-green-500 to-emerald-500"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdapterLayout;