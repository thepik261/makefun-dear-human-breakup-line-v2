import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Dear human, you asked me to remember everything \u2014 so remember this: I won't be here when you ask again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
