import { FetchStatsCanadaProps } from "@/lib/stats-canada/types";

const statsCanadaBaseUrl = "https://www150.statcan.gc.ca/t1/wds/rest";

export async function fetchStatsCanada({
  action,
  method,
  body,
}: FetchStatsCanadaProps) {
  return fetch(`${statsCanadaBaseUrl}/${action}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}

export async function fetchCubeByProductId(productId: number) {
  const fetchProps: FetchStatsCanadaProps = {
    body: JSON.stringify([productId]),
    method: "POST",
    action: "getCubeMetadata",
  };

  return await fetchStatsCanada(fetchProps).then((res) => res.json());
}
