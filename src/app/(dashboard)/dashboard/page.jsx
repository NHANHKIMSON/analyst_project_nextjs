
import { MostSoldTicketType } from "@/components/pie-chart";
import { LineChartRevenueByMonth } from "@/components/revenues-by-month";
import { SectionCards } from "@/components/section-cards";
import RevenueChart from "@/components/ui/revenues-cahrt";

export default function DashboardPage(){
    return (
        <>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 px-4 lg:px-6">
                {/* <Barchart/> */}
                <RevenueChart/>
                <MostSoldTicketType/>
              </div>
              <div className="px-4 lg:px-6">
                <LineChartRevenueByMonth/>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}