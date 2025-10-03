import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const UnisimkaConclusion = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Заключение и рекомендации</h3>
      
      <p className="leading-relaxed mb-6">
        Unisimka – это специализированное решение для определённых сценариев использования. Разберём, кому стоит её покупать, а кому лучше выбрать альтернативы.
      </p>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="UserCheck" size={24} className="text-green-600" />
        Кому стоит купить Unisimka
      </h4>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Plane" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Частые путешественники</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Если вы часто ездите за границу и хотите избежать роуминга, Unisimka с локальными eSIM разных стран – идеальное решение.
            </p>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs">
                <strong>Пример:</strong> Загрузить eSIM 10 стран, переключаться по прибытии. Экономия до 80% на связи.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Smartphone" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Владельцы старых Android</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              У вас телефон без встроенного eSIM, но вы хотите использовать виртуальные SIM-карты. Unisimka дешевле покупки нового телефона.
            </p>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs">
                <strong>Пример:</strong> Samsung A52, Xiaomi Redmi Note 11 – добавить eSIM за 2200₽ вместо покупки нового телефона.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Layers" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Пользователи нескольких SIM</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Нужно переключаться между несколькими операторами (работа, личное, тестирование тарифов) – Unisimka заменит пачку физических карт.
            </p>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs">
                <strong>Пример:</strong> Тестировать тарифы МТС, Билайн, Мегафон, Тинькофф Мобайл в одной карте.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Users" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Dual-SIM энтузиасты</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Имеете двухсимочный телефон и хотите расширить возможности. Одна обычная SIM + Unisimka с 15 профилями.
            </p>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs">
                <strong>Пример:</strong> Слот 1 – основной номер, Слот 2 – Unisimka с интернет-тарифами разных операторов.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Apple" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Пользователи iPhone (V2)</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Если есть доступ к Android-устройству для загрузки профилей, Unisimka+ (V2) позволит переключать профили на iPhone через SIM-меню.
            </p>
            <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <p className="text-xs">
                <strong>Важно:</strong> Нужен Android (свой, знакомых, планшет) для первоначальной настройки и добавления профилей.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Wifi" size={28} className="text-green-600" />
              <h5 className="font-semibold text-foreground">Владельцы модемов/роутеров</h5>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Используете 4G/5G роутер в путешествиях и хотите заранее загрузить профили разных стран для быстрого переключения.
            </p>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs">
                <strong>Пример:</strong> Автопутешествие по Европе – загрузить eSIM 5 стран, менять через телефон при переезде.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="UserX" size={24} className="text-red-600" />
        Кому НЕ стоит покупать
      </h4>

      <div className="space-y-4 my-6">
        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3">
            <Icon name="Apple" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Владельцы только iPhone без доступа к Android</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Если у вас только iPhone и нет возможности использовать Android-устройство, Unisimka будет неудобна. Управление профилями невозможно без Android.
              </p>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-xs">
                  <strong>Альтернатива:</strong> Купить iPhone с встроенным eSIM или использовать eSIM напрямую от оператора.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3">
            <Icon name="Home" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Пользователи одного оператора без путешествий</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Если вы пользуетесь только одним оператором и не путешествуете за границу, переплата за Unisimka не имеет смысла.
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs">
                  <strong>Вывод:</strong> Обычная SIM-карта полностью покрывает ваши потребности.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3">
            <Icon name="Smartphone" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Владельцы телефонов со встроенным eSIM</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Если ваш телефон уже поддерживает eSIM (iPhone XS+, Samsung S20+, Google Pixel 3+), Unisimka избыточна.
              </p>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-xs">
                  <strong>Исключение:</strong> Нужно более 2-3 профилей одновременно или устройство с ограниченным количеством eSIM.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3">
            <Icon name="DollarSign" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Ищущие бюджетное решение</h5>
              <p className="text-sm text-muted-foreground mb-2">
                2200-3100₽ – это не дёшево. Если нужна просто вторая SIM или редкие поездки, дешевле купить локальную SIM по прибытии.
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs">
                  <strong>Расчёт окупаемости:</strong> Unisimka окупается при 3-4 поездках за границу или постоянном использовании нескольких операторов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="TrendingUp" size={24} className="text-blue-600" />
        Актуальность в 2025 году
      </h4>

      <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-sm mb-1">Растущий рынок eSIM</h5>
              <p className="text-sm text-muted-foreground">
                Всё больше операторов предлагают eSIM-профили, включая зарубежных провайдеров. Unisimka становится актуальнее с расширением выбора eSIM.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-sm mb-1">Поддержка новых устройств</h5>
              <p className="text-sm text-muted-foreground">
                Выход V2 с SIM-меню расширил совместимость на iPhone, кнопочные телефоны и модемы. Разработчики продолжают улучшать продукт.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-sm mb-1">Альтернатива импортным аналогам</h5>
              <p className="text-sm text-muted-foreground">
                eSIM.me и 5ber сложнее купить в России. Unisimka доступна на локальных маркетплейсах с быстрой доставкой.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="AlertCircle" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-sm mb-1">Конкуренция со встроенными eSIM</h5>
              <p className="text-sm text-muted-foreground">
                Всё больше Android-смартфонов получают встроенную поддержку eSIM. Через 2-3 года Unisimka может стать менее актуальной для новых устройств.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="AlertTriangle" size={24} className="text-orange-600" />
        Потенциальные подводные камни
      </h4>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-2 mb-2">
            <Icon name="AlertCircle" size={20} className="text-orange-600 flex-shrink-0" />
            <h5 className="font-semibold text-sm">Одноразовые QR-коды</h5>
          </div>
          <p className="text-xs text-muted-foreground">
            Некоторые операторы выдают QR-код одноразово. При потере профиля из-за сброса Unisimka придётся заказывать новый eSIM.
          </p>
        </div>

        <div className="p-4 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-2 mb-2">
            <Icon name="HardDrive" size={20} className="text-orange-600 flex-shrink-0" />
            <h5 className="font-semibold text-sm">Ограничение памяти</h5>
          </div>
          <p className="text-xs text-muted-foreground">
            512 КБ может не хватить для одновременного хранения всех нужных профилей. Планируйте заранее, какие профили действительно необходимы.
          </p>
        </div>

        <div className="p-4 rounded-xl border-2 border-red-500/30 bg-red-500/5">
          <div className="flex items-start gap-2 mb-2">
            <Icon name="XCircle" size={20} className="text-red-600 flex-shrink-0" />
            <h5 className="font-semibold text-sm">Риск повреждения</h5>
          </div>
          <p className="text-xs text-muted-foreground">
            Частое извлечение/установка карты может повредить контакты. Используйте Unisimka в устройстве, где редко нужно менять SIM.
          </p>
        </div>

        <div className="p-4 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-start gap-2 mb-2">
            <Icon name="RefreshCw" size={20} className="text-yellow-600 flex-shrink-0" />
            <h5 className="font-semibold text-sm">Совместимость операторов</h5>
          </div>
          <p className="text-xs text-muted-foreground">
            Не все операторы гарантируют работу с Unisimka. Перед покупкой eSIM уточните совместимость с программируемыми SIM.
          </p>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="Lightbulb" size={24} className="text-green-600" />
        Советы перед покупкой
      </h4>

      <div className="space-y-3 my-6">
        <div className="p-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5 flex items-start gap-3">
          <Icon name="Search" size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm mb-1">Проверьте совместимость устройства</h5>
            <p className="text-xs text-muted-foreground">
              Скачайте приложение UNISIMKA на Android и запустите тест совместимости до покупки карты.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5 flex items-start gap-3">
          <Icon name="Package" size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm mb-1">Выберите правильную версию</h5>
            <p className="text-xs text-muted-foreground">
              V1 – только для Android. V2 – универсальная (Android, iPhone, модемы). Разница в цене ~900₽.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-green-500/30 bg-green-500/5 flex items-start gap-3">
          <Icon name="Save" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm mb-1">Сохраняйте QR-коды</h5>
            <p className="text-xs text-muted-foreground">
              Делайте резервные копии QR-кодов eSIM в облаке на случай сброса Unisimka или потери профилей.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-orange-500/30 bg-orange-500/5 flex items-start gap-3">
          <Icon name="Calculator" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm mb-1">Рассчитайте окупаемость</h5>
            <p className="text-xs text-muted-foreground">
              Сравните стоимость Unisimka (2200-3100₽) с расходами на роуминг или покупку новых SIM. Окупается при частых поездках.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border-2 border-cyan-500/30 bg-cyan-500/5 flex items-start gap-3">
          <Icon name="Users" size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-semibold text-sm mb-1">Читайте отзывы на конкретное устройство</h5>
            <p className="text-xs text-muted-foreground">
              Поищите отзывы пользователей вашей модели телефона (особенно Xiaomi, Honor, старые Samsung).
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Award" size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-3">Финальная рекомендация</h4>
            <div className="space-y-3">
              <p className="text-sm leading-relaxed">
                <strong>Unisimka – это узкоспециализированное решение</strong>, которое идеально подходит для путешественников, пользователей Dual-SIM и владельцев Android-смартфонов без встроенного eSIM. Она решает конкретную задачу: добавить поддержку множества eSIM-профилей на устройства, которые изначально её не имеют.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-3 my-4">
                <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <div className="text-2xl mb-1">👍</div>
                  <p className="text-xs font-semibold mb-1">Рекомендуем</p>
                  <p className="text-xs text-muted-foreground">Частые поездки, несколько операторов</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-2xl mb-1">🤔</div>
                  <p className="text-xs font-semibold mb-1">Подумайте</p>
                  <p className="text-xs text-muted-foreground">Редкие путешествия, один оператор</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="text-2xl mb-1">👎</div>
                  <p className="text-xs font-semibold mb-1">Не советуем</p>
                  <p className="text-xs text-muted-foreground">Только iPhone, уже есть eSIM</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed">
                <strong>Версия V2 (Unisimka+)</strong> предпочтительнее для большинства пользователей благодаря универсальности и поддержке iPhone через SIM-меню. Разница в цене (~900₽) оправдана расширенной совместимостью.
              </p>

              <p className="text-sm leading-relaxed">
                Для пользователей iPhone без доступа к Android-устройству Unisimka будет неудобна – лучше рассмотреть покупку телефона с встроенным eSIM или использовать прямые eSIM от операторов.
              </p>

              <div className="mt-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-blue-600" />
                  Прогноз на 2025-2026
                </p>
                <p className="text-xs text-muted-foreground">
                  Unisimka останется актуальной для владельцев старых Android-устройств и путешественников. Однако с распространением встроенного eSIM в бюджетных смартфонах её целевая аудитория может сократиться. Покупка оправдана, если вы планируете использовать её в ближайшие 2-3 года.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 p-5 rounded-xl border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Icon name="Star" size={20} className="text-indigo-600" />
          Итоговая оценка Unisimka
        </h5>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <p className="text-xs text-muted-foreground mb-1">Функциональность</p>
            <div className="text-2xl font-bold text-green-600">9/10</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <p className="text-xs text-muted-foreground mb-1">Удобство</p>
            <div className="text-2xl font-bold text-blue-600">7/10</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <p className="text-xs text-muted-foreground mb-1">Цена/качество</p>
            <div className="text-2xl font-bold text-yellow-600">8/10</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
            <p className="text-xs text-muted-foreground mb-1">Совместимость</p>
            <div className="text-2xl font-bold text-orange-600">7/10</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border-2 border-green-500/30">
            <Icon name="Award" size={24} className="text-green-600" />
            <span className="text-lg font-bold text-green-600">Общая оценка: 7.8/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnisimkaConclusion;
