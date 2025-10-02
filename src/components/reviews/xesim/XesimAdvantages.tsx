import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimAdvantages = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Преимущества адаптеров xESIM</h3>
      
      <div className="space-y-4 my-6">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Smartphone" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">eSIM для любого устройства</h4>
                <p className="text-sm">Главное достоинство – возможность добавить функциональность eSIM практически на любой смартфон или гаджет с SIM-слотом. Нет необходимости менять телефон ради поддержки eSIM.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Layers" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Множество профилей</h4>
                <p className="text-sm">До 15 профилей одновременно с быстрым переключением. Заранее записывайте тарифы для разных стран и переключайтесь между ними за секунды.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="DollarSign" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Низкая стоимость</h4>
                <p className="text-sm">Разовая покупка от $20 без абонплаты. X2 предлагает безлимитные загрузки, что окупается уже после нескольких поездок.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Unlock" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Независимость</h4>
                <p className="text-sm">Нет привязки к конкретным операторам. Используйте любые eSIM-профили от разных провайдеров по вашему выбору.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XesimAdvantages;
