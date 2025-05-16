"use server";
import { EventCard } from "@/components/events-card";
import Payment from "@/components/pay";
import Swipper from "@/components/swipper";
import { getAllSlice } from "@/service/app-service/silce-servie";
import Link from "next/link";
export default async function HomePage() {
  const data = await getAllSlice();
  return (
    <>
      <Swipper data={data} />
      <div className="mt-12 px-12">
        <h3 className="pb-4">All Evetns</h3>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-4">
          {data.map((data) => (
            <Link key={data.id} href={`/event/${data.id}`}>
              <EventCard {...data} />
            </Link>
          ))}
        </div>
      </div>
      {/* <Payment/> */}
    </>
  );
}
