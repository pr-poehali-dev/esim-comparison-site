import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const SwitchEsimReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        Обзор eSIM-адаптеров Switch Pro и Switch Max от Plan B
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">План B и концепция eSIM-адаптеров Switch</h3>
          <p className="leading-relaxed mb-4">
            Plan B – это технологический бренд, специализирующийся на решениях для электронных SIM-карт (eSIM). 
            Одним из главных продуктов компании стала линейка адаптеров Switch, позволяющих добавить поддержку eSIM 
            практически любому устройству с разъёмом под обычную SIM-карту.
          </p>
          <p className="leading-relaxed mb-4">
            Идея проста: вместо того чтобы покупать новый телефон с eSIM или пользоваться дорогим роумингом, 
            вы вставляете специальный переходник Switch в слот SIM, тем самым «разблокируя» возможность использовать 
            цифровые профили eSIM на своем устройстве. По сути, это программируемая SIM-карта (её еще называют 
            removable eUICC), в память которой можно загрузить сразу несколько виртуальных SIM-профилей и 
            переключаться между ними при необходимости.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <div className="text-center p-8">
                <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-purple-600" />
                <p className="text-sm font-medium text-foreground">Адаптер Switch устанавливается как обычная nano-SIM</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            Как это работает? Адаптер Switch выглядит как обычная «симка» (nano-SIM) и устанавливается в телефон 
            точно так же. Внутри него – чип памяти eUICC, сертифицированный под eSIM. С помощью специального 
            мобильного приложения на этот чип загружаются eSIM-профили – например, местная SIM для страны 
            путешествия, рабочий номер, дополнительные тарифы разных операторов и т.д.
          </p>
          <p className="leading-relaxed">
            Бренд Plan B продвигает эти адаптеры под слоганом <strong>«Unlock the world, anytime, anywhere»</strong> 
            («Открой мир в любое время, в любом месте»), подчёркивая глобальную мобильность и свободу от 
            физических SIM-карт. Компания заявляет о возможности хранить до 15 разных eSIM-профилей в одном адаптере Switch.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Характеристики и возможности</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Cpu" size={24} className="text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Форм-фактор</h4>
                    <p className="text-sm">Стандартная nano-SIM, питание от разъёма телефона</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Database" size={24} className="text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Память</h4>
                    <p className="text-sm">~420 КБ, до 15 eSIM-профилей одновременно</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Smartphone" size={24} className="text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Совместимость</h4>
                    <p className="text-sm">Android, iPhone, роутеры, планшеты, смарт-часы</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Zap" size={24} className="text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Переключение</h4>
                    <p className="text-sm">За секунды через приложение или SIM-меню</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="leading-relaxed mb-4">
            <strong>Switch APP – управление через приложение:</strong> Для загрузки и организации eSIM-профилей 
            используется фирменное мобильное приложение Switch. С его помощью вы сканируете QR-коды электронных 
            «симок» и записываете профили в адаптер. Там же можно присвоить профилям удобные имена, просмотреть 
            список записанных eSIM и переключать активный профиль одним нажатием.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Switch Pro vs Switch Max: какой выбрать?</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="border-2 border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Icon name="Smartphone" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Switch Pro</h4>
                </div>
                <p className="text-sm mb-4 text-blue-700 dark:text-blue-400 font-medium">Только для Android</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Доступная цена (~$20)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Полная работа на Android</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>До 15 eSIM-профилей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Нет поддержки iOS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Нет SIM-меню (STK)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500/30 bg-purple-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon name="Crown" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Switch Max</h4>
                </div>
                <p className="text-sm mb-4 text-purple-700 dark:text-purple-400 font-medium">Android + iOS</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Работает с iPhone/iPad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Есть SIM-меню (STK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>До 15 eSIM-профилей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bluetooth-ридер (опция)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="TrendingUp" size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Выше цена (~$30-34)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
            <div className="flex items-start gap-4">
              <Icon name="Lightbulb" size={32} className="text-purple-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Какой выбрать?</h4>
                <p className="text-sm leading-relaxed">
                  <strong>Switch Pro</strong> – если вы пользуетесь только Android и хотите сэкономить.<br/>
                  <strong>Switch Max</strong> – если у вас iPhone, или нужна максимальная гибкость и независимость от приложения.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Плюсы и минусы Switch Pro</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <Icon name="ThumbsUp" size={20} />
                Преимущества
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Доступная цена</strong> – на 30-40% дешевле Max</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Полноценная работа на Android</strong> – все функции через приложение</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Гибкость профилей</strong> – любые eSIM от разных операторов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Универсальность</strong> – работает в роутерах, планшетах</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                Недостатки
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>Нет iOS</strong> – требуется Android для настройки</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>Зависимость от приложения</strong> – только через Switch APP</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>Нет SIM-меню</strong> – переключение только в приложении</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Плюсы и минусы Switch Max</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <Icon name="ThumbsUp" size={20} />
                Преимущества
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>iOS-совместимость</strong> – полная поддержка iPhone/iPad</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>SIM-меню (STK)</strong> – переключение без приложения</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Автономность</strong> – работает без зависимости от ПО</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm"><strong>Приоритет обновлений</strong> – первым получает новые функции</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                Недостатки
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>Выше цена</strong> – на 50-70% дороже Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>iOS-настройка</strong> – может требовать Bluetooth-ридер</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm"><strong>Сложнее старт</strong> – иногда нужно обновлять прошивку</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Отзывы пользователей</h3>
          
          <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <div className="text-center p-8">
                <Icon name="MessageSquare" size={64} className="mx-auto mb-4 text-blue-600" />
                <p className="text-sm font-medium text-foreground">Рейтинг 4.8-4.9 из 5 на маркетплейсах</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            eSIM-адаптеры Switch пользуются заметной популярностью – сотни отзывов и высокий средний рейтинг 
            свидетельствуют о доверии покупателей. Покупатели хвалят прежде всего полезность устройства и 
            экономию времени/денег.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Очень полезен для путешествий. Можно оформить любую иностранную сим прямо из дома 
                    и активировать сразу до прилёта"
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Яндекс.Маркет</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Всё заработало, устройство видит как обычную SIM, а профили переключаются. 
                    Техподдержка помогла с настройкой"
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
            Хвалят также поддержку Plan B – техподдержка оперативно отвечает в онлайн-чате, помогает решить 
            проблемы с первичной установкой и даже предоставляет тестовый eSIM-профиль бесплатно для проверки 
            работоспособности. Наличие русскоязычного Telegram-сообщества тоже сыграло роль – пользователи 
            делятся опытом, помогают друг другу с советами.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Наш вердикт</h3>
          
          <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Кому подойдут адаптеры Switch?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Частым путешественникам</strong> – местные eSIM вместо дорогого роуминга</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Владельцам устройств без eSIM</strong> – добавит функционал за копейки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Владельцам нескольких номеров</strong> – все профили в одном чипе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Бизнесменам и фрилансерам</strong> – легко переключаться между операторами</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            <strong>Switch Pro</strong> станет отличным выбором, если вы пользуетесь Android и хотите сэкономить – 
            он выполняет все основные функции. <strong>Switch Max</strong> рекомендуем тем, у кого есть техника 
            Apple или просто желание получить максимум возможностей – разница в цене невелика, а поддержка iOS и 
            SIM-меню лишними не будут.
          </p>

          <p className="leading-relaxed">
            Оба адаптера уже проверены сообществом: они реально работают и решают заявленные задачи. Устройства 
            Switch by Plan B оправдывают ожидания – это объективно структурированное и полнофункциональное решение, 
            которое привносит eSIM туда, где её не было, а значит, даёт пользователям больше свободы и выбора в 
            мире мобильной связи.
          </p>
        </div>
      </div>
    </article>
  );
};

export default SwitchEsimReview;
