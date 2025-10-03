import Icon from "@/components/ui/icon";

const UnisimkaProsAndCons = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Преимущества и недостатки</h3>
      
      <p className="leading-relaxed mb-6">
        Детальный анализ плюсов и минусов Unisimka поможет определить, подходит ли это решение для ваших задач.
      </p>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="ThumbsUp" size={24} className="text-green-600" />
        Преимущества
      </h4>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Layers" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Множество профилей в одной карте</h5>
              <p className="text-sm text-muted-foreground mt-1">
                До 15 eSIM-профилей на одной физической карте. Идеально для путешественников и тех, кто использует SIM разных операторов.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Globe" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Универсальность операторов</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Поддержка любых операторов: российских (МТС, Билайн, Мегафон) и зарубежных (Airalo, Holafly, T-Mobile).
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Smartphone" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">eSIM для старых телефонов</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Добавляет поддержку eSIM на Android-смартфоны без встроенного чипа eUICC. Не нужно покупать новый телефон.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Shield" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Локальное хранение</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Все профили хранятся на карте, не передаются в облако. Повышенная конфиденциальность, работа без интернета после загрузки.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Zap" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Быстрое переключение</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Смена оператора за 5-10 секунд через приложение или SIM-меню. Не нужно физически менять карты.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="DollarSign" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Экономия на роуминге</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Загрузить локальные eSIM при поездках за границу дешевле роуминга домашнего оператора в разы.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Package" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Доступность в России</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Продается на Ozon, Wildberries, Яндекс.Маркет с быстрой доставкой и русскоязычной поддержкой.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Network" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Поддержка всех сетей</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Работает с 2G/3G/4G/LTE/5G без ограничений. Полная совместимость со всеми стандартами связи.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Users" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Удобство для Dual-SIM</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Идеальна для двухсимочных телефонов: основная SIM + Unisimka с 15 профилями для путешествий.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Lock" size={24} className="text-green-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Не требует регистрации</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Работает без создания аккаунтов. Просто вставил, загрузил профили через QR-код и пользуешься.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
        <Icon name="ThumbsDown" size={24} className="text-red-600" />
        Недостатки
      </h4>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Apple" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Ограничения на iPhone</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Нет iOS-приложения. Для загрузки профилей нужен Android-смартфон, только переключение возможно на iPhone (V2).
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="HardDrive" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Ограниченная память</h5>
              <p className="text-sm text-muted-foreground mt-1">
                512 КБ достаточно для 15 легких профилей, но крупные профили (T-Mobile ~100 КБ) занимают больше места.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Minus" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Один активный профиль</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Одновременно работает только один eSIM. Нельзя использовать два номера одновременно (как на встроенном eSIM).
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="RefreshCw" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Время переключения</h5>
              <p className="text-sm text-muted-foreground mt-1">
                5-10 секунд на смену профиля, требуется перезагрузка сети. Не мгновенно, как переключение обычных SIM в Dual-SIM.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Smartphone" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Проблемы с некоторыми устройствами</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Xiaomi (MIUI), старые кнопочные телефоны, ноутбуки с WWAN могут требовать дополнительных настроек или не работать.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="AlertCircle" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Риск потери профилей</h5>
              <p className="text-sm text-muted-foreground mt-1">
                При повреждении карты или сбросе все профили теряются. QR-коды некоторых операторов одноразовые.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="DollarSign" size={24} className="text-red-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Цена выше обычной SIM</h5>
              <p className="text-sm text-muted-foreground mt-1">
                2200-3100 ₽ – существенные затраты. Окупается только при частом использовании eSIM или путешествиях.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-yellow-500/10">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Wifi" size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-foreground">Неудобство для модемов</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Смена профиля требует извлечения карты и переноса в телефон, что неудобно для стационарных роутеров.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Сравнение версий: плюсы и минусы</h4>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold">
              V1
            </div>
            <h4 className="font-bold text-foreground">Unisimka (базовая)</h4>
          </div>
          
          <div className="space-y-3 mb-4">
            <div>
              <p className="text-xs font-semibold text-green-600 mb-2">Плюсы:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Дешевле (~2200 ₽)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Идеальна для Android-пользователей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Полный функционал через приложение</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-red-600 mb-2">Минусы:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start gap-2">
                  <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Не работает на iPhone</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Нет SIM-меню для других устройств</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Ограниченная совместимость</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-xs">
              <strong>Вывод:</strong> Для тех, кто уверен, что будет использовать только Android
            </p>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-purple-500/30 bg-purple-500/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold">
              V2
            </div>
            <h4 className="font-bold text-foreground">Unisimka+ (обновлённая)</h4>
          </div>
          
          <div className="space-y-3 mb-4">
            <div>
              <p className="text-xs font-semibold text-green-600 mb-2">Плюсы:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Универсальность (Android, iPhone, модемы)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>SIM Toolkit меню</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Plus" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Кнопочные телефоны, роутеры</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-red-600 mb-2">Минусы:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-start gap-2">
                  <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Дороже (~3100 ₽, +40%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Minus" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Всё равно нужен Android для загрузки</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
            <p className="text-xs">
              <strong>Вывод:</strong> Лучший выбор для универсального использования
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="TrendingUp" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Итоговая оценка</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-xs font-semibold mb-1">Главное преимущество</p>
                <p className="text-sm text-muted-foreground">
                  Добавление eSIM на старые Android-телефоны с возможностью хранить до 15 профилей
                </p>
              </div>
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-xs font-semibold mb-1">Главный недостаток</p>
                <p className="text-sm text-muted-foreground">
                  Зависимость от Android для управления профилями, даже для пользователей iPhone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnisimkaProsAndCons;
