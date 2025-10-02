import Icon from "@/components/ui/icon";

const XesimConclusion = () => {
  return (
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
  );
};

export default XesimConclusion;
