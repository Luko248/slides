# @slides/source-figma-beyond-design

Presentation source package for the "Figma Beyond Design" deck.

## Topic

Figma API, Variable Code Syntax, Code Connect a MCP server ako nástroje na automatizáciu design-to-code workflow.

## Slides (29)

| #   | Slide              | Section                 |
| --- | ------------------ | ----------------------- |
| 1   | Main               | Title                   |
| 2   | Speaker            | About me                |
| 3   | Intro              | Figma as a platform     |
| 4   | VariableCodeSyntax | Variable Code Syntax    |
| 5   | VCSHowItWorks      | Variable Code Syntax    |
| 6   | VCSMultiPlatform   | Variable Code Syntax    |
| 7   | ExportTokens       | Export design tokens    |
| 8   | TokensAPI          | Export design tokens    |
| 9   | TokensConversion   | Export design tokens    |
| 10  | MultiThemeExport   | Export design tokens    |
| 11  | FigmaPlugin        | Custom Figma Plugin     |
| 12  | PluginCore         | Custom Figma Plugin     |
| 13  | PluginGitHub       | Custom Figma Plugin     |
| 14  | PluginWorkflow     | Custom Figma Plugin     |
| 15  | PluginDemo         | Custom Figma Plugin     |
| 16  | CodeConnect        | Code Connect            |
| 17  | CodeConnectMapping | Code Connect            |
| 18  | CodeConnectCard    | Code Connect            |
| 19  | MCPServer          | MCP Server              |
| 20  | MCPSetup           | MCP Server              |
| 21  | MCPButtonExample   | MCP Server              |
| 22  | MCPCodeConnect     | MCP + Code Connect      |
| 23  | MCPGamechanger     | MCP + Code Connect      |
| 24  | AgentSkills        | Agent SKILLS            |
| 25  | SkillStructure     | Agent SKILLS            |
| 26  | Summary            | Closing                 |
| 27  | Future             | Closing                 |
| 28  | Resources          | Closing                 |
| 29  | Outro              | Closing                 |

## What this package exports

- `src/source.ts` with:
  - presentation metadata (`meta`)
  - source theme tokens (`theme`)
  - footer branding (`footer`)
  - ordered slide list (`slides`)

## Content format

Slides are Astro (`.astro`) components. The app shell loads them through the exported `slides` array.
