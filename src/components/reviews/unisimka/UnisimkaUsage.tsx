import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const UnisimkaUsage = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Установка и использование</h3>
      
      <p className="leading-relaxed mb-6">
        Процесс настройки Unisimka состоит из нескольких этапов: первичная установка, загрузка профилей и переключение между ними.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Перед началом работы</h4>
            <p className="text-sm leading-relaxed mb-3">
              Для настройки Unisimka потребуется Android-устройство (версия 9.0+) с установленным приложением UNISIMKA из Google Play или RuStore. Пользователям iPhone необходимо загрузить профили через Android, затем переставить карту.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Приложение UNISIMKA (Android)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>QR-коды eSIM от операторов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Стабильное интернет-соединение</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Первичная установка на Android</h4>

      <div className="grid gap-4 my-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
          <div className="flex-1">
            <Card className="border-2 border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-4">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Download" size={20} className="text-blue-600" />
                  Установка приложения
                </h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Скачайте приложение UNISIMKA из Google Play или RuStore. Убедитесь, что у приложения есть все необходимые разрешения.
                </p>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-xs font-mono">
                    Google Play → UNISIMKA → Установить
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
          <div className="flex-1">
            <Card className="border-2 border-purple-500/30 bg-purple-500/5">
              <CardContent className="pt-4">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="CreditCard" size={20} className="text-purple-600" />
                  Установка SIM-карты
                </h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Выключите смартфон, извлеките лоток и вставьте Unisimka в свободный SIM-слот. Используйте переходники при необходимости.
                </p>
                <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <p className="text-xs">
                    <strong>Важно:</strong> При первой установке не извлекайте карту до завершения настройки
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
          <div className="flex-1">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-4">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Power" size={20} className="text-green-600" />
                  Первый запуск
                </h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Включите телефон и запустите приложение UNISIMKA. Приложение автоматически обнаружит карту и предложит начать настройку.
                </p>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-xs">
                    Если карта не обнаружена – проверьте, что SIM активна в настройках телефона
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Добавление eSIM профилей (QR-код)</h4>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="QrCode" size={28} className="text-blue-600" />
            <h5 className="font-semibold">Получение QR-кода</h5>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Закажите eSIM у оператора (МТС, Билайн, Tele2, зарубежные провайдеры). Вам придёт QR-код по email или в личном кабинете.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span>МТС: сайт/приложение МТС → eSIM</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span>Билайн: личный кабинет → Услуги → eSIM</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span>Airalo, Holafly: заказ → QR в email</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-purple-500/30 bg-purple-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Camera" size={28} className="text-purple-600" />
            <h5 className="font-semibold">Сканирование в приложении</h5>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Откройте приложение UNISIMKA, нажмите «Добавить профиль» → «Сканировать QR-код» и наведите камеру на код.
          </p>
          <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <p className="text-xs font-mono">
              Приложение → + → Scan QR → Подтвердить
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 p-5 rounded-xl border-2 border-green-500/30 bg-green-500/5">
        <h5 className="font-semibold mb-3 flex items-center gap-2">
          <Icon name="List" size={20} className="text-green-600" />
          Процесс загрузки профиля
        </h5>
        <div className="grid sm:grid-cols-4 gap-3">
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="text-2xl mb-1">📱</div>
            <p className="text-xs font-semibold mb-1">1. Сканирование</p>
            <p className="text-xs text-muted-foreground">QR-код распознан</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="text-2xl mb-1">🔄</div>
            <p className="text-xs font-semibold mb-1">2. Загрузка</p>
            <p className="text-xs text-muted-foreground">Профиль скачивается</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="text-2xl mb-1">💾</div>
            <p className="text-xs font-semibold mb-1">3. Запись</p>
            <p className="text-xs text-muted-foreground">Сохранение на карту</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <div className="text-2xl mb-1">✅</div>
            <p className="text-xs font-semibold mb-1">4. Готово</p>
            <p className="text-xs text-muted-foreground">Профиль добавлен</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Время загрузки: 30-60 секунд. Требуется стабильное интернет-соединение.
        </p>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Переключение профилей</h4>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Smartphone" size={32} className="text-green-600" />
              <div>
                <h4 className="font-bold text-foreground">На Android</h4>
                <span className="text-xs text-green-600 font-semibold">Через приложение</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-xs mb-2 font-semibold">Алгоритм переключения:</p>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>Откройте приложение UNISIMKA</li>
                  <li>Выберите нужный профиль из списка</li>
                  <li>Нажмите «Активировать»</li>
                  <li>Подождите 5-10 секунд</li>
                </ol>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs">
                  <strong>Удобно:</strong> Можно задать имена профилям (МТС дом, Билайн роуминг и т.д.)
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
                <h4 className="font-bold text-foreground">На iPhone</h4>
                <span className="text-xs text-blue-600 font-semibold">Через SIM-меню (V2)</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs mb-2 font-semibold">Алгоритм переключения:</p>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>Откройте Настройки → SIM-программы</li>
                  <li>Выберите UNISIMKA</li>
                  <li>Выберите профиль из списка</li>
                  <li>Подтвердите переключение</li>
                </ol>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs">
                  <strong>Напоминание:</strong> Добавление новых профилей только через Android
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Использование на нескольких устройствах</h4>

      <div className="space-y-4 my-6">
        <div className="p-5 rounded-xl border-2 border-purple-500/30 bg-purple-500/5">
          <div className="flex items-start gap-3 mb-3">
            <Icon name="Layers" size={24} className="text-purple-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Один профиль на разных устройствах</h5>
              <p className="text-sm text-muted-foreground mt-2 mb-3">
                Unisimka – это физическая карта, поэтому работает только в одном устройстве одновременно. Для использования на другом устройстве нужно переставить карту.
              </p>
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-xs">
                  <strong>Сценарий:</strong> Основной телефон + планшет → переставлять Unisimka при необходимости
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-3 mb-3">
            <Icon name="Users" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Dual-SIM конфигурация</h5>
              <p className="text-sm text-muted-foreground mt-2 mb-3">
                Идеальный вариант: обычная SIM в одном слоте, Unisimka с 15 профилями во втором. Можно использовать два номера одновременно.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-2 rounded bg-white/50 dark:bg-gray-800/50">
                  <p className="text-xs font-semibold mb-1">Слот 1: Обычная SIM</p>
                  <p className="text-xs text-muted-foreground">Основной номер (звонки, SMS)</p>
                </div>
                <div className="p-2 rounded bg-white/50 dark:bg-gray-800/50">
                  <p className="text-xs font-semibold mb-1">Слот 2: Unisimka</p>
                  <p className="text-xs text-muted-foreground">15 профилей eSIM (интернет, роуминг)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5">
          <div className="flex items-start gap-3 mb-3">
            <Icon name="Wifi" size={24} className="text-blue-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold">Модемы и роутеры</h5>
              <p className="text-sm text-muted-foreground mt-2 mb-3">
                Загрузите профили нескольких операторов на Android, затем переставьте в модем. Для смены профиля временно вернуть в телефон.
              </p>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-xs">
                  <strong>Пример:</strong> Путешествие с роутером → загрузить eSIM Турции, Египта, ОАЭ → переключать по прибытии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
        <div className="flex items-start gap-4">
          <Icon name="AlertTriangle" size={32} className="text-red-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Типичные ошибки при использовании</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Частое извлечение карты:</strong> Может привести к повреждению контактов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Переполнение памяти:</strong> Удаляйте неиспользуемые профили перед добавлением новых</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Слабое соединение при загрузке:</strong> Используйте Wi-Fi для скачивания профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-1" />
                <span><strong>Отключение приложения системой:</strong> Добавьте UNISIMKA в автозапуск (особенно Xiaomi)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-6 p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Полезные советы</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Присваивайте понятные названия профилям (МТС основной, Билайн роуминг и т.д.)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Сохраняйте QR-коды eSIM в облаке на случай сброса Unisimka</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Активируйте нужный профиль заранее перед поездкой за границу</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Используйте версию V2 для максимальной совместимости с разными устройствами</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnisimkaUsage;
