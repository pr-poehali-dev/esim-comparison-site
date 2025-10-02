import Icon from "@/components/ui/icon";

const NineEsimIntroduction = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Бренд 9eSIM и концепция eSIM-адаптеров</h3>
      
      <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
        <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <div className="text-center p-8">
            <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-blue-600" />
            <p className="text-sm font-medium text-foreground">Физическая eSIM-карта для любых устройств</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        <strong>9eSIM</strong> – это серия физических eSIM-адаптеров от британской компании <strong>SIMLINK Ltd.</strong>, позволяющих добавить поддержку eSIM на устройства, изначально не оснащённые встроенным eSIM-модулем. Проще говоря, 9eSIM – это программируемая SIM-карта, в память которой можно загружать цифровые eSIM-профили и использовать её как обычную физическую SIM-карту в телефонах, планшетах, модемах и других устройствах.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Как это работает?</h4>
            <p className="text-sm leading-relaxed">
              Вставляете специальную карту 9eSIM в слот SIM, затем через приложение или SIM-меню записываете на неё нужные eSIM-профили. После этого устройство «видит» активный профиль как обычную SIM-карту и регистрируется в сети оператора.
            </p>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-3 mt-6">Преимущества концепции</h4>
      
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-lg border-2 border-green-500/30 bg-green-500/5">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="TrendingUp" size={24} className="text-green-600 flex-shrink-0" />
            <h5 className="font-semibold text-foreground">Апгрейд устаревших устройств</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Старые модели iPhone или бюджетные Android-устройства получают поддержку eSIM без покупки нового телефона
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Repeat" size={24} className="text-blue-600 flex-shrink-0" />
            <h5 className="font-semibold text-foreground">Универсальность</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Карту можно переставлять между любыми устройствами: сегодня в телефоне, завтра в роутере
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Unlock" size={24} className="text-purple-600 flex-shrink-0" />
            <h5 className="font-semibold text-foreground">Открытая экосистема</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            ПО на основе открытого кода, нет ограничений на число перезаписей профилей
          </p>
        </div>

        <div className="p-4 rounded-lg border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-3 mb-2">
            <Icon name="Infinity" size={24} className="text-orange-600 flex-shrink-0" />
            <h5 className="font-semibold text-foreground">Без лицензий</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            В отличие от конкурентов, не требует оплаты для разблокировки дополнительных профилей
          </p>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        9eSIM занимает заметную долю рынка благодаря сочетанию низкой цены и гибкости. Пользователи отмечают, что карты работают как стандартный eUICC-чип в форм-факторе SIM, без искусственных ограничений на количество профилей.
      </p>
    </div>
  );
};

export default NineEsimIntroduction;
