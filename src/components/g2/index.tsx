import {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  CSSProperties,
} from 'react';

import {
  Chart as G2Chart,
  G2Spec,
} from '@antv/g2';


export type ChartRef = G2Chart | undefined;

type G2ChartOptions = any;

export type ChartOptions = Omit<G2ChartOptions, 'container'>;

export type ChartProps = {
  options: G2Spec | null;
  renderer?: G2ChartOptions['renderer'];
  plugins?: G2ChartOptions['plugins'];
  style?: CSSProperties;
  onInit?: () => void;
};

export const Chart = forwardRef<ChartRef, ChartProps>((props, ref) => {
  const { options, style, onInit, renderer, plugins } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<G2Chart>();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (chartRef.current || !containerRef.current) return;
    chartRef.current = new G2Chart({
      container: containerRef.current,
      renderer,
      plugins,
    });
    setInit(true);
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = undefined;
      }
    };
  }, [renderer]);

  useEffect(() => {
    if (init) onInit?.();
  }, [init, onInit]);

  useEffect(() => {
    if (chartRef.current && options) {
      chartRef.current.options(options);
      chartRef.current.render();
    }
  }, [options]);

  useImperativeHandle(ref, () => chartRef.current, [init]);

  return <div ref={containerRef} style={style}></div>;
});
