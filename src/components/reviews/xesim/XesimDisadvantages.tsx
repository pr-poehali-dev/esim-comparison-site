import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimDisadvantages = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Недостатки и ограничения</h3>
      
      <div className="space-y-4 my-6">
        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Smartphone" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Необходимость Android</h4>
                <p className="text-sm">Для полноценной работы X1/X2 требуется Android-устройство. На iPhone управление ограничено SIM-меню, что неудобно.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Lock" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Закрытая экосистема</h4>
                <p className="text-sm">Хотя xESIM и ослабил привязку к аккаунту, система остаётся проприетарной. Зависимость от производителя всё ещё существует.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Ограничения X1</h4>
                <p className="text-sm">Базовая модель имеет лимит в 5 бесплатных загрузок, после чего требуется доплата. Апгрейд до X2 невозможен.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Settings" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Сложность настройки</h4>
                <p className="text-sm">Требует технических навыков для первоначальной настройки. SIM Toolkit менее удобен, чем современные приложения.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XesimDisadvantages;
