import React, { useCallback, useEffect, useState } from 'react';
import { Plugin } from "@antv/g-plugin-rough-canvas-renderer";
import {
  WiredRadioGroup,
  WiredRadio,
  WiredCard,
  WiredCheckbox,
} from "wired-elements-react";
import WebFont from "webfontloader";
import { Chart } from '../g2';
import { getRateData, getTopContributors, getContributingTrending } from './helper';

import styles from './index.module.less';

export const Dashboard: React.FC = () => {
  const [selectedRepos, setSelectedRepos] = useState({ All: true } as Record<string, boolean>);
  const [timeRange, setTimeRange] = useState("latest1m");
  const [fontReady, setFontReady] = React.useState(false); 

  const onRepoChange = (repo) => (e) => {
    const { checked } = e.target;

    if (repo === "All") {
      setSelectedRepos({ All: true });
    } else {
      const repos = {
        ...selectedRepos,
        [repo]: checked,
      };
      // @ts-ignore
      delete repos.All;
      setSelectedRepos(repos);
    }
  };

  const onTimeChange = useCallback((e) => {
    setTimeRange(e.target.name);
  }, []);

  const repos = Object.entries(selectedRepos).filter(([, checked]) => checked).map(([repo]) => repo);

  const { contributor, pr, total } = getRateData(repos, timeRange);
  const contributors = getTopContributors(repos, timeRange);
  const { rate, compare } = getContributingTrending(repos);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Gaegu"],
      },
      active: () => {
        setFontReady(true);
      },
    });
  });

  if (!fontReady) {
    return null;
  }

  return (
    <div className={styles.dashboard}>
      <div>
        <h2>Hi, Welcome to AntV OSCP!</h2>
      </div>
      <div className={styles.filter}>
        <span>Select Your Repo: </span>
        {["All", "G2", "S2", "G6", "X6", "L7", "F2", "AVA"].map((r) => (
          <WiredCheckbox
            key={r}
            checked={selectedRepos[r]}
            onChange={onRepoChange(r)}
          >
            {r}
          </WiredCheckbox>
        ))}
        <span style={{ marginLeft: 16 }}>Select Time Range: </span>
        <WiredRadioGroup selected={timeRange} onchange={onTimeChange}>
          <WiredRadio name="latest1m">Latest 1 Month</WiredRadio>
          <WiredRadio name="latest1y">Latest 1 Year</WiredRadio>
          <WiredRadio name="all">All</WiredRadio>
        </WiredRadioGroup>
      </div>
      <div className={styles.rate}>
        <div className={styles.contributors}>
          <WiredCard className={styles.card}>
            <div className={styles.title}>Contributors</div>
            <div className={styles.value}>{contributor}</div>
          </WiredCard>
        </div>
        <div className={styles.pullrequest}>
          <WiredCard className={styles.card}>
            <div className={styles.title}>Contributing / Total PR</div>
            <div className={styles.value}>{`${pr} / ${total}`}</div>
          </WiredCard>
        </div>
        <div className={styles.percent}>
          <Chart
            options={{
              width: 192,
              height: 192,
              type: "liquid",
              data: pr / total,
              style: {
                contentFill: "#000",
                contentText: `${((pr / total) * 100).toFixed(1)}%`,
                contentFontFamily: "Gaegu",
                contentFontSize: 48,
                contentStroke: "#fff",
                contentLineWidth: 2,
                outlineBorder: 12,
                outlineStrokeOpacity: 0.5,
                outlineDistance: 4,
                waveLength: 128,
              },
            }}
            plugins={[new Plugin()]}
          />
        </div>
      </div>
      <div className={styles.rank}>
        <Chart
          options={{
            type: "view",
            autoFit: true,
            paddingRight: 64,
            height: 500,
            title: {
              title: "Top 10 Contributors",
              titleFontFamily: "Gaegu",
              titleFontSize: 24,
            },
            data: contributors,
            encode: { x: "login", y: "contributing" },
            coordinate: { transform: [{ type: "transpose" }] },
            children: [
              {
                type: "interval",
                encode: { color: "login" },
                scale: {
                  x: { padding: 0.3 },
                },
                axis: {
                  x: {
                    labelFontFamily: "Gaegu",
                    title: false,
                  },
                  y: {
                    labelFontFamily: "Gaegu",
                    title: false,
                    nice: true,
                  },
                },
                labels: [
                  {
                    text: "contributing",
                    position: "right",
                    textAlign: "left",
                    dx: 12,
                    fontSize: 16,
                    fontFamily: "Gaegu",
                    fontWeight: "bold",
                  },
                ],
                legend: false,
              },
              {
                type: "image",
                encode: { src: "avatar_url", size: 18 },
                tooltip: false,
              },
            ],
          }}
          plugins={[new Plugin()]}
        />
      </div>
      <div className={styles.trending}>
        <Chart
          options={{
            type: "view",
            autoFit: true,
            height: 500,
            title: {
              title: "Contributing Trending in latest 1 Year",
              titleFontFamily: "Gaegu",
              titleFontSize: 24,
            },
            children: [
              {
                type: "line",
                data: rate,
                encode: {
                  x: "date",
                  y: "rate",
                  color: "#EE6666",
                  shape: "smooth",
                },
                scale: { y: { independent: true, nice: true } },
                axis: {
                  y: {
                    title: "Rate (%)",
                    titleFontFamily: "Gaegu",
                    titleFill: "#EE6666",
                    labelFontFamily: "Gaegu",
                    labelFormatter: (v) => `${(v * 100).toFixed(1)}%`,
                  },
                },
                labels: [
                  {
                    text: (d) => `${(d.rate * 100).toFixed(1)}%`,
                    fontFamily: "Gaegu",
                    textAlign: "center",
                    textBaseline: "bottom",
                    fontWeight: "bold",
                    dy: -2,
                  },
                ],
                tooltip: false,
              },
              {
                type: "interval",
                data: compare,
                encode: {
                  x: "date",
                  y: "value",
                  color: "type",
                },
                transform: [{ type: "stackY" }],
                scale: {
                  x: { padding: 0.3 },
                  y: { independent: true, nice: true },
                },
                style: { fillOpacity: 0.8 },
                axis: {
                  x: {
                    titleFontFamily: "Gaegu",
                    labelFontFamily: "Gaegu",
                  },
                  y: {
                    position: "right",
                    title: "Contributing",
                    titleFontFamily: "Gaegu",
                    labelFontFamily: "Gaegu",
                  },
                },
                legend: false,
              },
            ],
          }}
          plugins={[new Plugin()]}
        />
      </div>
    </div>
  );
}
