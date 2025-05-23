import React, { useEffect, useState, useRef } from "react";

// ----------------------
// useRenderWave Hook
// ----------------------

interface UseRenderWaveOptions {
  length: number;
  batchSize?: number;
  interval?: number;
  startIndex?: number;
}

export function useRenderWave({
  length,
  batchSize = 20,
  interval = 50,
  startIndex = 0,
}: UseRenderWaveOptions): number[] {
  const [count, setCount] = useState(startIndex + batchSize);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let isActive = true;

    const tick = () => {
      setCount((prev) => {
        const next = Math.min(prev + batchSize, length);
        if (next < length && isActive) {
          timerRef.current = setTimeout(() => {
            rafRef.current = requestAnimationFrame(tick);
          }, interval);
        }
        return next;
      });
    };

    tick();

    /*
      Clean up any active timers or animation frames on unmount
      Nulling the refs ensures we don't accidentally reuse stale handles
      and helps prevent double-clear bugs during fast remounts or HMR
    */
    return () => {
      isActive = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [length, batchSize, interval]);

  return Array.from({ length: count - startIndex }, (_, i) => i + startIndex);
}

// ----------------------
// RenderWave Component
// ----------------------

interface RenderWaveProps<T> {
  items: T[];
  batchSize?: number;
  interval?: number;
  startIndex?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function RenderWave<T>({
  items,
  batchSize,
  interval,
  startIndex,
  renderItem,
}: RenderWaveProps<T>) {
  const indexes = useRenderWave({
    length: items.length,
    batchSize,
    interval,
    startIndex,
  });

  return <>{indexes.map((i) => renderItem(items[i], i))}</>;
}
