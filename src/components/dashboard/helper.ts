import * as d3 from 'd3-array';
import PRS from '../../prs.json';

export function getDate(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  return `${year}-${month > 9 ? month : `0${month}`}`;
}

export function getRateData() {
  return {
    contributor: d3.group(PRS, (v) => v.login).size,
    pr: PRS.filter((d) => d.author_association === "CONTRIBUTOR").length,
    total: PRS.length,
  };
}

export function getTopContributors(n = 10) {
  const groups = d3.group(PRS, (v) => v.login);
  const result = Array.from(groups, ([login, prs]) => ({
    login,
    contributing: prs.length,
  }));

  return result.sort((a, b) => b.contributing - a.contributing).slice(0, n);
}

export function getContributingTrending() {
  const start = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
  const oneYearPRs = PRS.filter((v) => new Date(v.mergedAt) > start);

  const groups = d3.group(oneYearPRs, (v) => getDate(v.mergedAt));

  const result = Array.from(groups, ([date, prs]) => ({
    date,
    contributing: prs.filter((d) => d.author_association === "CONTRIBUTOR").length,
    total: prs.length,
  })).sort((a, b) => a.date.localeCompare(b.date));

  return {
    rate: result.map((d) => ({
      rate: d.contributing / d.total,
      ...d,
    })),
    compare: result.reduce((acc, { date, contributing, total }) => {
      return acc.concat([{ date, type: "Contributor", value: contributing }, { date, type: "Member", value: total - contributing }]);
    }, [])
  };
}
