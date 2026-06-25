import { cpSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const stageDistPath = resolve(root, ".stage-dist");
const indexPath = resolve(root, "index.html");
const notFoundPath = resolve(root, "404.html");
const publicPath = resolve(root, "site-src", "public");

if (existsSync(stageDistPath)) {
  cpSync(stageDistPath, root, { recursive: true });
}

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
}

if (existsSync(publicPath)) {
  cpSync(publicPath, root, { recursive: true });
}

if (existsSync(stageDistPath)) {
  rmSync(stageDistPath, { recursive: true, force: true });
}
