import { useEffect, useState } from "react";
import { getReadings } from "../api/readings";
import { Reading } from "../types/readings";

export const useReadings = (devEUI?: string) => {
  const [data, setData] = useState<Reading[]>([]);

  useEffect(() => {
    getReadings(50, devEUI).then(setData);
  }, [devEUI]);

  return data;
};