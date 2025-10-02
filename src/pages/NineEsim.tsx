import AdapterLayout from "@/components/AdapterLayout";
import NineEsimReview from "@/components/reviews/NineEsimReview";

const NineEsim = () => {
  return (
    <AdapterLayout
      name="9eSIM"
      shortName="9eSIM"
      description="Физический eSIM-адаптер от британской SIMLINK Ltd. для добавления eSIM на любые устройства"
      rating={4.8}
      price="от $15"
      countries="Любые"
      support="Email / Telegram"
      gradient="from-blue-500 to-cyan-500"
      features={[
        {
          title: "Универсальность",
          description: "Работает на Android, iPhone, планшетах, роутерах и любых устройствах с SIM-слотом",
          icon: "Smartphone"
        },
        {
          title: "До 50 профилей",
          description: "Версия V3 хранит до 50 eSIM-профилей с памятью 1.5 МБ",
          icon: "Layers"
        },
        {
          title: "Без ограничений",
          description: "Неограниченное число загрузок и перезаписей профилей без доплат",
          icon: "Infinity"
        },
        {
          title: "Open-source",
          description: "Открытая экосистема, поддержка множества приложений",
          icon: "Code"
        },
        {
          title: "STK-меню",
          description: "V0 и V3 поддерживают переключение профилей через SIM Toolkit на iPhone",
          icon: "Menu"
        },
        {
          title: "Единоразовая оплата",
          description: "Нет абонплаты и подписок – купили один раз и пользуйтесь",
          icon: "DollarSign"
        }
      ]}
      pros={[
        "Добавляет eSIM на устройства без встроенной поддержки",
        "До 50 профилей одновременно (V3)",
        "Полная совместимость с Pixel, Motorola, OnePlus, Xiaomi",
        "Поддержка iPhone через STK-меню (V0/V3)",
        "Открытая платформа без лицензионных ограничений"
      ]}
      cons={[
        "Проблемы с Samsung Galaxy (высокий риск сбоев)",
        "Требуется техническая грамотность для настройки",
        "Одновременно активен только один профиль (нет MEP)",
        "На iPhone загрузка профилей только через Android/ПК",
        "Переключение профилей занимает 10-30 секунд"
      ]}
      pricing={[
        {
          name: "V0 Budget",
          price: "$15",
          data: "До 15 профилей",
          validity: "STK-меню"
        },
        {
          name: "V2 Android",
          price: "$20",
          data: "До 50 профилей",
          validity: "Без STK"
        },
        {
          name: "V3 Premium",
          price: "$24",
          data: "До 50 профилей",
          validity: "STK-меню"
        }
      ]}
      detailedReview={<NineEsimReview />}
    />
  );
};

export default NineEsim;