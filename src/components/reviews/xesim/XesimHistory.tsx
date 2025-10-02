import Icon from "@/components/ui/icon";

const XesimHistory = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-foreground">История бренда и связь с 5ber</h3>
      
      <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
        <div className="flex items-start gap-4">
          <Icon name="History" size={32} className="text-orange-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-foreground mb-2">Преемник 5ber</h4>
            <p className="text-sm leading-relaxed">
              Проект xESIM появился после краха 5ber в конце 2024 года. Команда учла ошибки прошлого: убрала обязательную регистрацию, сделала систему более независимой от сервера. Однако это всё ещё закрытая экосистема, требующая доверия к производителю.
            </p>
          </div>
        </div>
      </div>

      <p className="leading-relaxed mb-4">
        Бренд xESIM появился на волне событий вокруг адаптера 5ber. Напомним, 5ber был одним из самых популярных физических eSIM-решений, однако в конце 2024 года компания обанкротилась, оставив тысячи пользователей без работающих адаптеров.
      </p>
      <p className="leading-relaxed">
        xESIM стал ответом на этот кризис. Заявленная цель: учесть ошибки прошлого и предложить более надёжное решение. Важное улучшение – отсутствие обязательной регистрации, что снижает зависимость от серверов производителя.
      </p>
    </div>
  );
};

export default XesimHistory;
