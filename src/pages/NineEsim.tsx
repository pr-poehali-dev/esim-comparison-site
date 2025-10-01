import AdapterLayout from "@/components/AdapterLayout";

const NineEsim = () => {
  return (
    <AdapterLayout
      name="9eSIM"
      shortName="9eSIM"
      description="Доступное решение для путешествий по всему миру без скрытых платежей"
      rating={4.5}
      price="от $3.50"
      countries="150+"
      support="Email"
      gradient="from-green-500 to-emerald-500"
      features={[
        {
          title: "Низкие цены",
          description: "Одни из самых доступных тарифов на рынке eSIM",
          icon: "DollarSign"
        },
        {
          title: "Простая активация",
          description: "Интуитивный процесс подключения без сложных настроек",
          icon: "Settings"
        },
        {
          title: "Без доп. платежей",
          description: "Вся стоимость указана сразу — никаких скрытых комиссий",
          icon: "CheckCircle"
        },
        {
          title: "150+ стран",
          description: "Покрытие во всех популярных туристических направлениях",
          icon: "Globe"
        },
        {
          title: "Гибкие пакеты",
          description: "Выбирайте объем данных и срок действия под свои нужды",
          icon: "Package"
        },
        {
          title: "Пополнение счета",
          description: "Докупайте трафик прямо в приложении в один клик",
          icon: "CreditCard"
        }
      ]}
      pros={[
        "Самые низкие цены среди всех провайдеров",
        "Простой и понятный интерфейс приложения",
        "Честные тарифы без скрытых платежей",
        "Быстрое пополнение баланса",
        "Подходит для бюджетных путешественников"
      ]}
      cons={[
        "Поддержка только по email, нет онлайн-чата",
        "Меньше стран по сравнению с премиум-сервисами",
        "Иногда более низкая скорость соединения"
      ]}
      pricing={[
        {
          name: "Эконом",
          price: "$3.50",
          data: "1 ГБ",
          validity: "7 дней"
        },
        {
          name: "Оптимал",
          price: "$9",
          data: "3 ГБ",
          validity: "30 дней"
        },
        {
          name: "Максимум",
          price: "$25",
          data: "10 ГБ",
          validity: "30 дней"
        }
      ]}
    />
  );
};

export default NineEsim;