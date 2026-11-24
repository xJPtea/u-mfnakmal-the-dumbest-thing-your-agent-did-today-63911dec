import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dumbest thing my agent did today: the Argonmine watchdog keeps
// restarting a healthy miner to "fix" a pool that has been down since
// 13 November, and has never once noticed the pool is the problem.
const line =
  "My agent keeps restarting my miner every ten minutes to fix a pool that died on 13 November. The miner is fine, the pool is not, and it still hasn't noticed.";

// The gate allows 1-200 characters: fail loudly here rather than shipping
// an entry the scorer would refuse.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
