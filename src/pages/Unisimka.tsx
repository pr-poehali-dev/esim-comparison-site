import AdapterLayout from "@/components/AdapterLayout";
import UnisimkaReview from "@/components/reviews/UnisimkaReview";

const Unisimka = () => {
  return (
    <AdapterLayout
      name="Unisimka"
      shortName="Unisimka"
      description="Российский программируемый eSIM-адаптер для добавления поддержки eSIM на любые устройства с SIM-слотом"
      rating={4.7}
      price="от 2200 ₽"
      countries="Любые"
      support="Telegram / Email"
      gradient="from-indigo-500 to-purple-500"
      features={[
        {
          title: "До 15 профилей",
          description: "512 КБ памяти eUICC для хранения множества eSIM-профилей",
          icon: "Layers"
        },
        {
          title: "Любые операторы",
          description: "Поддержка российских и международных eSIM-операторов",
          icon: "Globe"
        },
        {
          title: "Android + iPhone",
          description: "V2 поддерживает как Android-приложение, так и SIM-меню для iOS",
          icon: "Smartphone"
        },
        {
          title: "Локальное хранение",
          description: "Все профили на карте, без облака и регистрации",
          icon: "Shield"
        },
        {
          title: "Быстрое переключение",
          description: "Смена профиля за 5-10 секунд через приложение или меню",
          icon: "Zap"
        },
        {
          title: "Российская разработка",
          description: "ПО от российских разработчиков, продажа на Ozon и Wildberries",
          icon: "Flag"
        }
      ]}
      pros={[
        "Добавляет eSIM на устройства без встроенной поддержки",
        "До 15 профилей одновременно (лучше 5-10 для стабильности)",
        "Легкий перенос между устройствами – просто переставить карту",
        "Экономия на роуминге через локальные eSIM",
        "Русскоязычная поддержка и доступность на маркетплейсах"
      ]}
      cons={[
        "Требуется Android для управления профилями (на iPhone только переключение)",
        "Одновременно активен только один профиль",
        "Ограничение памяти – тяжёлые профили быстро заполняют 512 КБ",
        "Некоторые устройства (Xiaomi MIUI) требуют настройки",
        "Риск потери всех профилей при повреждении карты"
      ]}
      pricing={[
        {
          name: "V1 (базовая)",
          price: "~2200 ₽",
          data: "До 15 профилей",
          validity: "Только Android"
        },
        {
          name: "V2 (Unisimka+)",
          price: "~3100 ₽",
          data: "До 15 профилей",
          validity: "Android + iPhone"
        },
        {
          name: "Без абонплаты",
          price: "0 ₽/мес",
          data: "Единоразово",
          validity: "Без подписок"
        }
      ]}
      detailedReview={<UnisimkaReview />}
    />
  );
};

export default Unisimka;