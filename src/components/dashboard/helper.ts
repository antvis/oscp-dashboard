import * as d3 from 'd3-array';
import PRS from '../../prs.json';

function getDate(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  return `${year}-${month > 9 ? month : `0${month}`}`;
}

function filterRepoAndTimeRange(PRS, repos, timeRange) {
  const [start, end] = timeRange;
  return PRS.filter((d) => repos.includes(d.repo) && new Date(d.merged_at) > start && new Date(d.merged_at) < end);
}

function getTimeRangeDate(timeRange) {
  switch (timeRange) {
    case 'latest1m':
      return new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    case 'latest1y':
      return new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    default:
      return new Date(0); // all
  }
}

export function getRateData(repos, timeRange) {
  const filtered = filterRepoAndTimeRange(PRS, repos, [getTimeRangeDate(timeRange), new Date()]);

  return {
    contributor: d3.group(filtered, (v) => v.login).size,
    pr: filtered.filter((d) => d.author_association === "CONTRIBUTOR").length,
    total: filtered.length,
  };
}

export function getTopContributors(repos, timeRange, n = 10) {
  const filtered = filterRepoAndTimeRange(
    PRS.filter((d) => d.author_association === "CONTRIBUTOR"),
    repos,
    [getTimeRangeDate(timeRange), new Date()]
  );

  const groups = d3.group(filtered, (v) => v.login);
  const result = Array.from(groups, ([login, prs]) => ({
    login,
    contributing: prs.length,
    avatar_url: prs?.[0]?.avatar_url,
  })).filter((d) => d.contributing > 0);

  return result.sort((a, b) => b.contributing - a.contributing).slice(0, n);
}

export function getContributingTrending(repos) {
  // all
  const oneYearPRs = filterRepoAndTimeRange(PRS, repos, [
    new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), // 近一年
    new Date(),
  ]);

  // const start = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
  // const oneYearPRs = filtered.filter((v) => new Date(v.merged_at) > start);

  const groups = d3.group(oneYearPRs, (v) => getDate(v.merged_at));

  const result = Array.from(groups, ([date, prs]) => ({
    date,
    contributing: prs.filter((d) => d.author_association === "CONTRIBUTOR")
      .length,
    total: prs.length,
  })).sort((a, b) => a.date.localeCompare(b.date));

  return {
    rate: result.map((d) => ({
      rate: d.contributing / d.total,
      ...d,
    })),
    compare: result.reduce((acc, { date, contributing, total }) => {
      return acc.concat([
        { date, type: "Contributor", value: contributing },
        { date, type: "Member", value: total - contributing },
      ]);
    }, []),
  };
}
