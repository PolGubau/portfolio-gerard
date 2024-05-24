const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

module.exports = {
  root: true,
  extends: [
    require.resolve("pol-standard/eslint/node"),
    require.resolve("pol-standard/eslint/react"),
    require.resolve("pol-standard/eslint/typescript"),
    require.resolve("pol-standard/eslint/browser"),
    require.resolve("pol-standard/eslint/vitest"),
    // ... other configs
  ],
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
