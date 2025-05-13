"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const chartData = [
  {
    id: "summer",
    label: "Summer Music Festival",
    revenue: 120000,
    fill: "#a855f7",
  },
  {
    id: "tech",
    label: "Tech Conference 2025",
    revenue: 90000,
    fill: "#c084fc",
  },
  {
    id: "expo",
    label: "Foot & While Expo",
    revenue: 60000,
    fill: "#d8b4fe",
  },
];

export function Barchart() {
  return (
    <Card className="p-6 rounded-2xl shadow-sm">
      <CardHeader className="pb-4 text-center">
        <CardTitle className="text-lg font-semibold">Top 3 Events By Revenues</CardTitle>
      </CardHeader>

      <CardContent className="h-[280px] px-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 50 }}
            barCategoryGap="30%"
          >
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{
                fontSize: 12,
                angle: 0,
                dy: 20,
                fill: "#4b5563",
                textAnchor: "middle",
              }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={(value) => `$${value.toLocaleString()}`}
              labelFormatter={() => ""}
              wrapperClassName="text-sm"
            />
            <Bar
              dataKey="revenue"
              radius={[12, 12, 0, 0]}
              barSize={60}
              shape={(props) => (
                <Rectangle {...props} fill={props.payload.fill} />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="pt-4 justify-center text-xs text-muted-foreground">
        Revenue (USD)
      </CardFooter>
    </Card>
  );
}