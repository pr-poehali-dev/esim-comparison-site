import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const NineEsimCompatibility = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Совместимость и сценарии использования</h3>
      
      <p className="leading-relaxed mb-6">
        9eSIM-адаптер можно задействовать практически в любом устройстве с разъёмом под SIM-карту. Рассмотрим основные категории устройств и особенности использования.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Smartphone" size={32} className="text-green-600" />
              <h4 className="text-lg font-bold text-foreground">Android-смартфоны</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Основная платформа для управления 9eSIM</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Полноценная загрузка и переключение профилей через приложение</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Требуется Android 9+ с поддержкой OMAPI</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Отлично работает: Pixel, Motorola, OnePlus, Xiaomi</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-500/30 bg-orange-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="AlertTriangle" size={32} className="text-orange-600" />
              <h4 className="text-lg font-bold text-foreground">Samsung (осторожно!)</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span>Системные конфликты с физическими eSIM-адаптерами</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span>Возможна потеря IMEI и сброс к заводским настройкам</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span>Лучше работает в одиночку без второй SIM</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span>Проблемы на: S20, S21, S22, S23, Note серии</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Apple" size={32} className="text-blue-600" />
              <h4 className="text-lg font-bold text-foreground">iPhone (iOS)</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                <span>Работает через SIM Toolkit меню (только V0/V3)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                <span>Загрузка профилей только через Android или ПК</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                <span>Переключение профилей в меню «Приложения SIM»</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                <span>Подходит для iPhone 8, XR, 11, SE 2/3 без eSIM</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Router" size={32} className="text-purple-600" />
              <h4 className="text-lg font-bold text-foreground">Роутеры и модемы</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-purple-600 flex-shrink-0 mt-1" />
                <span>4G/5G мобильные роутеры, USB-модемы</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-purple-600 flex-shrink-0 mt-1" />
                <span>Работает с MikroTik, OpenWrt роутерами</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-purple-600 flex-shrink-0 mt-1" />
                <span>Переключение профилей перед установкой в роутер</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-purple-600 flex-shrink-0 mt-1" />
                <span>IoT-устройства, GPS-трекеры</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="my-8">
        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <Icon name="Tablet" size={24} />
          Другие устройства
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <Icon name="Tablet" size={24} className="text-primary mb-2" />
            <p className="text-sm font-semibold mb-1">Планшеты</p>
            <p className="text-xs text-muted-foreground">Android и iPad с SIM-слотом</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <Icon name="Laptop" size={24} className="text-primary mb-2" />
            <p className="text-sm font-semibold mb-1">Ноутбуки</p>
            <p className="text-xs text-muted-foreground">С встроенным LTE/5G модулем</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <Icon name="Car" size={24} className="text-primary mb-2" />
            <p className="text-sm font-semibold mb-1">Автомобильные</p>
            <p className="text-xs text-muted-foreground">GPS-трекеры, бортовые системы</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <Icon name="Phone" size={24} className="text-primary mb-2" />
            <p className="text-sm font-semibold mb-1">Кнопочные</p>
            <p className="text-xs text-muted-foreground">Старые телефоны с SIM Toolkit</p>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
        <div className="flex items-start gap-4">
          <Icon name="AlertCircle" size={32} className="text-red-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Ограничения совместимости</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Samsung Galaxy:</strong> Высокий риск сбоев, особенно в Dual-SIM режиме</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Только один профиль активен:</strong> Нет одновременной работы нескольких профилей (пока нет MEP)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Пустая карта:</strong> Не удаляйте все профили – телефон может не видеть SIM</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>OMAPI:</strong> Не все Android-устройства поддерживают, особенно старые или кастомные прошивки</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        <strong>Вывод:</strong> 9eSIM-адаптеры поддерживают почти все сценарии, но требуют понимания ограничений. В Android-среде они работают наиболее полно, в iOS – с ограничениями (только переключение), в роутерах – функциональны, но без удобного управления на самом устройстве.
      </p>
    </div>
  );
};

export default NineEsimCompatibility;
