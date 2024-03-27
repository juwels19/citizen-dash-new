export type StatsCanadaActions =
  | "getDataFromCubePidCoordAndLatestNPeriods"
  | "getCubeMetadata"
  | "getSeriesInfoFromCubePidCoord"
  | "getBulkVectorDataByRange";

export type FetchStatsCanadaProps = {
  action: StatsCanadaActions;
  method: "GET" | "POST";
  // productId: number;
  body: string;
};
