"use client";
import Navigation from "@/components/navbar";
import { Navbar } from "@/components/navigation";
import { usePathname } from "next/navigation";

export default function BookingLayout({ children }) {
    const path = usePathname();
  return (
    <>
      <div>
        <div>
          {/* <Navbar path={path} /> */}
          <Navigation path={path}/>
        </div>
        {/* <div className="bg-red w-full h-4 bg-red-500">scdsad</div> */}
      </div>
      {children}
    </>
  );
}
