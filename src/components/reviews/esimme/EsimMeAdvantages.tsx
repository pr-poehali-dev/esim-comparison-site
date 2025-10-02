import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const EsimMeAdvantages = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Преимущества адаптера eSIM.me</h3>
      
      <div className="space-y-4 my-6">
        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Smartphone" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">eSIM для несовместимых устройств</h4>
                <p className="text-sm">Главное достоинство – возможность пользоваться всеми преимуществами eSIM на аппаратах, которые изначально этого не умели. Продлевает жизнь старых смартфонов без необходимости покупать новый.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Repeat" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Универсальность и кросс-устройство</h4>
                <p className="text-sm">Адаптер можно переставлять между устройствами, перенося свои номера и тарифы «в кармане». Профили не привязаны к железу, как бывает с встроенной eSIM.</p>
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
                <h4 className="font-bold text-foreground mb-2">Много профилей (память на SIM)</h4>
                <p className="text-sm">eSIM.me хранит до 15 профилей (в Pro-версии), а с появлением V2 карт – до 30 при максимальном расширении. Больше, чем у топовых смартфонов со встроенной eSIM.</p>
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
                <h4 className="font-bold text-foreground mb-2">Нет абонентской платы</h4>
                <p className="text-sm">Все версии eSIM.me покупаются единоразово, никакой подписки или регулярных платежей нет. Расходы могут возникнуть только при добровольном апгрейде лицензии.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Globe" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Экономия и экологичность</h4>
                <p className="text-sm">Уменьшает использование пластиковых SIM и электронных отходов. С финансовой стороны, экономия на роуминге – можно покупать местные eSIM-планы по дешёвым тарифам.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-500/30 bg-green-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Продолжение работы при поломке</h4>
                <p className="text-sm">Если телефон сломался или сел аккумулятор, просто вынуть eSIM.me и вставить в запасной аппарат – связь сразу появится, т.к. профили хранятся на карте.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EsimMeAdvantages;
