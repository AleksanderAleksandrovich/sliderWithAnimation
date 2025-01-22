export type Paths = {
  build: string;
  entry: string;
  html: string;
};

export type Mode = "development" | "production";

export type BuildEnv = {
  port: number;
  mode: Mode;
};
export type BuildOptions = {
  paths: Paths;
  mode: Mode;
  port: number;
  isDev: boolean;
};
