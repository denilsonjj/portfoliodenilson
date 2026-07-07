import { useMemo } from "react";

type NavigatorWithHints = Navigator & {
  connection?: {
    saveData?: boolean;
  };
  deviceMemory?: number;
};

export const usePerformanceMode = () => {
  return useMemo(() => {
    if (typeof navigator === "undefined") {
      return {
        lowPower: false,
      };
    }

    const nav = navigator as NavigatorWithHints;
    const cores = nav.hardwareConcurrency ?? 8;
    const memory = nav.deviceMemory ?? 8;
    const saveData = nav.connection?.saveData === true;
    const lowPower = saveData || cores <= 2 || memory <= 2;

    return {
      lowPower,
    };
  }, []);
};
