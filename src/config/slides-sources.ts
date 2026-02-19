import { aiWorkflowSource } from "@slides/source-ai-workflow/source";
import type { SlidesSource } from "../types/slides-source";
import { appConfig } from "./app.config";

const slidesSources: Record<string, SlidesSource> = {
  "ai-workflow": aiWorkflowSource,
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
