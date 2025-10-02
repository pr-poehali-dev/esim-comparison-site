import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimReviews = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Отзывы пользователей</h3>
      
      <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
        <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10">
          <div className="text-center p-8">
            <Icon name="MessageSquare" size={64} className="mx-auto mb-4 text-teal-600" />
            <p className="text-sm font-medium text-foreground">Нишевый продукт для технически подкованных пользователей</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        Так как xESIM – относительно новый продукт, реальных пользовательских отзывов пока немного. Покупают его в основном энтузиасты и опытные путешественники, которые понимают специфику работы адаптеров.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex gap-2 mb-3">
              <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
              <p className="text-sm italic">
                "Работает вообще отлично. Удобно переключаться между профилями, никаких проблем с регистрацией в сети."
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Reddit</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex gap-2 mb-3">
              <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
              <p className="text-sm italic">
                "Очень удобно в поездке по нескольким странам. Активировала профили ещё дома, в путешествии просто переключалась."
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Ozon</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="leading-relaxed">
        Критические отзывы чаще связаны с нюансами использования: сложность настройки на некоторых моделях телефонов, необходимость изучения документации, ограничения базовой модели X1.
      </p>
    </div>
  );
};

export default XesimReviews;
