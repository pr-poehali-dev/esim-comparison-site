import AdapterLayout from "@/components/AdapterLayout";

const Unisimka = () => {
  return (
    <AdapterLayout
      name="Unisimka"
      shortName="Unisimka"
      description="Универсальный адаптер для бизнеса и путешествий с корпоративными тарифами"
      rating={4.6}
      price="от $5.00"
      countries="180+"
      support="9:00-21:00"
      gradient="from-blue-500 to-cyan-500"
      features={[
        {
          title: "API интеграция",
          description: "Подключите eSIM к корпоративной системе через удобный API",
          icon: "Code"
        },
        {
          title: "Мультипрофиль",
          description: "Управляйте несколькими eSIM профилями в одном приложении",
          icon: "Users"
        },
        {
          title: "Корпоративные тарифы",
          description: "Специальные условия для бизнеса и больших команд",
          icon: "Building"
        },
        {
          title: "Детальная аналитика",
          description: "Отслеживайте использование трафика и расходы в реальном времени",
          icon: "BarChart"
        },
        {
          title: "Быстрое подключение",
          description: "Активация eSIM занимает менее 3 минут",
          icon: "Zap"
        },
        {
          title: "180+ стран",
          description: "Надежное покрытие в большинстве популярных направлений",
          icon: "Map"
        }
      ]}
      pros={[
        "Отличный выбор для корпоративных клиентов",
        "Удобный API для интеграции с системами учета",
        "Возможность управления несколькими профилями",
        "Детальная статистика использования",
        "Гибкая система скидок для бизнеса"
      ]}
      cons={[
        "Поддержка работает только в рабочее время",
        "Немного меньше стран по сравнению с лидерами",
        "Интерфейс приложения может показаться сложным"
      ]}
      pricing={[
        {
          name: "Старт",
          price: "$5",
          data: "1 ГБ",
          validity: "7 дней"
        },
        {
          name: "Бизнес",
          price: "$18",
          data: "5 ГБ",
          validity: "30 дней"
        },
        {
          name: "Корпорат",
          price: "$45",
          data: "15 ГБ",
          validity: "30 дней"
        }
      ]}
    />
  );
};

export default Unisimka;