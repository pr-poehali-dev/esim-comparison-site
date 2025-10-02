import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const EsimMeCompatibility = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Совместимость с устройствами</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Smartphone" size={24} className="text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Android-смартфоны</h4>
                <p className="text-sm">Основная и официально поддерживаемая категория. Совместимость с большинством Android 9.0+, для некоторых брендов (Samsung, Huawei, Xiaomi) поддержка даже на Android 7+. Более 10,000 моделей совместимы.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Apple" size={24} className="text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">iPhone (iOS)</h4>
                <p className="text-sm">Официально не поддерживается приложением. Работает в режиме "только чтение" - можно использовать активный профиль, но управлять только через Android. Нет приложения для iOS.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Tablet" size={24} className="text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Планшеты</h4>
                <p className="text-sm">Планшеты на Android с SIM-лотком и Android 9+ могут работать с адаптером. Windows и iPad не поддерживаются из-за отсутствия приложения.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Wifi" size={24} className="text-indigo-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Модемы и роутеры</h4>
                <p className="text-sm">Работает во всём, что имеет стандартный слот nano-SIM. Активный профиль превращает адаптер в полноценную SIM-карту для любого оборудования.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
        <div className="flex items-start gap-4">
          <Icon name="AlertTriangle" size={32} className="text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">⚠️ Важные ограничения</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Требуется полноценная версия Android (облегчённые версии Go, One не подходят)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>На некоторых телефонах работает только в определённом слоте (SIM1 или SIM2)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>При двух SIM может потребоваться временно вынуть вторую для настройки</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm">
        <strong>Рекомендация:</strong> Перед покупкой установите бесплатное приложение eSIM.me APP из Google Play и запустите проверку совместимости. Компания даёт 14-дневную гарантию возврата денег, если карта не подошла.
      </p>
    </div>
  );
};

export default EsimMeCompatibility;
