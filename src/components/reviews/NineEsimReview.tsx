import NineEsimIntroduction from "./9esim/NineEsimIntroduction";
import NineEsimVersions from "./9esim/NineEsimVersions";
import NineEsimCompatibility from "./9esim/NineEsimCompatibility";
import NineEsimUsage from "./9esim/NineEsimUsage";
import NineEsimProsAndCons from "./9esim/NineEsimProsAndCons";
import NineEsimReviews from "./9esim/NineEsimReviews";
import NineEsimConclusion from "./9esim/NineEsimConclusion";

const NineEsimReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        9eSIM: обзор eSIM-адаптеров V0, V2, V3, V4
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <NineEsimIntroduction />
        <NineEsimVersions />
        <NineEsimCompatibility />
        <NineEsimUsage />
        <NineEsimProsAndCons />
        <NineEsimReviews />
        <NineEsimConclusion />
      </div>
    </article>
  );
};

export default NineEsimReview;
