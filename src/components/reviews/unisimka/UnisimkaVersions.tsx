import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const UnisimkaVersions = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Версии Unisimka: V1, V2 (Unisimka+)</h3>
      
      <p className="leading-relaxed mb-6">
        Линейка Unisimka включает два поколения устройств с разными возможностями управления профилями.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                V1
              </div>
              <div>
                <h4 className="font-bold text-foreground">Unisimka (базовая)</h4>
                <span className="text-sm text-muted-foreground">2024 год • ~2200 ₽</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">До 15 профилей (512 КБ памяти)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Android 9+ через приложение</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Поддержка 4G/LTE и 5G</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="X" size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Нет SIM-меню (только Android)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs text-muted-foreground">
                <strong>Для кого:</strong> Владельцы Android-смартфонов без встроенной eSIM
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
                V2
              </div>
              <div>
                <h4 className="font-bold text-foreground">Unisimka+ (обновлённая)</h4>
                <span className="text-sm text-muted-foreground">2025 год • ~3100 ₽</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">До 15 профилей (512 КБ памяти)</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Android через приложение</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm"><strong>SIM Toolkit меню</strong> для iPhone</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Кнопочные телефоны, модемы, роутеры</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <p className="text-xs text-muted-foreground">
                <strong>Для кого:</strong> Универсальное решение для любых устройств
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Технические характеристики</h4>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5">
          <Icon name="HardDrive" size={24} className="text-blue-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Память профилей</h5>
          <p className="text-xs text-muted-foreground mb-2">
            512 КБ eUICC памяти для хранения eSIM-профилей
          </p>
          <p className="text-xs font-mono">
            МТС ~46 КБ • Билайн ~80 КБ • T-Mobile ~100 КБ
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-green-500/30 bg-green-500/5">
          <Icon name="Layers" size={24} className="text-green-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Количество профилей</h5>
          <p className="text-xs text-muted-foreground">
            До 15 лёгких профилей или 5-10 стандартных. Одновременно активен только один профиль.
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5">
          <Icon name="CreditCard" size={24} className="text-purple-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Формат карты</h5>
          <p className="text-xs text-muted-foreground">
            Nano-SIM с переходниками на micro-SIM и mini-SIM в комплекте
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-orange-500/30 bg-orange-500/5">
          <Icon name="Network" size={24} className="text-orange-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Сети</h5>
          <p className="text-xs text-muted-foreground">
            2G/3G/4G/LTE/5G – полная поддержка всех стандартов связи
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-red-500/30 bg-red-500/5">
          <Icon name="Lock" size={24} className="text-red-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Безопасность</h5>
          <p className="text-xs text-muted-foreground">
            Стандартные PIN/PUK коды для каждого профиля, защита eUICC
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-cyan-500/30 bg-cyan-500/5">
          <Icon name="Zap" size={24} className="text-cyan-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Переключение</h5>
          <p className="text-xs text-muted-foreground">
            5-10 секунд через приложение или SIM-меню
          </p>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
        <div className="flex items-start gap-4">
          <Icon name="AlertCircle" size={32} className="text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">О версии "Cloud"</h4>
            <p className="text-sm leading-relaxed">
              Специальной версии Unisimka с облачным хранением профилей не существует. Напротив, концепция Unisimka – <strong>локальное хранение eSIM на карте без облака</strong>. Все профили записываются напрямую на карту через приложение, данные не отправляются на сторонние серверы. Это повышает конфиденциальность и автономность.
            </p>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Сравнение версий</h4>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left p-3 font-semibold">Функция</th>
              <th className="text-center p-3 font-semibold">V1 (базовая)</th>
              <th className="text-center p-3 font-semibold">V2 (Unisimka+)</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="border-b border-border">
              <td className="p-3">Память профилей</td>
              <td className="text-center p-3">512 КБ</td>
              <td className="text-center p-3">512 КБ</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Макс. профилей</td>
              <td className="text-center p-3">До 15</td>
              <td className="text-center p-3">До 15</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Приложение Android</td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">SIM Toolkit меню</td>
              <td className="text-center p-3"><Icon name="X" className="text-red-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Поддержка iPhone</td>
              <td className="text-center p-3 text-orange-600">Ограничена</td>
              <td className="text-center p-3 text-green-600">Полная</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Кнопочные телефоны</td>
              <td className="text-center p-3"><Icon name="X" className="text-red-600 inline" size={18} /></td>
              <td className="text-center p-3"><Icon name="Check" className="text-green-600 inline" size={18} /></td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Цена</td>
              <td className="text-center p-3">~2200 ₽</td>
              <td className="text-center p-3">~3100 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <p className="text-sm leading-relaxed">
          <strong>Рекомендация:</strong> Для большинства пользователей Unisimka+ (V2) предпочтительнее благодаря универсальности. Разница в цене (~30-40%) оправдана поддержкой iPhone, кнопочных телефонов и модемов через SIM-меню.
        </p>
      </div>
    </div>
  );
};

export default UnisimkaVersions;
