import Navigation from "@/components/navbar";
import { Navbar } from "@/components/navigation";

export default function BookingLayout({ children }) {
  return (
    <>
      <div>
        <div>
          {/* <Navbar /> */}
          <Navigation/>
        </div>
        {/* <div className="bg-red w-full h-4 bg-red-500">scdsad</div> */}
      </div>
      {children}
    </>
  );
}
