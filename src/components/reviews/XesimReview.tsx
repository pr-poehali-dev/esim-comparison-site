import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        Обзор eSIM-адаптеров xESIM: модели X1, X2 и X2+ (2025)
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Бренд xESIM и концепция eSIM-адаптеров</h3>
          <p className="leading-relaxed mb-4">
            xESIM – это новая марка физических eSIM-адаптеров, появившаяся в 2025 году. Она создана командой бывшего проекта 5ber и нацелена на то, чтобы дать возможность использовать электронные SIM-профили (eSIM) на любых устройствах, даже если в них нет встроенной поддержки eSIM.
          </p>
          <p className="leading-relaxed mb-4">
            По сути, адаптер xESIM представляет собой специальную «умную SIM-карту», внутри которой хранится чип eUICC (Embedded Universal Integrated Circuit Card) – аналог встроенного eSIM-модуля. Вставляя такую карту в слот обычной SIM, пользователь может загружать на неё цифровые eSIM-профили операторов и пользоваться ими, как обычными SIM-картами, без необходимости менять физические карты между поездками или операторами.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10">
              <div className="text-center p-8">
                <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-teal-600" />
                <p className="text-sm font-medium text-foreground">Адаптер xESIM устанавливается как обычная nano-SIM</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            Главная идея eSIM-адаптера – совместимость и универсальность. xESIM утверждает, что её карты совместимы с большинством устройств под Android, iPhone и даже некоторыми гаджетами на HarmonyOS. В отличие от прежних решений, приложение Xesim не требует регистрации или входа в аккаунт, что упрощает настройку и означает отсутствие привязки к облачному сервису при базовом использовании.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Характеристики и функциональность моделей</h3>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <Card className="border-2 border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Icon name="Smartphone" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">X1</h4>
                </div>
                <p className="text-sm mb-4 text-blue-700 dark:text-blue-400 font-medium">~$20</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>До 15 профилей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>5 бесплатных загрузок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Доплата за новые загрузки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Требуется Android</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-500/30 bg-teal-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">X2</h4>
                </div>
                <p className="text-sm mb-4 text-teal-700 dark:text-teal-400 font-medium">~$25</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>До 15 профилей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Неограниченные загрузки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Без абонплаты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Требуется Android</span>
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
                  <h4 className="text-xl font-bold text-foreground">X2+</h4>
                </div>
                <p className="text-sm mb-4 text-purple-700 dark:text-purple-400 font-medium">~$28</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Всё из X2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Поддержка iPhone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SeedLink из коробки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SIM Toolkit меню</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-2 border-teal-500/20">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={32} className="text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Какую модель выбрать?</h4>
                <p className="text-sm leading-relaxed">
                  <strong>X1</strong> – для редких поездок и тестирования технологии.<br/>
                  <strong>X2</strong> – для активных путешественников с Android.<br/>
                  <strong>X2+</strong> – для владельцев iPhone или максимального удобства.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Совместимость с устройствами</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Smartphone" size={24} className="text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Android-смартфоны</h4>
                    <p className="text-sm">Полная поддержка на Android 7.0+. Управление через приложение, сканирование QR-кодов, быстрое переключение профилей. Работает на большинстве разблокированных устройств.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Apple" size={24} className="text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">iPhone (iOS)</h4>
                    <p className="text-sm">Работает на iPhone через SIM Toolkit. X2+ с SeedLink обеспечивает полную поддержку без Android. Базовые X1/X2 требуют Android для загрузки профилей.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Wifi" size={24} className="text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Модемы и роутеры</h4>
                    <p className="text-sm">Адаптер работает в 4G WiFi-роутерах, USB-модемах и других устройствах с SIM-слотом. Управление профилями через смартфон.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="TabletSmartphone" size={24} className="text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Планшеты и другие</h4>
                    <p className="text-sm">Совместим с планшетами, смарт-часами и любыми устройствами с SIM-слотом. Требуется разблокированное устройство.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">История бренда и связь с 5ber</h3>
          
          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
            <div className="flex items-start gap-4">
              <Icon name="History" size={32} className="text-orange-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Преемник 5ber</h4>
                <p className="text-sm leading-relaxed">
                  Проект xESIM появился после краха 5ber в конце 2024 года. Команда учла ошибки прошлого: убрала обязательную регистрацию, сделала систему более независимой от сервера. Однако это всё ещё закрытая экосистема, требующая доверия к производителю.
                </p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            Бренд xESIM появился на волне событий вокруг адаптера 5ber. Напомним, 5ber был одним из самых популярных физических eSIM-решений, однако в конце 2024 года компания обанкротилась, оставив тысячи пользователей без работающих адаптеров.
          </p>
          <p className="leading-relaxed">
            xESIM стал ответом на этот кризис. Заявленная цель: учесть ошибки прошлого и предложить более надёжное решение. Важное улучшение – отсутствие обязательной регистрации, что снижает зависимость от серверов производителя.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Преимущества адаптеров xESIM</h3>
          
          <div className="space-y-4 my-6">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">eSIM для любого устройства</h4>
                    <p className="text-sm">Главное достоинство – возможность добавить функциональность eSIM практически на любой смартфон или гаджет с SIM-слотом. Нет необходимости менять телефон ради поддержки eSIM.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Множество профилей</h4>
                    <p className="text-sm">До 15 профилей одновременно с быстрым переключением. Заранее записывайте тарифы для разных стран и переключайтесь между ними за секунды.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Низкая стоимость</h4>
                    <p className="text-sm">Разовая покупка от $20 без абонплаты. X2 предлагает безлимитные загрузки, что окупается уже после нескольких поездок.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Unlock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Независимость</h4>
                    <p className="text-sm">Нет привязки к конкретным операторам. Используйте любые eSIM-профили от разных провайдеров по вашему выбору.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Недостатки и ограничения</h3>
          
          <div className="space-y-4 my-6">
            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Smartphone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Необходимость Android</h4>
                    <p className="text-sm">Для полноценной работы X1/X2 требуется Android-устройство. На iPhone управление ограничено SIM-меню, что неудобно.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Lock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Закрытая экосистема</h4>
                    <p className="text-sm">Хотя xESIM и ослабил привязку к аккаунту, система остаётся проприетарной. Зависимость от производителя всё ещё существует.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertTriangle" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Ограничения X1</h4>
                    <p className="text-sm">Базовая модель имеет лимит в 5 бесплатных загрузок, после чего требуется доплата. Апгрейд до X2 невозможен.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Settings" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Сложность настройки</h4>
                    <p className="text-sm">Требует технических навыков для первоначальной настройки. SIM Toolkit менее удобен, чем современные приложения.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

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

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Вывод и рекомендации</h3>
          
          <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Icon name="Target" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Кому подойдут адаптеры xESIM?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Частым путешественникам</strong> – избавитесь от россыпи SIM-карт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Владельцам устройств без eSIM</strong> – добавит функционал</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Технически подкованным</strong> – готовы разобраться в настройках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                    <span><strong>Бизнес-пользователям</strong> – несколько номеров в одной карте</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <Icon name="ThumbsUp" size={20} />
                Рекомендуем
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Если часто путешествуете</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Если разбираетесь в технике</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Если нужна гибкость</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                Не рекомендуем
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm">Если нужно plug-and-play</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm">Если связь критична 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-orange-600" />
                  </div>
                  <span className="text-sm">Если не доверяете стартапам</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            Физические eSIM-адаптеры xESIM (X1, X2, X2+) в 2025 году представляют собой рабочее, но нишевое решение. Они во многом оправдывают свои обещания – действительно позволяют пользоваться электронными SIM-профилями там, где иначе это невозможно.
          </p>

          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-2 border-blue-500/20">
            <div className="flex items-start gap-4">
              <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Итоговая рекомендация</h4>
                <p className="text-sm leading-relaxed">
                  xESIM – решение для технически подкованных энтузиастов и активных путешественников. Если вы понимаете ограничения и готовы разобраться в настройке – адаптер станет надёжным инструментом. Но всегда имейте план Б на случай непредвиденных ситуаций.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default XesimReview;
