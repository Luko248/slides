import Main from "./slides/Main.astro";
import Speaker from "./slides/Speaker.astro";
import AISContext from "./slides/AISContext.astro";
import MyRole from "./slides/MyRole.astro";
import CurrentState from "./slides/CurrentState.astro";
import TheBeginning from "./slides/TheBeginning.astro";
import FigmaMCP from "./slides/FigmaMCP.astro";
import FigmaCodeConnect from "./slides/FigmaCodeConnect.astro";
import PainPoint1 from "./slides/PainPoint1.astro";
import AIGuidelines from "./slides/AIGuidelines.astro";
import GuidelinesStructure from "./slides/GuidelinesStructure.astro";
import Distribution from "./slides/Distribution.astro";
import FirstVersion from "./slides/FirstVersion.astro";
import PainPoint2 from "./slides/PainPoint2.astro";
import FirstProblems from "./slides/FirstProblems.astro";
import SmartMerge from "./slides/SmartMerge.astro";
import BeyondUI from "./slides/BeyondUI.astro";
import HallucinationProblem from "./slides/HallucinationProblem.astro";
import SlashCommands from "./slides/SlashCommands.astro";
import Skills from "./slides/Skills.astro";
import CodeReviewSkill from "./slides/CodeReviewSkill.astro";
import MultiToolSupport from "./slides/MultiToolSupport.astro";
import PainPoint3 from "./slides/PainPoint3.astro";
import MaintenanceProblem from "./slides/MaintenanceProblem.astro";
import HejKamo from "./slides/HejKamo.astro";
import TemplateEngine from "./slides/TemplateEngine.astro";
import AdapterConfigs from "./slides/AdapterConfigs.astro";
import TemplateToOutput from "./slides/TemplateToOutput.astro";
import SkillTemplate from "./slides/SkillTemplate.astro";
import AgentTemplates from "./slides/AgentTemplates.astro";
import WindsurfRules from "./slides/WindsurfRules.astro";
import ShipItFlow from "./slides/ShipItFlow.astro";
import OutputStructure from "./slides/OutputStructure.astro";
import FinalOptimization from "./slides/FinalOptimization.astro";
import Summary from "./slides/Summary.astro";
import Timeline from "./slides/Timeline.astro";
import Results from "./slides/Results.astro";
import HumanProblem from "./slides/HumanProblem.astro";
import Outro from "./slides/Outro.astro";

const slides = [
  Main,
  Speaker,
  AISContext,
  MyRole,
  CurrentState,
  TheBeginning,
  FigmaMCP,
  FigmaCodeConnect,
  PainPoint1,
  AIGuidelines,
  GuidelinesStructure,
  Distribution,
  FirstVersion,
  PainPoint2,
  FirstProblems,
  SmartMerge,
  BeyondUI,
  HallucinationProblem,
  SlashCommands,
  Skills,
  CodeReviewSkill,
  MultiToolSupport,
  PainPoint3,
  MaintenanceProblem,
  HejKamo,
  TemplateEngine,
  AdapterConfigs,
  TemplateToOutput,
  SkillTemplate,
  AgentTemplates,
  WindsurfRules,
  ShipItFlow,
  OutputStructure,
  FinalOptimization,
  Summary,
  Timeline,
  Results,
  HumanProblem,
  Outro,
].map((component, index) => ({ component, order: index + 1 }));

export const aiWorkflowSource = {
  id: "ai-workflow",
  meta: {
    language: "sk",
    title: "AI abstractions over Design System | Lukáš Chylík",
    description:
      "Cesta od vibe codingu k AI-first vývoju v AIS Servis. AI abstrakcie nad design systémom pre frontend vývojárov.",
    author: "Lukas Chylik",
    keywords:
      "AI, Design System, AI Guidelines, Frontend Development, Claude Code, GitHub Copilot, Windsurf",
  },
  theme: {
    colorTheme500: "#59d5ff",
    colorTheme600: "#7adeff",
    colorTheme200: "#d4f3ff",
  },
  footer: {
    logoSrc: "/slides/assets/ais-logo.svg",
    logoAlt: "AIS logo",
    websiteHref: "https://lukaschylik.dev",
    websiteLabel: "lukaschylik.dev",
  },
  slides,
} as const;

export type SlideSourceConfig = typeof aiWorkflowSource;
