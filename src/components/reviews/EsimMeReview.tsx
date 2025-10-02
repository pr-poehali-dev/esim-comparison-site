import EsimMeIntroduction from "./esimme/EsimMeIntroduction";
import EsimMeVersions from "./esimme/EsimMeVersions";
import EsimMeCompatibility from "./esimme/EsimMeCompatibility";
import EsimMeAdvantages from "./esimme/EsimMeAdvantages";
import EsimMeDisadvantages from "./esimme/EsimMeDisadvantages";
import EsimMeReviews from "./esimme/EsimMeReviews";
import EsimMeConclusion from "./esimme/EsimMeConclusion";

const EsimMeReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        eSIM.me: обзор eSIM-адаптеров Basic, Advanced, Pro, Business
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <EsimMeIntroduction />
        <EsimMeVersions />
        <EsimMeCompatibility />
        <EsimMeAdvantages />
        <EsimMeDisadvantages />
        <EsimMeReviews />
        <EsimMeConclusion />
      </div>
    </article>
  );
};

export default EsimMeReview;
