/// <reference path="../.astro/types.d.ts" />

declare const __APP_NAME__: string;
declare const __APP_VERSION__: string;
declare const __GIT_COMMIT__: string;
declare const __REPO_URL__: string;
declare const __COMMIT_URL__: string;

interface ImportMetaEnv {
  readonly TITLE: string;
}
