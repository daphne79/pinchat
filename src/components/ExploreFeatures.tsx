import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { getRelatedFeatures, FeatureKey, ALL_FEATURES } from "@/lib/featureRelations";
import * as LucideIcons from "lucide-react";

interface ExploreFeaturesProps {
  currentFeature: FeatureKey;
}

const ExploreFeatures = ({ currentFeature }: ExploreFeaturesProps) => {
  const { t } = useTranslation();
  const relatedFeatures = getRelatedFeatures(currentFeature, 3);

  // Get icon component dynamically
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent || LucideIcons.Link2; // Fallback icon
  };

  if (relatedFeatures.length === 0) {
    return null;
  }

  const currentFeatureConfig = ALL_FEATURES[currentFeature];
  const titleKey = `${currentFeatureConfig.exploreFeaturesKey}.title`;

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-wide leading-normal lg:leading-[1.2] mb-6">
            {t(titleKey)}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {relatedFeatures.map((feature) => {
            const IconComponent = getIcon(feature.icon);
            
            // Get translation keys for this feature using the exploreFeaturesKey of the current page
            // and the translationSubKey of the related feature
            const featureTitleKey = `${currentFeatureConfig.exploreFeaturesKey}.${feature.translationSubKey}.title`;
            const featureDescKey = `${currentFeatureConfig.exploreFeaturesKey}.${feature.translationSubKey}.description`;

            return (
              <Link key={feature.key} to={feature.route}>
                <Card className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#02B13F]/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-[#02B13F]" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      {t(featureTitleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t(featureDescKey)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreFeatures;

