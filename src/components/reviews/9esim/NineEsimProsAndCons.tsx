import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const NineEsimProsAndCons = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Плюсы и минусы 9eSIM</h3>
      
      <p className="leading-relaxed mb-6">
        Как и любая технология, eSIM-адаптеры 9eSIM имеют свои преимущества и недостатки, выявленные в реальном использовании.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2 text-lg">
            <Icon name="ThumbsUp" size={24} />
            Плюсы 9eSIM
          </h4>
          
          <div className="space-y-4">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Plus" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Добавляет eSIM на старые устройства</h5>
                    <p className="text-sm text-muted-foreground">
                      Не нужно покупать новый телефон ради eSIM. Экономия для путешественников с несменяемыми телефонами.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Layers" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Множество профилей в одном месте</h5>
                    <p className="text-sm text-muted-foreground">
                      Одна SIM-карта превращается в 50! Гораздо удобнее, чем носить стопку SIM-карт и физически менять их.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Infinity" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Без ограничений на загрузки</h5>
                    <p className="text-sm text-muted-foreground">
                      Нет искусственных лимитов или платных подписок. Купили один раз – пользуйтесь бесконечно.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Repeat" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Универсальность</h5>
                    <p className="text-sm text-muted-foreground">
                      Карту можно переставлять между любыми устройствами. Не привязана к оператору или телефону.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Code" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Open-source экосистема</h5>
                    <p className="text-sm text-muted-foreground">
                      Приложения с открытым кодом, прозрачность, меньше риска утечки данных.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="DollarSign" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Разумная цена</h5>
                    <p className="text-sm text-muted-foreground">
                      $15-24 – не столь большая сумма за функциональность дорогих новых телефонов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2 text-lg">
            <Icon name="ThumbsDown" size={24} />
            Минусы 9eSIM
          </h4>
          
          <div className="space-y-4">
            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Minus" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Сложность и порог входа</h5>
                    <p className="text-sm text-muted-foreground">
                      Не для новичков. Нужно разбираться с QR-кодами, приложениями, концепцией профилей. "Игрушка для гиков".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="AlertTriangle" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Проблемы с Samsung</h5>
                    <p className="text-sm text-muted-foreground">
                      Galaxy S20/S21/S22/S23 имеют системные конфликты. Риск сломать систему, потерять IMEI, нужен factory reset.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="ShieldAlert" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Неофициальность</h5>
                    <p className="text-sm text-muted-foreground">
                      Не сертифицировано производителями телефонов. В худшем случае – программный сбой без гарантийной поддержки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Ban" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Ограничения функциональности</h5>
                    <p className="text-sm text-muted-foreground">
                      Нет одновременной работы двух eSIM. Переключение не мгновенное. Нет MEP-поддержки пока.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="RefreshCw" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Переключение не мгновенное</h5>
                    <p className="text-sm text-muted-foreground">
                      Занимает минуты, нужно заходить в приложение или меню. Не так удобно, как встроенная eSIM.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="Bug" size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Возможные глюки</h5>
                    <p className="text-sm text-muted-foreground">
                      На некоторых Xiaomi связь пропадает после переключения. Нужна перезагрузка. Зависит от телефона и прошивки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Scale" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Итоговая оценка</h4>
            <p className="text-sm leading-relaxed">
              Плюсы 9eSIM проявляются у тех, кто применяет её по назначению и на правильных устройствах (Pixel, Motorola, OnePlus, Xiaomi). Минусы – у кого ситуация выходит за рамки типовых (Samsung, нет терпения настроить). В целом сообщество оценивает 9eSIM положительно за новаторство и свободу, но с пониманием, что это решение не для всех.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NineEsimProsAndCons;
