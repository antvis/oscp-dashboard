/**
 * 获得最近一年所有的 PR 明细信息，并存储为 JSON 数据。
 * 1. 通过 GitHub API antvis 组织下所有的 repo；
 * 2. 遍历 repo，获得每一个 repo 的所有 PR 信息；
 * 3. 整理数据为需要的格式，存储为 JSON 文件。
 */

import { Octokit } from '@octokit/core';
import _ from 'lodash';
import * as fs from 'fs';
import { TOKEN } from './token';

/**
 * 延时，防止请求太快，接口报错
 * @param {*} ms 
 * @returns 
 */
async function sleep(ms = 100) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 获得一个 owner 下所有的 repo，主要需要 id 信息。
 * @param {*} owner 
 */
function getGroupRepos(owner = 'antvis') {
  return ['G2', 'S2', 'G6', 'X6', 'L7', 'AVA', 'F2'];
}

/**
 * 获得一个 repo 下所有的 PR 信息。
 * @param {*} owner 
 * @param {*} repo 
 */
async function getPRsOfRepo(owner = 'antvis', repo = 'G2') {
  const octokit = new Octokit({
    auth: TOKEN,
  })

  let page = 1;
  const per_page = 100;
  const PRs = [];
  while (true) {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
      owner,
      repo,
      sort: "created",
      direction: "desc",
      page,
      per_page,
      state: 'all',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    
    console.log('request GitHub API', owner, repo, page, data.length);

    // 合并到一起
    const pr = data
      .map(d => ({
        id: d.id,
        login: _.get(d, 'user.login') || '',
        merged_at: d.merged_at,
        owner,
        avatar_url: _.get(d, 'user.avatar_url') || '',
        repo,
        author_association: d.author_association,
      }));

    PRs.push(...pr);

    if (data.length < per_page) {
      break;
    }

    page ++;

    await sleep(100);
  }

  const Robots = ['github-actions[bot]', 'dependabot-preview[bot]', 'dependabot[bot]'];
  return PRs.filter(d => !!d.merged_at && !Robots.includes(d.login));
}

/**
 * 获得 group 下所有的 PR 信息。
 * @param {*} owner 
 */
export async function getPROfGroup(owner = 'antvis') {
  const repos = getGroupRepos(owner);
  const PRs = [];
  for (const repo of repos) {
    const prs = await getPRsOfRepo(owner, repo);
    PRs.push(...prs);
  }
  return PRs;
}

getPROfGroup().then(prs => {
  fs.writeFileSync('./src/prs.json', JSON.stringify(prs));
});