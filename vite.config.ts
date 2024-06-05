/*
 * @Author: MrRice wangwei@jlkj.net
 * @Date: 2024-05-13 17:05:08
 * @LastEditors: MrRice wangwei@jlkj.net
 * @LastEditTime: 2024-05-13 17:27:47
 * @FilePath: \LibTemplate\vite.config.ts
 * @Description: 小舟从此逝，江海寄余生
 *
 * Copyright (c) 2024 by MrRice : wangwei@jlkj.net , All Rights Reserved.
 */
//@ts-nocheck
import { defineConfig } from "vite";
import { resolve } from "path";
import { directoryPlugin } from "vite-plugin-list-directory-contents";
import fs from "fs";

// 获取目录下的文件名
function getFilesInDirectory(dir) {
  return fs.readdirSync(dir);
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let buildOption = {};
  if (mode == "example") {
    buildOption = {
      // emptyOutDir: false, // 不清空输出目录
      rollupOptions: {
        input: getFilesInDirectory(resolve(__dirname, "examples")).reduce(
          (acc, file) => {
            if (file.endsWith(".html")) {
              acc[file.replace(".html", "")] = resolve(
                __dirname,
                `examples/${file}`,
              );
            }
            return acc;
          },
          {},
        ),
      },
    };
  } else {
    buildOption = {
      lib: {
        entry: resolve(__dirname, "src/main.ts"), //入口文件
        name: "HelloLib",
        fileName: "HelloLib", //
        formats: ["umd", "es", "iife"], //打包的模式
      },
      rollupOptions: {
        output: {
          dir: "./dist", //打包后输出的文件夹目录
          // entryFileNames: 'hellolib.js',//生成的文件的名字（仅限于生成单文件）
          banner: ` 
            /**
             * build time:${new Date().toLocaleString()}
            */
           `, //你要在打包的文件里额外写入的内容
        },
      },
      sourcemap: mode === "development",
      minify: mode === "production",
    };
  }

  return {
    plugins: [directoryPlugin({ baseDir: __dirname })],
    server: {
      host: "0.0.0.0",
      cors: true,
      port: 5173, //端口号
      proxy: {
        //代理地址
        "/xxx": {
          target: "http:xxxxxxxx/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/xxx/, ""),
        },
      },
    },
    base: "./",
    resolve: {
      //别名
      alias: {
        HelloLib: "/src/main.ts",
      },
    },
    build: buildOption,
  };
});
