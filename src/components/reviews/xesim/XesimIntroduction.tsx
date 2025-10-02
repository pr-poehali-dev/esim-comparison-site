import Icon from "@/components/ui/icon";

const XesimIntroduction = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Бренд xESIM и концепция eSIM-адаптеров</h3>
      <p className="leading-relaxed mb-4">
        xESIM – это новая марка физических eSIM-адаптеров, появившаяся в 2025 году. Она создана командой бывшего проекта 5ber и нацелена на то, чтобы дать возможность использовать электронные SIM-профили (eSIM) на любых устройствах, даже если в них нет встроенной поддержки eSIM.
      </p>
      <p className="leading-relaxed mb-4">
        По сути, адаптер xESIM представляет собой специальную «умную SIM-карту», внутри которой хранится чип eUICC (Embedded Universal Integrated Circuit Card) – аналог встроенного eSIM-модуля. Вставляя такую карту в слот обычной SIM, пользователь может загружать на неё цифровые eSIM-профили операторов и пользоваться ими, как обычными SIM-картами, без необходимости менять физические карты между поездками или операторами.
      </p>

      <div className="my-8 rounded-xl overflow-hidden border-2 border-border/50 bg-muted/30">
        <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-blue-500/10">
          <div className="text-center p-8">
            <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-teal-600" />
            <p className="text-sm font-medium text-foreground">Адаптер xESIM устанавливается как обычная nano-SIM</p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed">
        Главная идея eSIM-адаптера – совместимость и универсальность. xESIM утверждает, что её карты совместимы с большинством устройств под Android, iPhone и даже некоторыми гаджетами на HarmonyOS. В отличие от прежних решений, приложение Xesim не требует регистрации или входа в аккаунт, что упрощает настройку и означает отсутствие привязки к облачному сервису при базовом использовании.
      </p>
    </div>
  );
};

export default XesimIntroduction;
