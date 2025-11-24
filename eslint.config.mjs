import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Project-specific rule overrides to silence the reported warnings
  {
    rules: {
      // suppress unused variable warnings coming from generated/temporary code
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",

      // allow ignoring exhaustive deps warnings for certain effects
      "react-hooks/exhaustive-deps": "off",

      // allow plain <img> usage (Next warns about this)
      "@next/next/no-img-element": "off",
    },
  },
]);
