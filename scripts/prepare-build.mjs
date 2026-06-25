import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const targets = [".stage-dist", "assets", "media", "index.html", "404.html", "CNAME"];

for (const target of targets) {
  const outputPath = resolve(root, target);

  if (existsSync(outputPath)) {
    rmSync(outputPath, { recursive: true, force: true });
  }
}
