// rollup.config.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import alias from "@rollup/plugin-alias";
import filesize from "rollup-plugin-filesize";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default [
  // umd module
  // esm module
  {
    input: {
      'index.js': "./main.ts"
    },
    external: [/node_modules/],
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      entryFileNames: "[name]",
    },
    plugins: [
      commonjs(),
      json(),
      alias({
        entries: {
          "@": path.resolve(__dirname, "../src"),
        },
      }),
      typescript({
        tsconfig: path.resolve(__dirname, "./tsconfig.build.json"),
      }),
      nodeResolve({
        extensions: [".js", ".ts"],
        preferBuiltins: true,
      }),
      filesize(),
      terser(),
    ],
  }
]
