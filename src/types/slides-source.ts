export interface SlideInstance {
  component: any;
  order: number;
}

export interface SlidesSource {
  id: string;
  meta: {
    language: string;
    title: string;
    description: string;
    author: string;
    keywords: string;
  };
  theme?: {
    colorTheme500?: string;
    colorTheme600?: string;
    colorTheme200?: string;
  };
  footer: {
    logoSrc: string;
    logoAlt: string;
    websiteHref: string;
    websiteLabel: string;
  };
  slides: SlideInstance[];
}
