"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { event_name: "Summer Music Festival", revenues: 15739 },
  { event_name: "Tech Conference 2025", revenues: 30558 },
  { event_name: "Foot  & While Expo", revenues: 30567 },
];

const chartConfig = {
  revenues: {
    label: "revenues",
    color: "hsl(var(--chart-1))",
  },
};

export default function RevenueChart() {
  return (
    <div>
      <Card>
        <CardHeader className={"text-center"}>
          <CardTitle>Top3 By Reventues</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={true} />
              <XAxis
                dataKey="event_name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
            />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="revenues" fill="var(--color-revenues)" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          Event Name
        </CardFooter>
      </Card>
    </div>
  );
}
