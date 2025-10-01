import AdapterLayout from "@/components/AdapterLayout";

const EsimMe = () => {
  return (
    <AdapterLayout
      name="eSIM.me"
      shortName="eSIM.me"
      description="Надежный провайдер с отличной репутацией и cashback программой"
      rating={4.6}
      price="от $4.00"
      countries="170+"
      support="24/7"
      gradient="from-indigo-500 to-purple-500"
      features={[
        {
          title: "Мгновенная активация",
          description: "eSIM приходит мгновенно после оплаты и готова к использованию",
          icon: "Zap"
        },
        {
          title: "Удобное приложение",
          description: "Интуитивное мобильное приложение с простым управлением",
          icon: "Smartphone"
        },
        {
          title: "Cashback программа",
          description: "Возвращайте до 10% от каждой покупки на баланс",
          icon: "Gift"
        },
        {
          title: "170+ стран",
          description: "Широкое покрытие по всему миру включая редкие направления",
          icon: "Globe"
        },
        {
          title: "Реферальная система",
          description: "Получайте бонусы за приглашение друзей",
          icon: "Users"
        },
        {
          title: "Поддержка 24/7",
          description: "Круглосуточная помощь в чате и по телефону",
          icon: "MessageCircle"
        }
      ]}
      pros={[
        "Отличная cashback программа возвращает деньги",
        "Удобное и красивое приложение",
        "Быстрая активация eSIM",
        "Широкое покрытие в 170+ странах",
        "Регулярные акции и скидки"
      ]}
      cons={[
        "Cashback начисляется с задержкой",
        "Не все страны доступны на всех тарифах",
        "Интерфейс приложения только на английском"
      ]}
      pricing={[
        {
          name: "Базовый",
          price: "$4",
          data: "1 ГБ",
          validity: "7 дней"
        },
        {
          name: "Плюс",
          price: "$13",
          data: "5 ГБ",
          validity: "30 дней"
        },
        {
          name: "Макс",
          price: "$32",
          data: "15 ГБ",
          validity: "30 дней"
        }
      ]}
    />
  );
};

export default EsimMe;