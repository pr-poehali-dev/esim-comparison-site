import XesimIntroduction from "./xesim/XesimIntroduction";
import XesimModels from "./xesim/XesimModels";
import XesimCompatibility from "./xesim/XesimCompatibility";
import XesimHistory from "./xesim/XesimHistory";
import XesimAdvantages from "./xesim/XesimAdvantages";
import XesimDisadvantages from "./xesim/XesimDisadvantages";
import XesimReviews from "./xesim/XesimReviews";
import XesimConclusion from "./xesim/XesimConclusion";

const XesimReview = () => {
  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
        Обзор eSIM-адаптеров xESIM: модели X1, X2 и X2+ (2025)
      </h2>
      
      <div className="space-y-8 text-muted-foreground">
        <XesimIntroduction />
        <XesimModels />
        <XesimCompatibility />
        <XesimHistory />
        <XesimAdvantages />
        <XesimDisadvantages />
        <XesimReviews />
        <XesimConclusion />
      </div>
    </article>
  );
};

export default XesimReview;
