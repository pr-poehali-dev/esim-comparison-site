import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const UnisimkaCompatibility = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Совместимость с устройствами</h3>
      
      <p className="leading-relaxed mb-6">
        Unisimka работает с широким спектром устройств, от смартфонов до модемов и роутеров.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Smartphone" size={32} className="text-green-600" />
              <div>
                <h4 className="font-bold text-foreground">Android-смартфоны</h4>
                <span className="text-xs text-green-600 font-semibold">✓ Полная поддержка</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Изначально адаптер ориентирован на Android 9.0 и выше с полным функционалом через приложение UNISIMKA.
              </p>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <h5 className="font-semibold text-sm mb-2">Требования:</h5>
                <ul className="text-xs space-y-1">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Android 9.0 и выше</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Наличие Google Play API (для Google Pay)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Приложение UNISIMKA из Google Play / RuStore</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs">
                  <strong>Dual-SIM устройства:</strong> Особенно удобны – одна обычная SIM + Unisimka с 15 профилями во втором слоте
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Apple" size={32} className="text-blue-600" />
              <div>
                <h4 className="font-bold text-foreground">iPhone (iOS)</h4>
                <span className="text-xs text-blue-600 font-semibold">✓ Unisimka+ (V2)</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Поддержка появилась с выходом Unisimka+ через SIM Toolkit меню (STK).
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <h5 className="font-semibold text-sm mb-2">Алгоритм использования:</h5>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>Загрузить профили через Android-устройство</li>
                  <li>Переставить карту в iPhone</li>
                  <li>Переключать профили через «Настройки → SIM-программы»</li>
                </ol>
              </div>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-xs">
                  <strong>Ограничение:</strong> Нет iOS-приложения. Для добавления/удаления профилей нужен доступ к Android-устройству
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Tablet" size={32} className="text-purple-600" />
              <div>
                <h4 className="font-bold text-foreground">Планшеты</h4>
                <span className="text-xs text-purple-600 font-semibold">✓ Android / iPad</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Android-планшеты работают аналогично смартфонам (требуется SIM-слот и Android 9+).
              </p>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-xs mb-2">
                  <strong>iPad:</strong> Unisimka+ поддерживает iPad с SIM-лотом через SIM Toolkit меню
                </p>
                <p className="text-xs text-muted-foreground">
                  Примеры: Samsung Galaxy Tab, Huawei MediaPad, iPad с SIM-слотом
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-500/30 bg-orange-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Wifi" size={32} className="text-orange-600" />
              <div>
                <h4 className="font-bold text-foreground">Модемы и роутеры</h4>
                <span className="text-xs text-orange-600 font-semibold">✓ С нюансами</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                4G/5G роутеры, USB-модемы видят Unisimka как обычную SIM-карту.
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs mb-2">
                  <strong>Смена профиля:</strong> Требуется временно переставить карту в смартфон, переключить профиль и вернуть обратно
                </p>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-xs">
                  <strong>Сценарий:</strong> Путешествие с роутером – загрузить eSIM нескольких стран, переключать по необходимости
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Проблемные устройства</h4>

      <div className="space-y-4 my-6">
        <div className="p-4 rounded-lg border-2 border-red-500/30 bg-red-500/5">
          <div className="flex items-start gap-3">
            <Icon name="AlertTriangle" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-sm mb-2">Некоторые модели Xiaomi (MIUI)</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Требуют отключения проверки SIM в настройках. Приложение нужно добавить в автозапуск.
              </p>
              <p className="text-xs font-semibold text-red-600">
                Решение: Отключить «выключать SIM, если не активна» в MIUI
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-sm mb-2">Старые кнопочные телефоны</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Не все отображают SIM-меню. Например, Samsung S5610 не показал меню Unisimka.
              </p>
              <p className="text-xs font-semibold text-orange-600">
                Совместимость: Nokia, Alcatel с поддержкой SIMToolkit обычно работают
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-start gap-3">
            <Icon name="Laptop" size={24} className="text-yellow-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-sm mb-2">Ноутбуки с WWAN-модулем</h5>
              <p className="text-xs text-muted-foreground mb-2">
                Windows-ноутбуки: нет приложения, SIM-меню недоступно
              </p>
              <p className="text-xs font-semibold text-yellow-600">
                Решение: Активировать профиль на телефоне, затем вставить в ноутбук
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Быстрая справка по совместимости</h4>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-3 font-semibold">Устройство</th>
              <th className="text-center p-3 font-semibold">V1</th>
              <th className="text-center p-3 font-semibold">V2</th>
              <th className="text-left p-3 font-semibold">Примечание</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="p-3">Android 9+ смартфоны</td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="p-3 text-xs">Полный функционал</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">iPhone / iPad</td>
              <td className="text-center p-3"><Icon name="Minus" className="text-orange-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="p-3 text-xs">Через SIM-меню (загрузка на Android)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Кнопочные телефоны</td>
              <td className="text-center p-3"><Icon name="X" className="text-red-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="p-3 text-xs">Если поддерживают STK</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">4G/5G модемы</td>
              <td className="text-center p-3"><Icon name="Minus" className="text-orange-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Minus" className="text-orange-600 inline" size={18} /></td>
              <td className="p-3 text-xs">Смена профиля через телефон</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Android планшеты</td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="p-3 text-xs">Требуется SIM-слот</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Совет перед покупкой</h4>
            <p className="text-sm leading-relaxed">
              Скачайте приложение UNISIMKA на Android-устройство и проверьте совместимость через встроенный тест. Это убережёт от ситуации, когда карта куплена, а телефон её не поддерживает.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnisimkaCompatibility;
