---
toc: false
---

```js
import { bar } from "./components/bar.js";
const pr = FileAttachment("data/pr.csv").csv({ typed: true });
```

```js
function monthAgo(number = 1) {
  return (date) => {
    const month = date.getMonth() - number;
    date.setMonth(month);
    return date.toISOString();
  };
}

const map = new Map([
  ["1个月", monthAgo(1)],
  ["3个月", monthAgo(3)],
  ["半年", monthAgo(6)],
  ["1年", monthAgo(12)],
]);

const startDate = map.get(ago)(new Date());

const isContributor = (d) => d.contributor === 1;

const selected = pr
  .filter((d) => (repo === "全部" ? true : d.repo === repo))
  .filter((d) => new Date(d.mergeAt) > new Date(startDate));

const contributors = Array.from(
  new Set(selected.filter(isContributor).map((d) => d.userName))
).length;

const PRs = selected.filter(isContributor).length;
const allPRs = selected.length;
const ratio = ((PRs / allPRs) * 100).toFixed(0);
```

<h1>AntV OSCP</h1>

```js
const ago = view(
  Inputs.radio(["1个月", "3个月", "半年", "1年"], {
    label: "时间范围",
    value: "1年",
  })
);
```

```js
const repo = view(
  Inputs.radio(["全部", "G2", "G6", "L7"], { label: "技术栈", value: "全部" })
);
```

<div class="grid grid-cols-4">
  <span class="card">
    <h2>社区贡献者</h2>
    <span class="big">${contributors}</span>
  </span>
  <span class="card">
    <h2>社区贡献者 PR</h2>
    <span class="big">${PRs}</span>
  </span>
  <span class="card">
    <h2>所有 PR</h2>
    <span class="big">${selected.length}</span>
  </span>
  <span class="card">
    <h2>社区贡献率</h2>
    <span class="big">${ratio + `%`}</span>
  </span>
</div>

<div class="grid grid-cols-1">
  <div class="card" style="padding:0">
    ${resize((width) => bar(selected, {width}))}
  </div>
</div>
