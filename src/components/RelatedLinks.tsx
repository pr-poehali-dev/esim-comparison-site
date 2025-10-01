import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface RelatedLink {
  title: string;
  description: string;
  url: string;
  icon: string;
  gradient: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
}

const RelatedLinks = ({ links }: RelatedLinksProps) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Icon name="Link" size={24} />
        Похожие материалы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <Link key={index} to={link.url} className="block group">
            <Card className="h-full border-2 border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className={`h-2 bg-gradient-to-r ${link.gradient}`}></div>
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center shrink-0`}>
                    <Icon name={link.icon as any} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {link.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {link.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
