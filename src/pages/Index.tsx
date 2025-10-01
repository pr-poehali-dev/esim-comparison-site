import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Adapter {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  rating: number;
  price: string;
  countries: string;
  support: string;
  color: string;
}

const adapters: Adapter[] = [
  {
    id: "switch-esim",
    name: "Switch eSIM by Plan B",
    shortName: "Switch eSIM",
    description: "Профессиональное решение для частых путешественников",
    features: ["Поддержка 190+ стран", "Быстрая активация", "24/7 поддержка", "Гибкие тарифы"],
    rating: 4.8,
    price: "от $4.50",
    countries: "190+",
    support: "24/7",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "unisimka",
    name: "Unisimka",
    shortName: "Unisimka",
    description: "Универсальный адаптер для бизнеса и путешествий",
    features: ["180+ стран", "Корпоративные тарифы", "API интеграция", "Мультипрофиль"],
    rating: 4.6,
    price: "от $5.00",
    countries: "180+",
    support: "9:00-21:00",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "9esim",
    name: "9eSIM",
    shortName: "9eSIM",
    description: "Доступное решение для путешествий по всему миру",
    features: ["150+ стран", "Низкие цены", "Простая активация", "Нет скрытых платежей"],
    rating: 4.5,
    price: "от $3.50",
    countries: "150+",
    support: "Email",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "5ber",
    name: "5ber",
    shortName: "5ber",
    description: "Премиум качество связи в популярных направлениях",
    features: ["100+ стран", "Высокая скорость", "VIP поддержка", "Безлимитные планы"],
    rating: 4.7,
    price: "от $6.00",
    countries: "100+",
    support: "24/7",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "esim-me",
    name: "eSIM.me",
    shortName: "eSIM.me",
    description: "Надежный провайдер с отличной репутацией",
    features: ["170+ стран", "Мгновенная активация", "Удобное приложение", "Cashback программа"],
    rating: 4.6,
    price: "от $4.00",
    countries: "170+",
    support: "24/7",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "xesim",
    name: "xeSIM",
    shortName: "xeSIM",
    description: "Инновационные технологии для современных путешественников",
    features: ["160+ стран", "eSIM + физическая SIM", "Умные тарифы", "Роуминг контроль"],
    rating: 4.4,
    price: "от $4.50",
    countries: "160+",
    support: "Email + Chat",
    color: "from-teal-500 to-blue-500"
  }
];

const Index = () => {
  const [selectedAdapter, setSelectedAdapter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-background to-background"></div>
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px]"></div>

      <header className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-xl z-50 relative">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Icon name="Wifi" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                eSIM Адаптеры
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#adapters" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Адаптеры
              </a>
              <a href="#comparison" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Сравнение
              </a>
              <a href="#guides" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Руководства
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium">Актуально на 2025</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Лучшие <span className="bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">eSIM</span> адаптеры
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Сравните 6 популярных провайдеров eSIM и выберите идеальный вариант для ваших путешествий
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link to="/compare">
                <Button size="lg" className="gradient-primary text-white border-0 shadow-lg shadow-teal-500/30 hover:shadow-teal-600/50 transition-all">
                  <Icon name="Compass" className="mr-2" size={20} />
                  Сравнить все
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50">
                Читать руководство
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent mb-2">
                  6
                </div>
                <div className="text-sm text-muted-foreground">Провайдеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent mb-2">
                  190+
                </div>
                <div className="text-sm text-muted-foreground">Стран</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent mb-2">
                  $3.50
                </div>
                <div className="text-sm text-muted-foreground">От цены</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="adapters" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Обзор адаптеров
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Детальное сравнение функций, цен и покрытия каждого провайдера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adapters.map((adapter) => (
              <Card
                key={adapter.id}
                className={`group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer gradient-card ${
                  selectedAdapter === adapter.id 
                    ? 'border-teal-600 shadow-lg shadow-teal-500/20' 
                    : 'border-border/50 hover:border-teal-600/50 hover:shadow-lg hover:shadow-teal-500/10'
                }`}
                onClick={() => setSelectedAdapter(adapter.id)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${adapter.color}`}></div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${adapter.color} flex items-center justify-center shadow-lg`}>
                        <Icon name="Wifi" size={24} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-display font-bold">
                          {adapter.shortName}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm border border-border/50">
                      <Icon name="Star" size={14} className="mr-1 text-yellow-500" />
                      {adapter.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {adapter.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/30">
                        <Icon name="DollarSign" size={18} className="mx-auto mb-1 text-muted-foreground" />
                        <div className="text-xs text-muted-foreground mb-1">Цена</div>
                        <div className="text-sm font-bold">{adapter.price}</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/30">
                        <Icon name="Globe" size={18} className="mx-auto mb-1 text-muted-foreground" />
                        <div className="text-xs text-muted-foreground mb-1">Страны</div>
                        <div className="text-sm font-bold">{adapter.countries}</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30 border border-border/30">
                        <Icon name="Headphones" size={18} className="mx-auto mb-1 text-muted-foreground" />
                        <div className="text-xs text-muted-foreground mb-1">24/7</div>
                        <div className="text-[10px] font-bold">{adapter.support}</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/30">
                      <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Особенности</p>
                      <ul className="space-y-2">
                        {adapter.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${adapter.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Icon name="Check" size={12} className="text-white" />
                            </div>
                            <span className="text-foreground/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/${adapter.id}`} className="block">
                      <Button
                        className={`w-full mt-4 bg-gradient-to-r ${adapter.color} text-white border-0 shadow-lg hover:shadow-xl transition-all`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Подробнее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Сравнительные статьи
              </h3>
              <p className="text-muted-foreground text-lg">
                Детальное сопоставление провайдеров по различным критериям
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Switch eSIM vs Unisimka", desc: "Сравнение премиум сегмента", gradient: "from-purple-500 to-pink-500" },
                { title: "9eSIM vs eSIM.me", desc: "Лучшее соотношение цена/качество", gradient: "from-blue-500 to-cyan-500" },
                { title: "5ber vs xeSIM", desc: "Технологии и инновации", gradient: "from-orange-500 to-red-500" },
                { title: "Топ-3 для путешествий", desc: "Лучший выбор туристов 2025", gradient: "from-green-500 to-emerald-500" }
              ].map((article, idx) => (
                <Card key={idx} className="group gradient-card border-2 border-border/50 hover:border-teal-600/50 transition-all cursor-pointer overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>
                  <CardHeader>
                    <CardTitle className="text-xl font-display">{article.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{article.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-border/50 hover:bg-muted/50 group-hover:border-teal-600/50 transition-all">
                      Читать статью
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-border/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <Icon name="Wifi" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-display font-bold">eSIM Адаптеры</h4>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-muted transition-colors">
                  <Icon name="Github" size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center hover:bg-muted transition-colors">
                  <Icon name="Twitter" size={18} />
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8 text-center">
              Независимое сравнение провайдеров eSIM для путешественников
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground border-t border-border/50 pt-8">
              <a href="#" className="hover:text-foreground transition-colors">О проекте</a>
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
              <a href="#" className="hover:text-foreground transition-colors">Политика</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;