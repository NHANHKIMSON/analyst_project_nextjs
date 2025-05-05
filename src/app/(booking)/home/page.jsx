"use server";
import Swipper from "@/components/swipper";
import { getAllSlice } from "@/service/app-service/silce-servie";
export default async function HomePage() {
  const data = await getAllSlice();
  return (
    <>
        <Swipper data={data} />
    </>
  );
}
