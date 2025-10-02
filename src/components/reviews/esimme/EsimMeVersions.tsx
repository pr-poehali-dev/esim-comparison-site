import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const EsimMeVersions = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Линейка eSIM.me: версии Basic, Advanced, Pro, Business</h3>
      
      <p className="leading-relaxed mb-6">
        Хотя физически карта eSIM.me одна и та же, её функциональность определяется лицензией, привязанной к карте. На рынке представлено четыре варианта (тарифных плана) eSIM.me.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <Icon name="Smartphone" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Basic (Single)</h4>
            </div>
            <p className="text-sm mb-4 text-blue-700 dark:text-blue-400 font-medium">~$25-30</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>2-5 eSIM-профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Самая низкая цена</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>Привязка к 1 устройству</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>$10 за смену устройства</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-500/30 bg-indigo-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <Icon name="Layers" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Advanced (Multi)</h4>
            </div>
            <p className="text-sm mb-4 text-indigo-700 dark:text-indigo-400 font-medium">~$40-50</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>5-10 eSIM-профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Несколько устройств 1 бренда</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span>€10 за смену бренда</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Больше профилей</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-500/30 bg-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Crown" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Pro (Omni)</h4>
            </div>
            <p className="text-sm mb-4 text-purple-700 dark:text-purple-400 font-medium">~$70</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>До 15 eSIM-профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Любые устройства</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Без ограничений</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Максимальная свобода</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-pink-500/30 bg-pink-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                <Icon name="Briefcase" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Business (Dual)</h4>
            </div>
            <p className="text-sm mb-4 text-pink-700 dark:text-pink-400 font-medium">~$130</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>2 карты Omni</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>До 30 профилей суммарно</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>2 активные eSIM одновременно</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Для максималистов</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-indigo-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Какую версию выбрать?</h4>
            <p className="text-sm leading-relaxed">
              <strong>Basic</strong> – для редкого использования на одном телефоне.<br/>
              <strong>Advanced</strong> – для нескольких устройств одного бренда.<br/>
              <strong>Pro</strong> – для максимальной гибкости без ограничений.<br/>
              <strong>Business</strong> – для профессионалов или двух одновременных eSIM.
            </p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed text-sm text-muted-foreground">
        <strong>Важно:</strong> Все версии позволяют неограниченно скачивать eSIM-профили (количество загрузок не тарифицируется), ограничением выступает только объём памяти для хранения на самой карте.
      </p>
    </div>
  );
};

export default EsimMeVersions;
