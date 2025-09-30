import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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
    support: "24/7"
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
    support: "9:00-21:00"
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
    support: "Email"
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
    support: "24/7"
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
    support: "24/7"
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
    support: "Email + Chat"
  }
];

const Index = () => {
  const [selectedAdapter, setSelectedAdapter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              eSIM Адаптеры
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#adapters" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Адаптеры
              </a>
              <a href="#comparison" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Сравнение
              </a>
              <a href="#guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Руководства
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Лучшие eSIM адаптеры 2025
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Сравните 6 популярных провайдеров eSIM и выберите идеальный вариант для ваших путешествий
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Compass" className="mr-2" size={20} />
                Сравнить все
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent">
                Читать руководство
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="adapters" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Обзор адаптеров
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Детальное сравнение функций, цен и покрытия каждого провайдера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adapters.map((adapter, index) => (
              <Card
                key={adapter.id}
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-2 animate-scale-in ${
                  selectedAdapter === adapter.id ? 'border-primary' : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedAdapter(adapter.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {adapter.shortName}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      <Icon name="Star" size={14} className="mr-1" />
                      {adapter.rating}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {adapter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="DollarSign" size={16} />
                        Цена
                      </span>
                      <span className="font-semibold text-foreground">{adapter.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Globe" size={16} />
                        Страны
                      </span>
                      <span className="font-semibold text-foreground">{adapter.countries}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Icon name="Headphones" size={16} />
                        Поддержка
                      </span>
                      <span className="font-semibold text-foreground">{adapter.support}</span>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-3">Ключевые особенности:</p>
                      <ul className="space-y-2">
                        {adapter.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16 md:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Сравнительные статьи
              </h3>
              <p className="text-muted-foreground">
                Детальное сопоставление провайдеров по различным критериям
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Switch eSIM vs Unisimka</CardTitle>
                  <CardDescription>Сравнение премиум сегмента</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent">
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">9eSIM vs eSIM.me</CardTitle>
                  <CardDescription>Лучшее соотношение цена/качество</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent">
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">5ber vs xeSIM</CardTitle>
                  <CardDescription>Технологии и инновации</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent">
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Топ-3 для путешествий</CardTitle>
                  <CardDescription>Лучший выбор туристов 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-accent">
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 text-foreground">eSIM Адаптеры</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Независимое сравнение провайдеров eSIM для путешественников
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
              <a href="#" className="hover:text-primary transition-colors">Политика</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;