import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const EsimMeReviews = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Отзывы пользователей</h3>
      
      <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
        <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
          <div className="text-center p-8">
            <Icon name="MessageSquare" size={64} className="mx-auto mb-4 text-indigo-600" />
            <p className="text-sm font-medium text-foreground">Средняя оценка ~2.4/5 на Trustpilot</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        На маркетплейсах продукт eSIM.me получает смешанные отзывы. Есть и положительные от пользователей, у которых всё заработало как задумано, и критичные от тех, кто столкнулся с проблемами.
      </p>

      <div className="grid gap-6 my-6">
        <div>
          <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
            <Icon name="ThumbsUp" size={20} />
            Положительные отзывы
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Работает как заявлено! Использовал на старом Android-устройстве, также вставлял в роутер для раздачи Wi-Fi – всё отлично"
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Amazon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Загрузил несколько eSIM от разных операторов и успешно переключаюсь между ними. Цифровой сим-холдер!"
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Форумы</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
            <Icon name="ThumbsDown" size={20} />
            Негативные отзывы
          </h4>
          
          <div className="space-y-3">
            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-red-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Приложение не распознаёт адаптер – пишет «карта eSIM.me не найдена», хотя она вставлена"
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">Trustpilot</span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-red-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Мои eSIM-профили исчезли без причины, и я не могу их восстановить. Поддержка не отвечает неделями"
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">Trustpilot</span>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/30 bg-red-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-2 mb-3">
                  <Icon name="Quote" size={20} className="text-red-600 flex-shrink-0" />
                  <p className="text-sm italic">
                    "Связь регулярно пропадает, телефон периодически пишет «SIM-карта не обнаружена»"
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">Trustpilot</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
        <div className="flex items-start gap-4">
          <Icon name="BarChart" size={32} className="text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Ключевые жалобы (по Trustpilot AI-сводке)</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Проблемы с приложением и установкой (не видит SIM-карту)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Критические сбои в Android 13/14</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Потеря соединения, плохой сигнал</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Отсутствие поддержки (тикеты без ответа месяцами)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        <strong>Итог:</strong> Для части пользователей адаптер стал удобным решением, другая значительная часть столкнулась с глюками и осталась недовольна. В среднем, eSIM.me – продукт интересный, но сырой, что отражается в смешанных оценках.
      </p>
    </div>
  );
};

export default EsimMeReviews;
