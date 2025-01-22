import path from "path";

import { buildWebpackConfiguration } from "./config/build/buildWebpackConfiguration";
import { BuildEnv, Paths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: Paths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const mode = env.mode || "development";
  const isDev = mode === "development" ? true : false;
  const port = env.port || 3000;
  const config = buildWebpackConfiguration({ mode, paths, isDev, port });

  return config;
};
