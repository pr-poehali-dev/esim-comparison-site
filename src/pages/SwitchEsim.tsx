import AdapterLayout from "@/components/AdapterLayout";
import SwitchEsimReview from "@/components/reviews/SwitchEsimReview";

const SwitchEsim = () => {
  return (
    <AdapterLayout
      name="Switch eSIM by Plan B"
      shortName="Switch eSIM"
      description="Профессиональное решение для частых путешественников с покрытием в 190+ странах мира"
      rating={4.8}
      price="от $4.50"
      countries="190+"
      support="24/7"
      gradient="from-purple-500 to-pink-500"
      features={[
        {
          title: "Мгновенная активация",
          description: "Получите eSIM сразу после оплаты и активируйте за 2 минуты",
          icon: "Zap"
        },
        {
          title: "Глобальное покрытие",
          description: "Работает в 190+ странах с автоматическим подключением к локальным операторам",
          icon: "Globe"
        },
        {
          title: "Гибкие тарифы",
          description: "От коротких поездок до длительных путешествий — выбирайте оптимальный план",
          icon: "Layers"
        },
        {
          title: "Поддержка 24/7",
          description: "Круглосуточная техподдержка на русском языке в чате и по email",
          icon: "Headphones"
        },
        {
          title: "Высокая скорость",
          description: "4G/LTE связь с приоритетным доступом к сети операторов",
          icon: "Wifi"
        },
        {
          title: "Безопасность",
          description: "Защищенное соединение и конфиденциальность ваших данных",
          icon: "Shield"
        }
      ]}
      pros={[
        "Самое широкое покрытие среди всех провайдеров — 190+ стран",
        "Быстрая активация и удобное мобильное приложение",
        "Профессиональная поддержка 24/7 на русском языке",
        "Прозрачные цены без скрытых комиссий",
        "Возможность докупить трафик в любой момент"
      ]}
      cons={[
        "Цены немного выше бюджетных конкурентов",
        "Нет безлимитных тарифов в некоторых регионах",
        "Требуется стабильный интернет для первоначальной настройки"
      ]}
      pricing={[
        {
          name: "Базовый",
          price: "$4.50",
          data: "1 ГБ",
          validity: "7 дней"
        },
        {
          name: "Стандарт",
          price: "$12",
          data: "3 ГБ",
          validity: "30 дней"
        },
        {
          name: "Премиум",
          price: "$35",
          data: "10 ГБ",
          validity: "30 дней"
        }
      ]}
      detailedReview={<SwitchEsimReview />}
    />
  );
};

export default SwitchEsim;