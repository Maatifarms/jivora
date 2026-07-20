import * as React from "react";
import { StatsCard, StatsCardProps } from "./stats-card";

export type KpiCardProps = StatsCardProps;

export function KpiCard(props: KpiCardProps) {
  return <StatsCard {...props} />;
}
