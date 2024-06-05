/*
 * @Author: MrRice
 * @Date: 2024-06-05 10:30:47
 * @LastEditors: MrRice 1246333567@qq.com
 * @LastEditTime: 2024-06-05 10:52:51
 * @FilePath: /npm-library-universal-template/.eslintrc.cjs
 * @Description:
 * 小舟从此逝，江海寄余生。。。。。。
 * Copyright (c) 2024 by 米大饭, All Rights Reserved.
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
