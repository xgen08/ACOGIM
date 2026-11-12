import { withBase } from "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ufo/dist/index.mjs";
import { c as useRuntimeConfig } from "../server.mjs";
function asset(path) {
  if (!path) return path;
  return withBase(path, useRuntimeConfig().app.baseURL);
}
export {
  asset as a
};
//# sourceMappingURL=asset-CqhL-QqR.js.map
