"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--primary)" },
  { browser: "safari", visitors: 200, fill: "var(--primary-300)" },
  { browser: "firefox", visitors: 187, fill: "var(--primary-200)" },
  { browser: "edge", visitors: 173, fill: "var(--primary-100)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    ticket: 2235,
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
    ticket: 2235,
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))",
    ticket: 2235,
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
    ticket: 2235,
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
    ticket: 2235,
  },
};

export function MostSoldTicketType() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="text-center">
        <CardTitle>Most Sold Ticket Type</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" >
                <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) =>
                  chartConfig[value]?.ticket
                }
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}