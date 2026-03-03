import Main from "./slides/Main.astro";
import Speaker from "./slides/Speaker.astro";
import Intro from "./slides/Intro.astro";
import VariableCodeSyntax from "./slides/VariableCodeSyntax.astro";
import VCSHowItWorks from "./slides/VCSHowItWorks.astro";
import VCSMultiPlatform from "./slides/VCSMultiPlatform.astro";
import ExportTokens from "./slides/ExportTokens.astro";
import TokensAPI from "./slides/TokensAPI.astro";
import TokensConversion from "./slides/TokensConversion.astro";
import MultiThemeExport from "./slides/MultiThemeExport.astro";
import FigmaPlugin from "./slides/FigmaPlugin.astro";
import PluginCore from "./slides/PluginCore.astro";
import PluginGitHub from "./slides/PluginGitHub.astro";
import PluginWorkflow from "./slides/PluginWorkflow.astro";
import PluginDemo from "./slides/PluginDemo.astro";
import CodeConnect from "./slides/CodeConnect.astro";
import CodeConnectMapping from "./slides/CodeConnectMapping.astro";
import CodeConnectCard from "./slides/CodeConnectCard.astro";
import MCPServer from "./slides/MCPServer.astro";
import MCPSetup from "./slides/MCPSetup.astro";
import MCPButtonExample from "./slides/MCPButtonExample.astro";
import MCPCodeConnect from "./slides/MCPCodeConnect.astro";
import MCPGamechanger from "./slides/MCPGamechanger.astro";
import AgentSkills from "./slides/AgentSkills.astro";
import SkillStructure from "./slides/SkillStructure.astro";
import Summary from "./slides/Summary.astro";
import Future from "./slides/Future.astro";
import Resources from "./slides/Resources.astro";
import Outro from "./slides/Outro.astro";
import aisLogo from "./assets/ais-logo.svg?url";

const slides = [
  Main,
  Speaker,
  Intro,
  VariableCodeSyntax,
  VCSHowItWorks,
  VCSMultiPlatform,
  ExportTokens,
  TokensAPI,
  TokensConversion,
  MultiThemeExport,
  FigmaPlugin,
  PluginCore,
  PluginGitHub,
  PluginWorkflow,
  PluginDemo,
  CodeConnect,
  CodeConnectMapping,
  CodeConnectCard,
  MCPServer,
  MCPSetup,
  MCPButtonExample,
  MCPCodeConnect,
  MCPGamechanger,
  AgentSkills,
  SkillStructure,
  Summary,
  Future,
  Resources,
  Outro,
].map((component, index) => ({ component, order: index + 1 }));

export const figmaBeyondDesignSource = {
  id: "figma-beyond-design",
  meta: {
    language: "sk",
    title: "Figma Beyond Design | Lukáš Chylík",
    description:
      "Ako využiť Figma API, Variable Code Syntax, Code Connect a MCP server na automatizáciu design tokenov a generovanie production-ready komponent.",
    author: "Lukáš Chylík",
    keywords:
      "Figma, API, Variable Code Syntax, Code Connect, MCP Server, Design Tokens, AI, Design-to-Code",
  },
  theme: {
    colorTheme500: "#BEE600",
    colorTheme600: "#D4FF1A",
    colorTheme200: "#F5FFD6",
    codeBgLight: "#F5FFD6",
    codeBgDark: "#2A3300",
    fontFamilyDesc: '"League Spartan"',
  },
  footer: {
    logoSrc: aisLogo,
    logoAlt: "AIS logo",
    websiteHref: "https://lukaschylik.dev",
    websiteLabel: "lukaschylik.dev",
  },
  slides,
} as const;

export type SlideSourceConfig = typeof figmaBeyondDesignSource;
