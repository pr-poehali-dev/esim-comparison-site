import UnisimkaIntroduction from "./unisimka/UnisimkaIntroduction";
import UnisimkaVersions from "./unisimka/UnisimkaVersions";
import UnisimkaCompatibility from "./unisimka/UnisimkaCompatibility";
import UnisimkaUsage from "./unisimka/UnisimkaUsage";
import UnisimkaProsAndCons from "./unisimka/UnisimkaProsAndCons";
import UnisimkaReviews from "./unisimka/UnisimkaReviews";
import UnisimkaConclusion from "./unisimka/UnisimkaConclusion";

const UnisimkaReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        Обзор eSIM-адаптеров Unisimka (V1, V2, «Cloud»)
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <UnisimkaIntroduction />
        <UnisimkaVersions />
        <UnisimkaCompatibility />
        <UnisimkaUsage />
        <UnisimkaProsAndCons />
        <UnisimkaReviews />
        <UnisimkaConclusion />
      </div>
    </article>
  );
};

export default UnisimkaReview;
