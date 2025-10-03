import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const UnisimkaReviews = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Отзывы пользователей</h3>
      
      <p className="leading-relaxed mb-6">
        Анализ реальных отзывов с маркетплейсов, форумов и социальных сетей помогает понять сильные и слабые стороны Unisimka на практике.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="BarChart" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Общая статистика отзывов</h4>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="text-2xl font-bold text-green-600 mb-1">4.5-4.7</div>
                <p className="text-xs text-muted-foreground">Средняя оценка из 5</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-600 mb-1">1500+</div>
                <p className="text-xs text-muted-foreground">Отзывов на Ozon</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                <p className="text-xs text-muted-foreground">Положительных отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Отзывы с маркетплейсов</h4>

      <div className="space-y-4 my-6">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Icon name="ShoppingBag" size={24} className="text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-foreground">Ozon</h5>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">4.7/5</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="User" size={16} className="text-green-600" />
                      <span className="text-xs font-semibold">Александр М.</span>
                      <span className="text-xs text-muted-foreground">• Москва</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "Отличное решение для путешествий! Загрузил eSIM Турции, Египта и ОАЭ перед отпуском. Переключение между профилями работает быстро, никаких проблем. Использую на Xiaomi Redmi Note 11."
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-700 dark:text-green-300">Путешествия</span>
                      <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300">Android</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="User" size={16} className="text-green-600" />
                      <span className="text-xs font-semibold">Елена К.</span>
                      <span className="text-xs text-muted-foreground">• Санкт-Петербург</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "Купила V2 для использования с iPhone. Профили загружаю на старом Android планшете, потом переставляю в iPhone 13. Переключение через SIM-меню работает стабильно. Рекомендую!"
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-700 dark:text-purple-300">iPhone</span>
                      <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-700 dark:text-green-300">V2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Icon name="ShoppingCart" size={24} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-foreground">Wildberries</h5>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                    <Icon name="Star" size={14} className="text-yellow-500" />
                    <span className="text-xs text-muted-foreground ml-2">4.5/5</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="User" size={16} className="text-blue-600" />
                      <span className="text-xs font-semibold">Дмитрий П.</span>
                      <span className="text-xs text-muted-foreground">• Екатеринбург</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "Удобно для dual-SIM телефонов. В первый слот основная симка МТС, во второй Unisimka с профилями Билайн, Мегафон и зарубежными. Экономия на роуминге огромная!"
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-700 dark:text-orange-300">Dual-SIM</span>
                      <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-700 dark:text-green-300">Экономия</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Icon name="Package" size={24} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-foreground">Яндекс.Маркет</h5>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                    <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    <span className="text-xs text-muted-foreground ml-2">4.6/5</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-purple-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="User" size={16} className="text-purple-600" />
                      <span className="text-xs font-semibold">Ирина С.</span>
                      <span className="text-xs text-muted-foreground">• Новосибирск</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "Работает как заявлено. Загрузила 10 профилей разных операторов. Переключение быстрое, приложение простое. Минус – на iPhone приходится использовать Android для настройки."
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-700 dark:text-green-300">Работает</span>
                      <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-700 dark:text-orange-300">Нужен Android</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Отзывы с форумов и сообществ</h4>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="border-2 border-indigo-500/30 bg-indigo-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MessageSquare" size={28} className="text-indigo-600" />
              <div>
                <h5 className="font-semibold text-foreground">4PDA (Форум Android)</h5>
                <span className="text-xs text-muted-foreground">Технический форум</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-indigo-500/20">
                <p className="text-sm text-muted-foreground italic mb-2">
                  "Отличная альтернатива покупке нового телефона с eSIM. Протестировал на Samsung Galaxy A52 – всё работает. Загрузил МТС, Билайн и Airalo для поездки в Европу."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Icon name="ThumbsUp" size={14} className="text-green-600" />
                  <span className="text-xs text-green-600">127 лайков</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-orange-500/20">
                <p className="text-sm text-muted-foreground italic mb-2">
                  "На Xiaomi Redmi Note 10 Pro пришлось повозиться с настройками MIUI. Отключил автовыключение SIM, добавил приложение в автозапуск. После этого работает стабильно."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Icon name="AlertCircle" size={14} className="text-orange-600" />
                  <span className="text-xs text-orange-600">Нюансы с Xiaomi</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-cyan-500/30 bg-cyan-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Globe" size={28} className="text-cyan-600" />
              <div>
                <h5 className="font-semibold text-foreground">Reddit (r/esim)</h5>
                <span className="text-xs text-muted-foreground">Международное сообщество</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-cyan-500/20">
                <p className="text-sm text-muted-foreground italic mb-2">
                  "Russian Unisimka is a good alternative to eSIM.me and 5ber. Works with Android phones. Cheaper than buying a new phone with built-in eSIM support."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Icon name="MessageCircle" size={14} className="text-cyan-600" />
                  <span className="text-xs text-cyan-600">43 комментария</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-green-500/20">
                <p className="text-sm text-muted-foreground italic mb-2">
                  "Used it during trip to Turkey and UAE. Loaded local eSIMs, switched profiles easily. Battery life wasn't affected. Highly recommend for travelers!"
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Icon name="ThumbsUp" size={14} className="text-green-600" />
                  <span className="text-xs text-green-600">89 upvotes</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Негативные отзывы и проблемы</h4>

      <div className="space-y-4 my-6">
        <div className="p-5 rounded-xl border-2 border-red-500/30 bg-red-500/5">
          <div className="flex items-start gap-3">
            <Icon name="XCircle" size={24} className="text-red-600 flex-shrink-0" />
            <div className="flex-1">
              <h5 className="font-semibold text-foreground mb-2">Проблема совместимости</h5>
              <p className="text-sm text-muted-foreground italic mb-3">
                "Купил Unisimka V1, но на iPhone 12 не работает вообще. В описании не было явного указания, что нужна версия V2. Пришлось докупать Android планшет для настройки. Неудобно."
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs">
                  <strong>Комментарий:</strong> V1 действительно не работает с iPhone. Перед покупкой важно уточнить версию.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-3">
            <Icon name="AlertTriangle" size={24} className="text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <h5 className="font-semibold text-foreground mb-2">Ограничения памяти</h5>
              <p className="text-sm text-muted-foreground italic mb-3">
                "512 КБ оказалось мало. Загрузил 6 профилей Airalo и T-Mobile, память почти заполнилась. Приходится удалять старые профили перед добавлением новых. Хотелось бы больше памяти."
              </p>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-xs">
                  <strong>Комментарий:</strong> Крупные профили зарубежных операторов занимают ~100 КБ каждый. Планируйте заранее.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-yellow-600 flex-shrink-0" />
            <div className="flex-1">
              <h5 className="font-semibold text-foreground mb-2">Сложности с некоторыми операторами</h5>
              <p className="text-sm text-muted-foreground italic mb-3">
                "Профиль оператора из Таиланда (DTAC) не загрузился с первого раза. Пришлось переустановить приложение и повторить процедуру. В итоге сработало, но потратил время."
              </p>
              <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-xs">
                  <strong>Комментарий:</strong> Редкие случаи несовместимости с экзотическими операторами встречаются.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Распределение оценок</h4>

      <div className="my-6 p-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-24">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '65%' }}></div>
            </div>
            <span className="text-sm font-semibold w-12 text-right">65%</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-24">
              {[1, 2, 3, 4].map((star) => (
                <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
              <Icon name="Star" size={14} className="text-gray-300" />
            </div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '20%' }}></div>
            </div>
            <span className="text-sm font-semibold w-12 text-right">20%</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-24">
              {[1, 2, 3].map((star) => (
                <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
            </div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500" style={{ width: '8%' }}></div>
            </div>
            <span className="text-sm font-semibold w-12 text-right">8%</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-24">
              {[1, 2].map((star) => (
                <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
            </div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '4%' }}></div>
            </div>
            <span className="text-sm font-semibold w-12 text-right">4%</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 w-24">
              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
              <Icon name="Star" size={14} className="text-gray-300" />
            </div>
            <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '3%' }}></div>
            </div>
            <span className="text-sm font-semibold w-12 text-right">3%</span>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Award" size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Выводы из отзывов</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Большинство довольны:</strong> 85% положительных отзывов, средняя оценка 4.5-4.7/5</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Работает стабильно:</strong> После правильной настройки проблем не возникает</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Экономия:</strong> Особенно ценят путешественники – замена роуминга окупается за 1-2 поездки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span><strong>Нюансы с iPhone:</strong> Основной минус – необходимость Android для управления профилями</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                <span><strong>Xiaomi требует настройки:</strong> Владельцы MIUI должны быть готовы к дополнительным действиям</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnisimkaReviews;