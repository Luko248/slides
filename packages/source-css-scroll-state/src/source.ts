import Main from "./slides/Main.astro";
import Speaker from "./slides/Speaker.astro";
import Intro from "./slides/Intro.astro";
import Intro2 from "./slides/Intro2.astro";
import BasicSyntax from "./slides/BasicSyntax.astro";
import AdvancedSyntax from "./slides/AdvancedSyntax.astro";
import ScrollableState from "./slides/ScrollableState.astro";
import ScrollableStateAdvanced from "./slides/ScrollableStateAdvanced.astro";
import StuckState from "./slides/StuckState.astro";
import StuckStateAdvanced from "./slides/StuckStateAdvanced.astro";
import SnappedState from "./slides/SnappedState.astro";
import SnappedStateAdvanced from "./slides/SnappedStateAdvanced.astro";
import BestPractices from "./slides/BestPractices.astro";
import BrowserSupport from "./slides/BrowserSupport.astro";
import Social from "./slides/Social.astro";
import Outro from "./slides/Outro.astro";
import deckLogo from "./assets/logo.svg?url";

const slides = [
  Main,
  Speaker,
  Intro,
  Intro2,
  BasicSyntax,
  AdvancedSyntax,
  ScrollableState,
  ScrollableStateAdvanced,
  StuckState,
  StuckStateAdvanced,
  SnappedState,
  SnappedStateAdvanced,
  BestPractices,
  BrowserSupport,
  Social,
  Outro,
].map((component, index) => ({ component, order: index + 1 }));

export const cssScrollStateSource = {
  id: "css-scroll-state",
  meta: {
    language: "sk",
    title: "CSS container scroll-state queries | Frontkon 25 | Lukáš Chylik",
    description:
      "Objavte silu CSS container scroll-state queries - modernej technológie pre detekciu stavu scrollovania kontajnerov. Prezentácia z Frontkon 25 od Lukáša Chylika.",
    author: "Lukas Chylik",
    keywords:
      "CSS container scroll-state queries, CSS, Web Development, Presentation",
  },
  theme: {
    colorTheme500: "hsl(283 91% 57%)",
    colorTheme600: "hsl(283 91% 65%)",
    colorTheme200: "hsl(279deg 92% 90%)",
    codeBgLight: "hsl(279deg 92% 90%)",
    codeBgDark: "hsl(283 91% 20%)",
  },
  footer: {
    logoSrc: deckLogo,
    logoAlt: "Logo",
    websiteHref: "https://lukaschylik.dev",
    websiteLabel: "lukaschylik.dev",
  },
  slides,
} as const;

export type CssScrollStateSourceConfig = typeof cssScrollStateSource;
