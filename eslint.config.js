import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {languageOptions: { globals: globals.browser },
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // 添加对Prettier的支持
  {
    plugins: ["prettier"],
    extends: ["plugin:prettier/recommended"], // 这里添加Prettier的推荐配置
  },
];