import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const FiveberReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        Обзор 5ber eSIM: подробный гайд для путешественников
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Что такое адаптер 5ber eSIM</h3>
          <p className="leading-relaxed mb-4">
            5ber eSIM – это физический SIM-карта-адаптер, внешне похожий на обычную nano-SIM, который позволяет добавить поддержку eSIM на устройства, изначально не оснащённые этой технологией. Карта содержит встроенный программируемый чип eUICC с уникальным идентификатором EID, благодаря которому телефон распознаёт её как eSIM-устройство.
          </p>
          <p className="leading-relaxed mb-4">
            Вставив адаптер 5ber в слот SIM, пользователь может загружать и хранить на нём несколько профилей eSIM одновременно – в идеальных условиях до 15 профилей сразу. Каждый такой профиль можно активировать по необходимости, а переключение между ними осуществляется через специальное приложение. Фактически 5ber «оцифровывает» привычную SIM-карту, позволяя хранить на одном чипе множество номеров и тарифов разных операторов.
          </p>

          <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="text-center p-8">
                <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-orange-600" />
                <p className="text-sm font-medium text-foreground">Адаптер 5ber устанавливается как обычная nano-SIM</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed">
            Адаптер 5ber был представлен в конце 2023 года как более доступная альтернатива похожему решению eSIM.me. Разработчиком 5ber является технологическая компания iFREE GROUP, занимающаяся глобальными eSIM-сервисами. Ключевая идея продукта – дать возможность владельцам Android-устройств без встроенного модуля eSIM пользоваться электронными SIM-профилями, не меняя телефон.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Версии адаптеров 5ber и их отличия</h3>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <Card className="border-2 border-blue-500/30 bg-blue-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <Icon name="Smartphone" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Standard</h4>
                </div>
                <p className="text-sm mb-4 text-blue-700 dark:text-blue-400 font-medium">~$12</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Базовая модель</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>2 бесплатных профиля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>До 20 загрузок с доплатой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Ограниченный функционал</span>
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
                  <h4 className="text-xl font-bold text-foreground">Premium</h4>
                </div>
                <p className="text-sm mb-4 text-purple-700 dark:text-purple-400 font-medium">~$25</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Неограниченные загрузки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>До 15 eSIM-профилей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Для активных пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Без абонплаты</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500/30 bg-orange-500/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Ultra</h4>
                </div>
                <p className="text-sm mb-4 text-orange-700 dark:text-orange-400 font-medium">~$28</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Всё из Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Поддержка iPhone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SIM Toolkit меню</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Переключение на iOS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="leading-relaxed">
            Все версии 5ber являются полностью GSMA-совместимыми eUICC-картами, то есть работают по стандартам eSIM. Разница лишь в программных ограничениях: в Standard на сервере привязан лимит на количество закачанных профилей, тогда как Premium/Ultra таких ограничений не имеют.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Особенности работы и совместимость</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Smartphone" size={24} className="text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Принцип работы</h4>
                    <p className="text-sm">После установки адаптера в слот SIM пользователь скачивает приложение 5ber.eSIM на Android. Через приложение необходимо зарегистрировать карту и далее сканировать QR-коды eSIM-профилей от любых операторов.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="AlertCircle" size={24} className="text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Ограничения</h4>
                    <p className="text-sm">Управление профилями (загрузка/удаление eSIM) официально возможно только на Android-устройствах. Приложение 5ber.eSIM не доступно на iOS.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Cpu" size={24} className="text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Совместимость</h4>
                    <p className="text-sm">Требуется Android 9+ с поддержкой OMAPI и наличием NFC-модуля. iPhone видит активный профиль как обычную SIM, но не позволяет добавлять новые.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="Zap" size={24} className="text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Переключение</h4>
                    <p className="text-sm">Профиль загружается на карту и становится активным. Переключение между несколькими профилями осуществляется через приложение.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Преимущества 5ber eSIM</h3>
          
          <div className="space-y-4 my-6">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Layers" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Множество номеров в одном SIM-слоте</h4>
                    <p className="text-sm">5ber позволяет хранить сразу несколько тарифов/номеров и легко переключаться между ними через приложение. Это удобно для путешествий – можно загодя записать профили локальных операторов разных стран.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="RefreshCw" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Быстрое переключение устройств</h4>
                    <p className="text-sm">Если нужно переставить SIM в другой телефон или роутер – просто вытаскиваем адаптер и вставляем в новое устройство. Все активированные профили сохраняются на карте и будут работать сразу, без повторной настройки.</p>
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
                    <h4 className="font-bold text-foreground mb-2">Отсутствие привязки к одному телефону</h4>
                    <p className="text-sm">Владелец 5ber не платит за смену устройства и не ограничен одним «управляющим» телефоном. Можно активировать карту на одном Android, затем управлять ею с любого совместимого устройства.</p>
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
                    <h4 className="font-bold text-foreground mb-2">Низкая стоимость и отсутствие абонплаты</h4>
                    <p className="text-sm">Цены на адаптеры 5ber были значительно ниже конкурентов (от $12), причём это разовая покупка: никаких подписок, плат за трафик или ежемесячных платежей нет.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Недостатки и проблемы</h3>
          
          <div className="space-y-4 my-6">
            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Cloud" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Зависимость от облачного сервиса</h4>
                    <p className="text-sm">Для функционирования 5ber требовалось соединение с сервером разработчика (iFREE). Приложение при каждой операции обращалось к облаку 5ber. В результате, если сервис недоступен, управление eSIM становится невозможным. В начале 2025 года у компании начались перебои, и многие заметили, что приложение больше не подключается.</p>
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
                    <h4 className="font-bold text-foreground mb-2">Ограничения версии Standard</h4>
                    <p className="text-sm">После записи двух профилей многие столкнулись с тем, что купить дополнительные загрузки попросту невозможно. Пользователь нажимает «купить» в приложении, но транзакция не проходит, и новые слоты не добавляются. Техническая поддержка на обращения не отвечает.</p>
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
                    <h4 className="font-bold text-foreground mb-2">Сбои и "окирпичивание" карт</h4>
                    <p className="text-sm">Некоторые пользователи сообщали о технических сбоях в работе адаптера. В частных случаях 5ber-карта переставала функционировать после определённых действий, и телефон переставал видеть карту вовсе.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="XCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Проблемы совместимости</h4>
                    <p className="text-sm">Последнее официальное обновление приложения 5ber.eSIM вышло в октябре 2024 года. С тех пор Android успел обновиться, и появились сообщения, что на новых версиях ОС адаптер не определяется.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Текущий статус и заключение</h3>
          
          <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
            <div className="flex items-start gap-4">
              <Icon name="AlertTriangle" size={32} className="text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">⚠️ Важное предупреждение</h4>
                <p className="text-sm leading-relaxed">
                  На сегодняшний день (2025 г.) адаптеры 5ber, по сути, стали проблемными. Официальный сервис более не поддерживается, компания-производитель в финансовом упадке. Новые eSIM-профили через штатное приложение загрузить невозможно, а старые можно переключать лишь пока работают последние версии приложения. Продажи адаптеров практически прекратились.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="text-center p-8">
                <Icon name="TrendingDown" size={64} className="mx-auto mb-4 text-red-600" />
                <p className="text-sm font-medium text-foreground">Сервис более не поддерживается</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mb-4">
            В итоге, обзор адаптера 5ber eSIM получается неоднозначным. Идея устройства замечательна – дать свободу в использовании eSIM на любом телефоне, объединить десятки «симок» в одной карте, легко переключаться между ними и экономить в роуминге. На практике же реализации не хватило надёжности и поддержки.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div>
              <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                <Icon name="Plus" size={20} />
                Плюсы
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Много профильных возможностей</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Экономия на роуминге</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-green-600" />
                  </div>
                  <span className="text-sm">Удобство использования</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <Icon name="Minus" size={20} />
                Минусы
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-red-600" />
                  </div>
                  <span className="text-sm">Зависимость от разработчика</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-red-600" />
                  </div>
                  <span className="text-sm">Риск остаться без поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="X" size={14} className="text-red-600" />
                  </div>
                  <span className="text-sm">Ограниченная совместимость</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3">Наша рекомендация</h4>
                <p className="leading-relaxed mb-4">
                  Новым пользователям покупать 5ber в текущих условиях <strong>не рекомендуется</strong> – по крайней мере, до тех пор, пока не появится его надежный преемник или не возродится сервис на новой платформе.
                </p>
                <p className="leading-relaxed">
                  Если вы всё же имеете такой адаптер на руках, стоит поторопиться выгрузить с него важные eSIM-профили и изучить альтернативные способы управления (через root-программы или PC-кардридер).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FiveberReview;
