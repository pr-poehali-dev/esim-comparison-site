import Icon from "@/components/ui/icon";

const EsimMeIntroduction = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Бренд eSIM.me и концепция eSIM-адаптера</h3>
      <p className="leading-relaxed mb-4">
        eSIM.me – продукт немецкой компании TelcoVillage GmbH, предлагающий уникальный способ добавить поддержку eSIM в существующие устройства без встроенного eSIM-модуля. Проект стартовал в ноябре 2021 года и стал одним из первых решений, выводящих технологию eSIM на потребительский рынок.
      </p>
      <p className="leading-relaxed mb-4">
        По сути, eSIM.me – это «псевдо-eSIM» в форм-факторе обычной nano-SIM: специальная карта, вставляемая в слот SIM телефона, но содержащая программируемый чип eUICC (embedded UICC), способный хранить сразу несколько цифровых eSIM-профилей. В сочетании с приложением eSIM.me APP эта карта позволяет скачивать и управлять профилями eSIM, как если бы устройство поддерживало встроенную eSIM.
      </p>

      <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
        <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
          <div className="text-center p-8">
            <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-indigo-600" />
            <p className="text-sm font-medium text-foreground">eSIM.me устанавливается как обычная nano-SIM</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        Концептуально eSIM.me решает проблему устаревания устройств: вместо покупки нового смартфона ради eSIM можно «проапгрейдить» текущий. Устройство с eSIM.me получает возможность хранить множество виртуальных SIM-карт (eSIM-профилей) и переключаться между ними без физической замены SIM.
      </p>

      <p className="leading-relaxed">
        Компания позиционирует eSIM.me как первое в мире eSIM-решение для существующих устройств, не имеющее ежемесячных платежей – пользователь единожды приобретает карту и пользуется ей по необходимости. Предустановленных профилей на карте нет – предполагается, что клиент сам скачивает профиль своего оператора или покупает новые eSIM через специальные площадки.
      </p>
    </div>
  );
};

export default EsimMeIntroduction;
