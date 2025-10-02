import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const XesimModels = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">Характеристики и функциональность моделей</h3>
      
      <div className="grid md:grid-cols-3 gap-6 my-6">
        <Card className="border-2 border-blue-500/30 bg-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <Icon name="Smartphone" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">X1</h4>
            </div>
            <p className="text-sm mb-4 text-blue-700 dark:text-blue-400 font-medium">~$20</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>До 15 профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>5 бесплатных загрузок</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span>Доплата за новые загрузки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>Требуется Android</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-teal-500/30 bg-teal-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">X2</h4>
            </div>
            <p className="text-sm mb-4 text-teal-700 dark:text-teal-400 font-medium">~$25</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>До 15 профилей</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Неограниченные загрузки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Без абонплаты</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>Требуется Android</span>
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
              <h4 className="text-xl font-bold text-foreground">X2+</h4>
            </div>
            <p className="text-sm mb-4 text-purple-700 dark:text-purple-400 font-medium">~$28</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Всё из X2</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Поддержка iPhone</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>SeedLink из коробки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>SIM Toolkit меню</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-2 border-teal-500/20">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={32} className="text-teal-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Какую модель выбрать?</h4>
            <p className="text-sm leading-relaxed">
              <strong>X1</strong> – для редких поездок и тестирования технологии.<br/>
              <strong>X2</strong> – для активных путешественников с Android.<br/>
              <strong>X2+</strong> – для владельцев iPhone или максимального удобства.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XesimModels;
