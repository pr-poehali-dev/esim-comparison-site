import Icon from "@/components/ui/icon";

const UnisimkaIntroduction = () => {
  return (
    <div>
      <p className="lead text-lg mb-6">
        Unisimka – это российский бренд программируемых SIM-карт, позволяющих добавить поддержку eSIM на любые телефоны и гаджеты с разъёмом для физической SIM-карты.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Что такое Unisimka?</h4>
            <p className="text-sm leading-relaxed">
              Программируемая SIM-карта (формат nano-SIM с адаптерами) с чипом eUICC, способная хранить несколько электронных профилей операторов связи. Фактически это универсальный eSIM-адаптер для устройств без встроенной поддержки eSIM.
            </p>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Концепция и преимущества</h4>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-5 rounded-xl border-2 border-green-500/30 bg-green-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Layers" size={24} className="text-green-600" />
            <h5 className="font-semibold">До 15 профилей</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Одна физическая карта заменяет множество SIM-карт, объединяя несколько операторов связи в одном чипе
          </p>
        </div>

        <div className="p-5 rounded-xl border-2 border-purple-500/30 bg-purple-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Globe" size={24} className="text-purple-600" />
            <h5 className="font-semibold">Любые операторы</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Не привязана к конкретному оператору – поддерживает профили российских и зарубежных компаний
          </p>
        </div>

        <div className="p-5 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Shield" size={24} className="text-orange-600" />
            <h5 className="font-semibold">Локальное хранение</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Не передаёт данные в облако, не требует регистрации – все профили хранятся на карте
          </p>
        </div>

        <div className="p-5 rounded-xl border-2 border-blue-500/30 bg-blue-500/5">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="Zap" size={24} className="text-blue-600" />
            <h5 className="font-semibold">Быстрое переключение</h5>
          </div>
          <p className="text-sm text-muted-foreground">
            Смена профиля через приложение или SIM-меню занимает считанные секунды
          </p>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Flag" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Российская разработка</h4>
            <p className="text-sm leading-relaxed mb-3">
              Первая в России разработка подобного рода, стартовавшая в 2024 году. В отличие от зарубежных аналогов (eSIM.me, 5ber), Unisimka продаётся на локальных маркетплейсах с русскоязычной поддержкой.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Аппаратная часть из импортной основы (Китай)</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>ПО разработано в России</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-1" />
                <span>Доступно на Ozon, Wildberries, Яндекс.Маркет</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Основной принцип работы</h4>
      
      <p className="leading-relaxed mb-4">
        Unisimka вставляется в стандартный SIM-слот телефона/планшета/модема и воспринимается устройством как обычная SIM-карта. Разница в том, что в памяти хранится до 15 виртуальных профилей eSIM, между которыми можно переключаться программно через приложение или SIM-меню.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
          <h5 className="font-semibold text-sm mb-2">Вставка карты</h5>
          <p className="text-xs text-muted-foreground">Unisimka вставляется в обычный SIM-слот</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
          <h5 className="font-semibold text-sm mb-2">Загрузка профилей</h5>
          <p className="text-xs text-muted-foreground">Через приложение записываются eSIM-профили</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
          <h5 className="font-semibold text-sm mb-2">Переключение</h5>
          <p className="text-xs text-muted-foreground">Выбор активного профиля за секунды</p>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        <strong>Важно:</strong> Одновременно активным может быть только один профиль. Unisimka работает аналогично встроенному eSIM-модулю в смартфоне, только выполненному в формате отдельной SIM-карты.
      </p>
    </div>
  );
};

export default UnisimkaIntroduction;
