import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "iconsax-reactjs";
import { DollarSquare } from "iconsax-reactjs";
import { Ticket2 } from "iconsax-reactjs";
import { People } from "iconsax-reactjs";

export function SectionCards() {
  return (
    <div className="dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4,650
          </CardTitle>
          <CardAction className={""}>
            <div className="bg-emerald-500 text-white p-4 rounded-full">
              <Calendar />
            </div>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Tickets Sold</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            6,550
          </CardTitle>
          <CardAction className={""}>
            <div className="bg-blue-500 text-white p-4 rounded-full">
              <Ticket2/>
            </div>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250
          </CardTitle>
          <CardAction className={""}>
            <div className="bg-red-500 text-white p-4 rounded-full">
              <DollarSquare/>
            </div>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Attendees</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            5,350
          </CardTitle>
          <CardAction className={""}>
            <div className="bg-cyan-500 text-white p-4 rounded-full">
              <People/>
            </div>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
