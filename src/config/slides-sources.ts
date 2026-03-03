import { aiWorkflowSource } from "@slides/source-ai-workflow/source";
import { cssScrollStateSource } from "@slides/source-css-scroll-state/source";
import { figmaBeyondDesignSource } from "@slides/source-figma-beyond-design/source";
import type { SlidesSource } from "../types/slides-source";
import { appConfig } from "./app.config";

const slidesSources: Record<string, SlidesSource> = {
  "ai-workflow": aiWorkflowSource,
  "css-scroll-state": cssScrollStateSource,
  "figma-beyond-design": figmaBeyondDesignSource,
};

export function getActiveSlidesSource(): SlidesSource {
  const source = slidesSources[appConfig.slidesSource];

  if (!source) {
    throw new Error(
      `Unknown slides source \"${appConfig.slidesSource}\". Add it to src/config/slides-sources.ts`,
    );
  }

  return source;
}
