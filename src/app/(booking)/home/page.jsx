"use server";
import Swipper from "@/components/swipper";
import { getAllSlice } from "@/service/app-service/silce-servie";
import { Suspense } from "react";
export default async function HomePage() {
  const data = await getAllSlice();
  return (
    <>
      <Suspense fallback={<p className="text-red-500">Loading</p>}>
        <Swipper data={data} />
      </Suspense>
    </>
  );
}
