// Metadatos calculados una sola vez durante el build estático.
import { execSync } from "node:child_process";

export interface GitCommit {
  hash: string;
  date: string;
  subject: string;
}

export interface BuildMetadata {
  builtAt: string;
  commit: GitCommit | null;
  recent: GitCommit[];
}

const PROJECT_ROOT: URL = new URL("../../", import.meta.url);

function runGit(command: string): string | null {
  try {
    return execSync(command, {
      cwd: PROJECT_ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function parseGitEntry(line: string): GitCommit | null {
  const [hash, date, ...subjectParts] = line.split("\t");

  if (!hash || !date || subjectParts.length === 0) {
    return null;
  }

  return {
    hash,
    date,
    subject: subjectParts.join("\t"),
  };
}

function readRecent(): GitCommit[] {
  const output = runGit("git log -5 --format=%h%x09%cs%x09%s");

  if (!output) {
    return [];
  }

  const entries: GitCommit[] = [];

  for (const line of output.split("\n")) {
    const entry = parseGitEntry(line);
    if (entry) {
      entries.push(entry);
    }
  }

  return entries;
}

const latestCommitOutput: string | null = runGit(
  "git log -1 --format=%h%x09%cI%x09%s",
);

export const BUILD: BuildMetadata = {
  builtAt: new Date().toISOString(),
  commit: latestCommitOutput ? parseGitEntry(latestCommitOutput) : null,
  recent: readRecent(),
};
