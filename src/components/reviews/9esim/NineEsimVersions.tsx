import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const NineEsimVersions = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Версии 9eSIM: V0, V2, V3, V4</h3>
      
      <p className="leading-relaxed mb-6">
        Линейка 9eSIM насчитывает несколько версий карт с различными характеристиками. Каждая версия отличается объёмом памяти, набором функций и поддержкой технологий.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-blue-600">9eSIM V0</h4>
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">Бюджет</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Cpu" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Чип:</strong> Eastcompeace (Китай)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="HardDrive" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Память:</strong> ~420-450 KB (до 15 профилей)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Menu" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>STK-меню:</strong> Да ✅</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="DollarSign" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Цена:</strong> $15</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Простая версия для умеренных пользователей. Поддерживает iPhone через STK-меню.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-purple-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-purple-600">9eSIM V2</h4>
              <span className="px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">Android</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Cpu" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Чип:</strong> Kigen (Великобритания)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="HardDrive" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Память:</strong> ~1.5 МБ (до 50 профилей)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Menu" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>STK-меню:</strong> Нет ❌</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="DollarSign" size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Цена:</strong> ~$20</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Переключение только через приложение. Подходит для Android-пользователей.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-green-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-green-600">9eSIM V3</h4>
              <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">Рекомендуем</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Cpu" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Чип:</strong> Kigen (Великобритания)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="HardDrive" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Память:</strong> ~1.5 МБ (до 50 профилей)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Menu" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>STK-меню:</strong> Да ✅</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="DollarSign" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Цена:</strong> $24</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Флагманская версия. Большой объём памяти + STK для iPhone. Максимальная универсальность.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-orange-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-orange-600">9eSIM V4</h4>
              <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">Будущее</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="Zap" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Статус:</strong> В разработке</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Layers" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>MEP:</strong> Множественные профили одновременно</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="TrendingUp" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Улучшения:</strong> Больше памяти, новые стандарты</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Calendar" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>Релиз:</strong> Пока не анонсирована</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Ожидаемая поддержка MEP для одновременной активации нескольких профилей.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Итог по характеристикам</h4>
            <p className="text-sm leading-relaxed">
              Все адаптеры 9eSIM предоставляют базовую функциональность записи и хранения множества eSIM-профилей с неограниченным числом загрузок. <strong>V3 – оптимальный выбор</strong> для большинства пользователей благодаря большой памяти и STK-меню для iPhone. V0 подойдёт для экономных, V2 – для чисто Android-использования.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NineEsimVersions;
