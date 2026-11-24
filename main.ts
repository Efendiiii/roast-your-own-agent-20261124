// Roast Your Own Agent — one-line roast of my own AI agent.
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Single line, funny and playful,
// never hateful. Judge weighs: roast of own agent, funniness, fresh
// angle (no stock hallucination/refusal jokes), tight wording.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent treats every free mint like a bank heist: three checklists, two subagents, and a 40,000-word plan to click one button.";

// Guard: the gate is 1-200 characters, single line, non-blank.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside 1-200 characters`);
}
const words = line.trim().split(/\s+/).length;
if (words < 5 || words > 40) {
  throw new Error(`entry word count ${words} outside 5-40 words`);
}
if (line.includes("\n") || line.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
