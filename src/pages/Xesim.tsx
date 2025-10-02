import AdapterLayout from "@/components/AdapterLayout";
import XesimReview from "@/components/reviews/XesimReview";

const Xesim = () => {
  return (
    <AdapterLayout
      name="xESIM"
      shortName="xESIM"
      description="Физические eSIM-адаптеры для добавления поддержки eSIM на любые устройства"
      rating={4.4}
      price="от $20"
      countries="Любые"
      support="Email + Форумы"
      gradient="from-teal-500 to-blue-500"
      features={[
        {
          title: "Универсальность",
          description: "Работает на Android, iPhone и любых устройствах с SIM-слотом",
          icon: "Smartphone"
        },
        {
          title: "До 15 профилей",
          description: "Храните несколько eSIM и переключайтесь между ними за секунды",
          icon: "Layers"
        },
        {
          title: "Без регистрации",
          description: "Не требует создания аккаунта – работает сразу из коробки",
          icon: "Unlock"
        },
        {
          title: "SIM Toolkit",
          description: "Управление через стандартное меню SIM на любых устройствах",
          icon: "Settings"
        },
        {
          title: "Поддержка iPhone",
          description: "Модель X2+ работает с iOS без необходимости в Android",
          icon: "Apple"
        },
        {
          title: "Любые операторы",
          description: "Используйте eSIM от любых провайдеров по вашему выбору",
          icon: "Globe"
        }
      ]}
      pros={[
        "Добавляет eSIM на устройства без встроенной поддержки",
        "X2 предлагает безлимитные загрузки профилей",
        "Не требует регистрации и абонплаты",
        "Модель X2+ работает с iPhone из коробки",
        "Полная свобода выбора операторов"
      ]}
      cons={[
        "Требует технических навыков для настройки",
        "X1/X2 нуждаются в Android для полной функциональности",
        "Зависимость от небольшой компании-производителя",
        "Нишевый продукт не для всех",
        "Ограничение в 15 профилей может быть мало для некоторых"
      ]}
      pricing={[
        {
          name: "X1",
          price: "$20",
          data: "До 15 профилей",
          validity: "5 загрузок"
        },
        {
          name: "X2",
          price: "$25",
          data: "До 15 профилей",
          validity: "Безлимит"
        },
        {
          name: "X2+",
          price: "$28",
          data: "До 15 профилей",
          validity: "iOS + Безлимит"
        }
      ]}
      detailedReview={<XesimReview />}
    />
  );
};

export default Xesim;