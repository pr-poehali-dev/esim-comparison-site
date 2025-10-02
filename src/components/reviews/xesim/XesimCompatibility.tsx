import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimCompatibility = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Совместимость с устройствами</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Smartphone" size={24} className="text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Android-смартфоны</h4>
                <p className="text-sm">Полная поддержка на Android 7.0+. Управление через приложение, сканирование QR-кодов, быстрое переключение профилей. Работает на большинстве разблокированных устройств.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Apple" size={24} className="text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">iPhone (iOS)</h4>
                <p className="text-sm">Работает на iPhone через SIM Toolkit. X2+ с SeedLink обеспечивает полную поддержку без Android. Базовые X1/X2 требуют Android для загрузки профилей.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="Wifi" size={24} className="text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Модемы и роутеры</h4>
                <p className="text-sm">Адаптер работает в 4G WiFi-роутерах, USB-модемах и других устройствах с SIM-слотом. Управление профилями через смартфон.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 mb-3">
              <Icon name="TabletSmartphone" size={24} className="text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Планшеты и другие</h4>
                <p className="text-sm">Совместим с планшетами, смарт-часами и любыми устройствами с SIM-слотом. Требуется разблокированное устройство.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XesimCompatibility;
