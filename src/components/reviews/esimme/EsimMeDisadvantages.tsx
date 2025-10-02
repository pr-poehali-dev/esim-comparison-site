import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const EsimMeDisadvantages = () => {
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
                <h4 className="font-bold text-foreground mb-2">Зависимость от Android-приложения</h4>
                <p className="text-sm">Без Android-устройства на руках вы не сможете добавить или переключить eSIM. Бесполезно для пользователей только с iPhone без доступа к Android.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Layers" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Один профиль активен</h4>
                <p className="text-sm">eSIM.me не поддерживает одновременную работу нескольких eSIM на одной карте (кроме как иметь два адаптера). Это всегда моно-SIM устройство.</p>
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
                <h4 className="font-bold text-foreground mb-2">Лицензии Single/Multi создают неудобства</h4>
                <p className="text-sm">Basic заблокирован на одном телефоне, Advanced привязан к бренду. Только купив Omni (Pro), пользователь получает полную свободу устройства.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="DollarSign" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Цена и доступность</h4>
                <p className="text-sm">Недёшево: базовый Single ~$25-30, топовый Omni ~$70, Dual ~$130. Для сравнения, за $70 можно купить бюджетный смартфон с поддержкой eSIM.</p>
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
                <h4 className="font-bold text-foreground mb-2">Глюки и сбои в работе</h4>
                <p className="text-sm">Некоторые клиенты сообщают о пропадании профилей, проблемах с активацией, потере связи. Приложение может не видеть карту или не давать активировать профиль.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-500/30 bg-red-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Слабая техподдержка</h4>
                <p className="text-sm">Обращения через тикет-систему остаются без ответа неделями и даже месяцами. На Trustpilot рейтинг ~2.4/5 в основном из-за игнорирования запросов о помощи.</p>
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
                <h4 className="font-bold text-foreground mb-2">Требует технической грамотности</h4>
                <p className="text-sm">Это не для неофитов. Нужно понимать, как установить профиль, что делать при ошибках, быть готовым к нестандартным ситуациям и много терпения.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EsimMeDisadvantages;
