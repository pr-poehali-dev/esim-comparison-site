import AdapterLayout from "@/components/AdapterLayout";
import EsimMeReview from "@/components/reviews/EsimMeReview";

const EsimMe = () => {
  return (
    <AdapterLayout
      name="eSIM.me"
      shortName="eSIM.me"
      description="Физический eSIM-адаптер от немецкой компании TelcoVillage GmbH для добавления eSIM в любые устройства"
      rating={2.4}
      price="от $25"
      countries="Любые"
      support="Email (медленная)"
      gradient="from-indigo-500 to-purple-500"
      features={[
        {
          title: "Для любых устройств",
          description: "Добавляет eSIM на Android, iPhone и любые устройства с SIM-слотом",
          icon: "Smartphone"
        },
        {
          title: "До 15 профилей",
          description: "Хранение до 15 eSIM-профилей в версии Pro (Omni)",
          icon: "Layers"
        },
        {
          title: "Единоразовая оплата",
          description: "Нет абонплаты – покупаете карту один раз и пользуетесь",
          icon: "DollarSign"
        },
        {
          title: "Лицензии",
          description: "Basic, Advanced, Pro, Business – выбор под ваши нужды",
          icon: "Key"
        },
        {
          title: "14 дней гарантии",
          description: "Возврат денег если карта не подошла или не работает",
          icon: "Shield"
        },
        {
          title: "Версия V2",
          description: "Новые карты с улучшенной памятью и совместимостью",
          icon: "Zap"
        }
      ]}
      pros={[
        "Добавляет eSIM на устройства без встроенной поддержки",
        "Универсальность – можно переставлять между устройствами",
        "Хранит до 15-30 профилей одновременно",
        "Нет абонплаты и подписок",
        "Первое решение на рынке (ноябрь 2021)"
      ]}
      cons={[
        "Зависимость от Android-приложения для управления",
        "Лицензии Single/Multi ограничивают использование",
        "Очень слабая техподдержка (рейтинг 2.4/5)",
        "Глюки и сбои в работе по отзывам",
        "Высокая цена ($25-130 за разные версии)"
      ]}
      pricing={[
        {
          name: "Basic",
          price: "$25-30",
          data: "2-5 профилей",
          validity: "1 устройство"
        },
        {
          name: "Advanced",
          price: "$40-50",
          data: "5-10 профилей",
          validity: "1 бренд"
        },
        {
          name: "Pro",
          price: "$70",
          data: "15 профилей",
          validity: "Без ограничений"
        }
      ]}
      detailedReview={<EsimMeReview />}
    />
  );
};

export default EsimMe;