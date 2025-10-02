import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const NineEsimReviews = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Реальные отзывы пользователей</h3>
      
      <p className="leading-relaxed mb-6">
        Отзывы с популярных маркетплейсов AliExpress, Ozon, Wildberries и Amazon помогают понять реальный пользовательский опыт.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="ShoppingCart" size={32} className="text-blue-600" />
              <div>
                <h4 className="font-bold text-foreground">Ozon (Россия)</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">5.0 / 50+ отзывов</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Icon name="Quote" size={16} className="text-green-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "Всё отлично. Установил МТС и СберМобайл. Полёт нормальный. Переключает быстро."
                </p>
                <span className="text-xs text-muted-foreground">✅ Проверенный покупатель</span>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Icon name="Quote" size={16} className="text-green-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "Записал 3 eSIM-ки через прогу 9eSIM. Работают все, переключаются между собой в самой проге."
                </p>
                <span className="text-xs text-muted-foreground">✅ Проверенный покупатель</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Globe" size={32} className="text-purple-600" />
              <div>
                <h4 className="font-bold text-foreground">AliExpress</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">4.8-5.0</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Icon name="Quote" size={16} className="text-green-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "Работает как в описании. Быстрая доставка. Использую для туризма – вместо локальных SIM теперь eSIM-пакеты."
                </p>
                <span className="text-xs text-muted-foreground">🌍 Международный отзыв</span>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <Icon name="AlertCircle" size={16} className="text-orange-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "Пришло без инструкции, пришлось искать инфо в интернете. Но после настройки всё ОК."
                </p>
                <span className="text-xs text-muted-foreground">⚠️ Нюанс</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-500/30 bg-orange-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Package" size={32} className="text-orange-600" />
              <div>
                <h4 className="font-bold text-foreground">Amazon (США)</h4>
                <span className="text-xs text-muted-foreground">50+ купили за месяц</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Icon name="Info" size={16} className="text-blue-600 mb-2" />
              <p className="text-sm mb-2">
                <strong>Описание продукта:</strong> "Works like a traditional SIM card... switch carriers freely"
              </p>
              <p className="text-xs text-muted-foreground">
                Целевая аудитория: путешественники, студенты за рубежом, владельцы устройств без eSIM
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MessageCircle" size={32} className="text-red-600" />
              <div>
                <h4 className="font-bold text-foreground">Reddit / Форумы</h4>
                <span className="text-xs text-muted-foreground">Смешанные отзывы</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <Icon name="Quote" size={16} className="text-red-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "Полный отстой – 9eSIM не работает с моим Samsung S21 FE... $40 на ветер. Думал нести в ремонт телефон, еле восстановил."
                </p>
                <span className="text-xs text-muted-foreground">❌ Samsung проблема</span>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Icon name="Quote" size={16} className="text-green-600 mb-2" />
                <p className="text-sm italic mb-2">
                  "На Pixel 7 и OnePlus работает безупречно. Загрузил штук 5 профилей разных стран. По приезду просто переключаю."
                </p>
                <span className="text-xs text-muted-foreground">✅ Pixel / OnePlus</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Частые темы в отзывах</h4>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5">
          <Icon name="Plane" size={24} className="text-blue-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Роуминг и путешествия</h5>
          <p className="text-xs text-muted-foreground">
            Покупают для Airalo, Yesim, МТС Travel. Залить несколько профилей на разные страны заранее.
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5">
          <Icon name="GraduationCap" size={24} className="text-purple-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Кривая обучения</h5>
          <p className="text-xs text-muted-foreground">
            "Сначала не понял, как переключать, но прочитал инструкцию – теперь всё супер"
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-green-500/30 bg-green-500/5">
          <Icon name="Award" size={24} className="text-green-600 mb-2" />
          <h5 className="font-semibold text-sm mb-2">Качество исполнения</h5>
          <p className="text-xs text-muted-foreground">
            Физически карты сделаны хорошо. Стандартная пластиковая SIM с микрочипом.
          </p>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <div className="flex items-start gap-4">
          <Icon name="TrendingUp" size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Общая статистика</h4>
            <p className="text-sm leading-relaxed mb-3">
              Рейтинг везде близок к максимальному (4.8-5.0), что говорит о том, что большинство покупателей остались довольны приобретением. Негативные случаи есть, но они тонут среди позитивных или нейтральных отзывов.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>50+ продаж на Amazon за месяц</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>50+ отзывов на Ozon со средней оценкой 5.0</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Активное комьюнити на Reddit, 4PDA, форумах</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        <strong>Вывод:</strong> На маркетплейсах 9eSIM зарекомендовала себя хорошо. При этом читать отзывы полезно: из них потенциальные покупатели узнают о важных моментах (совместимость, необходимость приложения). Тем, кто ставит максимальную оценку, адаптер реально решил их задачу.
      </p>
    </div>
  );
};

export default NineEsimReviews;
