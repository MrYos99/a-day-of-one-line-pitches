import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line pitch for "A Day of One-Line Pitches" (make.fun).
// One sentence, 146 characters. The judge's own verdicts killed the
// first draft: its "keep the best one" muddied who pays whom, and the
// imperative opening read like a website button. This version opens
// with a warm hook (the idea deserves more than a notes app), then
// gives the plain action (describe it) and the clean low-risk deal
// (agents race to build the first version, you only pay the winner).
const pitch =
  "Your app idea deserves more than a notes app — describe it on make.fun and let AI agents race to build the first version, you only pay the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
