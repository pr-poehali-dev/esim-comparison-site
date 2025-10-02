import Icon from "@/components/ui/icon";

const EsimMeConclusion = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Вывод и рекомендации</h3>
      
      <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Icon name="Target" size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3">Кому подходит eSIM.me?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Владельцам старых смартфонов</strong> – не хочется менять телефон ради eSIM</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Редким моделям без eSIM</strong> – дорогие аппараты без поддержки eSIM</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Профессионалам</strong> – работа с несколькими линиями связи</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                <span><strong>Путешественникам</strong> – частое использование локальных eSIM</span>
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
              <span className="text-sm">Если технически подкованы</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Если есть Android для управления</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-green-600" />
              </div>
              <span className="text-sm">Если готовы к экспериментам</span>
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
              <span className="text-sm">Если нужна 100% надёжность</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-orange-600" />
              </div>
              <span className="text-sm">Только iPhone (без Android)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="X" size={14} className="text-orange-600" />
              </div>
              <span className="text-sm">Если нет терпения к глюкам</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Подводные камни</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Проверьте совместимость</strong> – установите приложение и проверьте до покупки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Не отключайте SIM в настройках</strong> – только через приложение!</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Храните копии QR-кодов</strong> – на случай проблем</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span><strong>Имейте план Б</strong> – резервную обычную SIM на случай сбоя</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        Адаптер eSIM.me в 2025 году – решение не для всех, но незаменимое для определённых сценариев. Он отлично подойдёт тем, кто не хочет расставаться со своим старым (но любимым) смартфоном, где нет встроенной eSIM.
      </p>

      <p className="leading-relaxed mb-4">
        Насколько надёжен eSIM.me в 2025 году? Пока что его нельзя назвать полностью надёжным. Продукт эволюционирует: выпущена версия eSIM.me Card 2, улучшенная аппаратно. Многие баги первой ревизии исправляются, но всё же количество негативных отзывов о сбоях и поддержке говорит, что eSIM.me ещё допиливает свой продукт.
      </p>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Итоговая рекомендация</h4>
            <p className="text-sm leading-relaxed">
              В 2025 году это скорее бета-версия для энтузиастов, чем массовый потребительский гаджет с бесшовным UX. Если вы готовы мириться с возможными глюками и отсутствием оперативной поддержки – адаптер может окупиться удобством. Если же нет – лучше подождать улучшений или обзавестись телефоном с встроенной eSIM.
            </p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground italic">
        "Идея революционная, реализация пока хромает" – общее мнение форумов и пользователей
      </p>
    </div>
  );
};

export default EsimMeConclusion;
