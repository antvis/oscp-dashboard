import { Chart } from "npm:@antv/g2";
import * as d3 from "npm:d3-array";

let chart;

export function bar(data, { width } = {}) {
  if (chart) chart.destroy();

  const groups = d3.groups(data, (d) => d.userName);

  chart = new Chart({
    width,
    height: groups.length * 20 + 100,
    marginRight: 30,
  });

  chart.options({
    type: "interval",
    title: "贡献者排行",
    coordinate: { transform: [{ type: "transpose" }] },
    data,
    encode: {
      x: "userName",
    },
    transform: [
      { type: "groupX", y: "count" },
      { type: "sortX", by: "y", reverse: true },
    ],
    scale: {
      x: { padding: 0.2 },
      y: { nice: true },
    },
    axis: {
      x: { title: "Github 昵称" },
      y: { title: "PR 数量" },
    },
  });

  chart.render();

  return chart.getContainer();
}
