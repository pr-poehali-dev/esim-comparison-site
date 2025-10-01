import AdapterLayout from "@/components/AdapterLayout";

const Xesim = () => {
  return (
    <AdapterLayout
      name="xeSIM"
      shortName="xeSIM"
      description="Инновационные технологии для современных путешественников с умными тарифами"
      rating={4.4}
      price="от $4.50"
      countries="160+"
      support="Email + Chat"
      gradient="from-teal-500 to-blue-500"
      features={[
        {
          title: "Гибридный формат",
          description: "Поддержка как eSIM, так и физических SIM-карт",
          icon: "Layers"
        },
        {
          title: "Умные тарифы",
          description: "Автоматический выбор лучшего тарифа в зависимости от локации",
          icon: "Brain"
        },
        {
          title: "Роуминг контроль",
          description: "Полный контроль расходов с уведомлениями и лимитами",
          icon: "Shield"
        },
        {
          title: "160+ стран",
          description: "Покрытие в большинстве туристических направлений",
          icon: "Map"
        },
        {
          title: "Multi-SIM",
          description: "Управление несколькими номерами в одном приложении",
          icon: "Layers"
        },
        {
          title: "Поддержка чат + email",
          description: "Техподдержка через удобный онлайн-чат и email",
          icon: "MessageSquare"
        }
      ]}
      pros={[
        "Уникальная возможность использовать eSIM и физическую SIM",
        "Умные тарифы экономят деньги",
        "Удобный контроль расходов и роуминга",
        "Поддержка нескольких номеров",
        "Инновационные функции управления"
      ]}
      cons={[
        "Некоторые функции требуют обучения",
        "Чуть меньше стран чем у лидеров",
        "Поддержка не круглосуточная"
      ]}
      pricing={[
        {
          name: "Смарт",
          price: "$4.50",
          data: "1 ГБ",
          validity: "7 дней"
        },
        {
          name: "Про",
          price: "$14",
          data: "5 ГБ",
          validity: "30 дней"
        },
        {
          name: "Ультра",
          price: "$38",
          data: "20 ГБ",
          validity: "30 дней"
        }
      ]}
    />
  );
};

export default Xesim;