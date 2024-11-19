import packageJson from './package.json';
import { spawnSync } from 'child_process';

const gitCommit = spawnSync('git', ['rev-parse', '--short', 'HEAD'])
  .stdout.toString()
  .trim();

const config = {
  __APP_NAME__: packageJson.displayName,
  __APP_VERSION__: packageJson.version,
  __GIT_COMMIT__: gitCommit,
  __REPO_URL__: packageJson.homepage,
  __COMMIT_URL__: `${packageJson.homepage}/commit/${gitCommit}`,

  'import.meta.env.TITLE': packageJson.displayName,
};

export const defineViteConfig = Object.fromEntries(
  Object.entries(config).map(([key, value]) => [key, JSON.stringify(value)])
);
