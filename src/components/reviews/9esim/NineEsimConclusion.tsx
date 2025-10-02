import Icon from "@/components/ui/icon";

const NineEsimConclusion = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Общий вывод и рекомендации</h3>
      
      <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Icon name="Users" size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3">Кому полезны 9eSIM-адаптеры?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Путешественники</strong> – частые поездки за границу, локальные eSIM-тарифы</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Владельцы устройств без eSIM</strong> – несколько номеров/тарифов на одном телефоне</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Техно-энтузиасты</strong> – изучение eSIM изнутри, контроль над SIM-картой</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>IoT-разработчики</strong> – тестирование решений, прототипирование</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div>
          <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
            <Icon name="CheckCircle" size={20} />
            Рекомендуем, если:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Устройство: Pixel, Motorola, OnePlus, Xiaomi</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Готовы разобраться с настройками</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Есть Android для управления профилями</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Часто путешествуете или меняете операторов</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
            <Icon name="XCircle" size={20} />
            Не рекомендуем, если:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-red-600" />
              </div>
              <span className="text-sm">У вас Samsung Galaxy (высокий риск)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-red-600" />
              </div>
              <span className="text-sm">Нужна 100% надёжность без глюков</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-red-600" />
              </div>
              <span className="text-sm">Некомфортно возиться с настройками</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-red-600" />
              </div>
              <span className="text-sm">Можете купить телефон с встроенной eSIM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
        <div className="flex items-start gap-4">
          <Icon name="AlertTriangle" size={32} className="text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Подводные камни</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Не обновляйте ПО телефона</strong> с вставленной 9eSIM – лучше вынуть на время</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Делайте резервные копии</strong> данных телефона перед экспериментами</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Храните QR-коды</strong> и PIN профилей для восстановления</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Проверяйте профили заранее</strong> перед критичной поездкой</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Имейте план Б</strong> – резервную обычную SIM на случай сбоя</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="font-bold text-foreground mb-4 mt-8">Надёжность в 2025 году</h4>
      
      <p className="leading-relaxed mb-4">
        Надёжность 9eSIM можно оценить как <strong>умеренно высокую для продвинутых пользователей</strong> и умеренно низкую для неподготовленных. В руках человека, который понимает, что делает, адаптер очень надёжен – он не сломается сам по себе, профиль не исчезнет внезапно.
      </p>

      <p className="leading-relaxed mb-4">
        А вот если дать его человеку, который не будет знать, как реагировать на сбой – тот может растеряться и назвать устройство ненадёжным. Поэтому производит двоякое впечатление: с одной стороны, технология проверена и в большинстве кейсов стабильна, с другой – ряд случаев проблемных создает шлейф осторожности вокруг неё.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Target" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Стоит ли покупать сейчас?</h4>
            <p className="text-sm leading-relaxed mb-3">
              Если вы относитесь к обозначенной аудитории и принимаете возможные сложности – <strong>да, это отличное решение</strong>, проверенное сообществом. Оно существенно расширит возможности вашего девайса.
            </p>
            <p className="text-sm leading-relaxed">
              Если же вы очень цените бесшовный пользовательский опыт и не терпите никаких багов – возможно, лучше подождать, когда eSIM станет везде по умолчанию.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Rocket" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Будущее технологии</h4>
            <p className="text-sm leading-relaxed">
              На горизонте возможен V4 с MEP (одновременная работа профилей). Также будут улучшаться приложения, драйверы. В новых версиях Android поддержка внешних eUICC может стать штатной, что повысит стабильность. Технология имеет потенциал развиваться – инвестировать в адаптер сейчас не страшно.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <h4 className="font-bold text-foreground mb-3 text-xl">Итоговая рекомендация</h4>
        <p className="leading-relaxed mb-4">
          9eSIM-адаптеры – не панацея и не идеал, но <strong>крайне полезный инструмент в определённых сценариях</strong>. Они дарят свободу от физических SIM, сохраняя при этом возможность использовать эту свободу на любых устройствах.
        </p>
        <p className="leading-relaxed mb-4">
          Подходить к ним стоит с <strong>умеренным оптимизмом и здоровой долей пессимизма</strong>: надеяться на лучшее (что всё заработает и упростит жизнь), но быть готовым к нюансам.
        </p>
        <p className="leading-relaxed text-sm italic">
          Если вы готовы чуть-чуть побыть "системным администратором" для своей SIM-карты, то 9eSIM в 2025 году – вполне достойное приобретение. Для многих плюсы (гибкость, экономия, удобство в путешествиях) перевесят минусы.
        </p>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground italic text-center">
        "Идея революционная, реализация работает" – общее мнение форумов и пользователей в 2025 году
      </p>
    </div>
  );
};

export default NineEsimConclusion;
