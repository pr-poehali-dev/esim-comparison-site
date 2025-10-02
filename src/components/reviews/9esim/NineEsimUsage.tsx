import Icon from "@/components/ui/icon";

const NineEsimUsage = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Установка и использование 9eSIM</h3>
      
      <p className="leading-relaxed mb-6">
        Процесс установки eSIM-профиля на карту 9eSIM схож с активацией eSIM на телефоне, только в роли «приёмника» выступает внешняя карта.
      </p>

      <div className="space-y-6 my-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            1
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2">Физическая установка адаптера</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Вставьте карту 9eSIM в устройство (Android-смартфон, планшет или ПК с кардридером). Телефон определит её как обычную SIM-карту.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            2
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2">Установка приложения</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              На Android установите фирменное приложение <strong>9eSIM LPA</strong> из Google Play или альтернативу <strong>EasyEUICC</strong>. Проверьте совместимость через функцию "Check Compatibility".
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Icon name="Info" size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-muted-foreground">
                На iPhone приложения нет. На ПК можно использовать EasyLPAC или MiniLPA с USB-ридером.
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            3
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2">Загрузка eSIM-профиля</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Получите QR-код от оператора (Airalo, Yesim и др.). В приложении выберите «Add eSIM» и отсканируйте код. Профиль загрузится в память карты через интернет.
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Icon name="AlertTriangle" size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-muted-foreground">
                Не вынимайте карту во время скачивания профиля – это может повредить данные!
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            4
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2">Активация профиля</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              После успешной установки профиль автоматически становится «активным». Телефон начнёт регистрироваться в сети оператора, как будто вставили новую SIM.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">
            5
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2">Переключение между профилями</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Управление профилями – ключевой функционал eSIM-адаптера. Существует два способа:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border-2 border-blue-500/30 bg-blue-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Smartphone" size={20} className="text-blue-600" />
                  <h5 className="font-semibold text-sm">Через приложение (Android)</h5>
                </div>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Выбор профиля в интерфейсе 9eSIM LPA</li>
                  <li>• Переключение за несколько секунд</li>
                  <li>• Можно удалять ненужные профили</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border-2 border-purple-500/30 bg-purple-500/5">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Menu" size={20} className="text-purple-600" />
                  <h5 className="font-semibold text-sm">Через SIM Toolkit (V0/V3)</h5>
                </div>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Настройки → Приложения SIM → 9eSIM</li>
                  <li>• Работает на iPhone и любых телефонах</li>
                  <li>• Переключение за 10-30 секунд</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
        <div className="flex items-start gap-4">
          <Icon name="CheckCircle" size={32} className="text-green-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Готово к использованию!</h4>
            <p className="text-sm leading-relaxed">
              После переключения всё предельно просто: телефон думает, что в него вставлена обычная SIM соответствующего оператора. Все стандартные функции работают: звонки, мобильный интернет, SMS. Можно даже установить PIN-код на профиль.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Lightbulb" size={32} className="text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Полезные советы</h4>
            <ul className="text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Если после переключения связь не появляется – перезагрузите телефон</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Сначала активируйте другой профиль, потом удаляйте ненужный</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Для iPhone загружайте профили через Android, а переключайте через STK-меню</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Dot" size={16} className="flex-shrink-0 mt-1" />
                <span>Процесс занимает минуты даже для новичка – следуйте инструкции</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground italic">
        "Записал 3 eSIMки через прогу 9eSIM. Работают все, переключаются между собой в самой проге" – реальный отзыв пользователя
      </p>
    </div>
  );
};

export default NineEsimUsage;
