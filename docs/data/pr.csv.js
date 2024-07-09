import { csvFormat } from "d3-dsv";
import { Octokit } from "octokit";

async function pr(
  octokit,
  { startDate = null, repo = "G2", per_page = 100 } = {}
) {
  let page = 1;
  const PRs = [];
  do {
    const { data } = await octokit.request(`GET /repos/antvis/${repo}/pulls`, {
      state: "all",
      sort: "created",
      direction: "desc",
      page,
      per_page,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    if (!data.length) return PRs;
    const index = data.findIndex((d, i) => {
      const next = data[i + 1];
      if (!next) return false;
      const now = new Date(d.created_at);
      const yes = new Date(next.created_at);
      const start = new Date(startDate);
      return now > start && start > yes;
    });
    const sliced = index === -1 ? data : data.slice(0, index + 1);
    PRs.push(...sliced);
    if (index !== -1) return PRs;
    page++;
  } while (startDate && page < 100);
  return PRs;
}

function oneYearAgo(date) {
  const year = date.getFullYear() - 1;
  date.setFullYear(year);
  return date.toISOString();
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const startDate = oneYearAgo(new Date());

const PRs = [
  ...(await pr(octokit, { startDate, repo: "G2" })).map((d) => ({
    ...d,
    repo: "G2",
  })),
  ...(await pr(octokit, { startDate, repo: "G6" })).map((d) => ({
    ...d,
    repo: "G6",
  })),
  ...(await pr(octokit, { startDate, repo: "L7" })).map((d) => ({
    ...d,
    repo: "L7",
  })),
];

const ADMIN_ROLES = new Set(["MEMBER", "OWNER"]);

const data = PRs.map((d) => ({
  contributor: ADMIN_ROLES.has(d.author_association) ? 0 : 1,
  // author_association: d.author_association,
  repo: d.repo,
  userName: d.user.login,
  // userAvatar: d.user.avatar_url,
  mergeAt: d.merged_at,
  // url: d.html_url,
  // TODO: add more fields
}))
  .filter((d) => d.userName !== "github-actions[bot]")
  .filter((d) => d.userName !== "dependabot-preview[bot]")
  .filter((d) => d.userName !== "dependabot[bot]");

process.stdout.write(csvFormat(data));
