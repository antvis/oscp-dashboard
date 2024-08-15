import React, { useCallback, useEffect, useState } from 'react';
import { Plugin } from "@antv/g-plugin-rough-canvas-renderer";
import {
  WiredRadioGroup,
  WiredRadio,
  WiredCard,
} from "wired-elements-react";
import WebFont from "webfontloader";
import { Chart } from '../g2';
import { getRateData, getTopContributors, getContributingTrending } from './helper';

import styles from './index.module.less';

export const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState('G2');
  const [fontReady, setFontReady] = React.useState(false); 
  const onChange = useCallback((e) => {
    setRepo(e.target.innerText);
  }, []);

  const { contributor, pr, total } = getRateData(repo);
  const contributors = getTopContributors(repo);
  const { rate, compare } = getContributingTrending(repo);

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
        <WiredRadioGroup selected={repo} onchange={onChange}>
          <WiredRadio name="G2">G2</WiredRadio>
          <WiredRadio name="S2">S2</WiredRadio>
          <WiredRadio name="G6">G6</WiredRadio>
          <WiredRadio name="X6">X6</WiredRadio>
          <WiredRadio name="L7">L7</WiredRadio>
          <WiredRadio name="F2">F2</WiredRadio>
          <WiredRadio name="AVA">AVA</WiredRadio>
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
            type: "interval",
            autoFit: true,
            height: 500,

            title: {
              title: "Top 10 Contributors",
              titleFontFamily: "Gaegu",
              titleFontSize: 24,
            },
            data: contributors,
            encode: { x: "login", y: "contributing", color: "login" },
            coordinate: { transform: [{ type: "transpose" }] },
            axis: {
              x: {
                labelFontFamily: "Gaegu",
                title: false,
              },
              y: {
                labelFontFamily: "Gaegu",
                title: false,
              },
            },
            scale: {
              x: { padding: 0.3 },
            },
            labels: [
              {
                text: "contributing",
                textAlign: "right",
                dx: -12,
                fontFamily: "Gaegu",
                fontWeight: "bold",
              },
            ],
            legend: false,
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
