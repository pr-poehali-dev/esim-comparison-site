import AdapterLayout from "@/components/AdapterLayout";
import FiveberReview from "@/components/reviews/FiveberReview";

const Fiveber = () => {
  return (
    <AdapterLayout
      name="5ber"
      shortName="5ber"
      description="Премиум качество связи в популярных направлениях с VIP поддержкой"
      rating={4.7}
      price="от $6.00"
      countries="100+"
      support="24/7"
      gradient="from-orange-500 to-red-500"
      detailedReview={<FiveberReview />}
      features={[
        {
          title: "VIP поддержка",
          description: "Персональный менеджер и приоритетное обслуживание клиентов",
          icon: "Crown"
        },
        {
          title: "Высокая скорость",
          description: "Максимальная скорость 4G/5G в поддерживаемых регионах",
          icon: "Rocket"
        },
        {
          title: "Безлимитные планы",
          description: "Тарифы с неограниченным трафиком в популярных странах",
          icon: "Infinity"
        },
        {
          title: "Премиум операторы",
          description: "Подключение к ведущим операторам с лучшим покрытием",
          icon: "Award"
        },
        {
          title: "Стабильность",
          description: "Гарантированная стабильность соединения без разрывов",
          icon: "Signal"
        },
        {
          title: "100+ стран",
          description: "Фокус на качестве связи в ключевых направлениях",
          icon: "MapPin"
        }
      ]}
      pros={[
        "Премиум качество связи и высокие скорости",
        "Безлимитные планы в популярных странах",
        "VIP поддержка с персональным менеджером",
        "Стабильное соединение без обрывов",
        "Приоритет к лучшим операторам"
      ]}
      cons={[
        "Более высокая цена по сравнению с конкурентами",
        "Меньшее количество поддерживаемых стран",
        "Некоторые функции доступны только на премиум тарифах"
      ]}
      pricing={[
        {
          name: "Комфорт",
          price: "$6",
          data: "2 ГБ",
          validity: "7 дней"
        },
        {
          name: "VIP",
          price: "$22",
          data: "10 ГБ",
          validity: "30 дней"
        },
        {
          name: "Безлимит",
          price: "$50",
          data: "Безлимит",
          validity: "30 дней"
        }
      ]}
    />
  );
};

export default Fiveber;