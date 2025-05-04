import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Map } from "iconsax-reactjs";
import { Calendar } from "iconsax-reactjs";
import { Heart } from "iconsax-reactjs";
import { MessageCircle } from "iconsax-reactjs";
import { Share } from "iconsax-reactjs";
import { Bookmark } from "iconsax-reactjs";

export function SectionCards() {
  const events = [
    {
      img: "data:image/jpeg;base64,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",
      title: "CPLC 2024 – 2025 (Top 6) Angkor Tiger FC Vs...",
      location: "Street 578 Phnom Penh Boeng Kak...",
      date: "3 May",
    },
    {
      img: "https://www.boreiangkor.com/wp-content/uploads/2023/10/robam-trod.jpg",
      title: "CPLC 2024 – 2025 (Top 6) Angkor Tiger FC Vs...",
      location: "Fly Phnom Penh (Inside Factory...)",
      date: "3 May",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuASg9Jx8YfbnGAVMNovwrxbDIgGtiHzxUHg&s",
      title: "CPLC 2024 – 2025 (Top 6) Angkor Tiger FC Vs...",
      location: "Street 578 Phnom Penh Boeng Kak...",
      date: "3 May",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="rounded-3xl bg-[#F7F7F7] text-black dark:bg-card dark:text-white p-6 shadow-sm">
          <CardHeader className="flex flex-row justify-between items-start p-0">
            <div className="h-12 w-12 rounded-full bg-yellow-400" />
            <MoreHorizontal className="text-gray-400" />
          </CardHeader>

          <CardFooter className="flex-col items-start p-0 pt-6 w-full">
            <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
              Total Revenue
            </CardDescription>

            <div className="flex justify-between items-center w-full">
              <CardTitle className="text-[32px] font-bold tabular-nums">
                632.0$
              </CardTitle>
              <Badge className="rounded-full bg-yellow-100 px-4 py-1 text-green-600 text-sm font-semibold">
                +1,29%
              </Badge>
            </div>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl bg-[#F7F7F7] text-black dark:bg-card dark:text-white p-6 shadow-sm">
          <CardHeader className="flex flex-row justify-between items-start p-0">
            <div className="h-12 w-12 rounded-full bg-yellow-400" />
            <MoreHorizontal className="text-gray-400" />
          </CardHeader>

          <CardFooter className="flex-col items-start p-0 pt-6 w-full">
            <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
              Total Revenue
            </CardDescription>

            <div className="flex justify-between items-center w-full">
              <CardTitle className="text-[32px] font-bold tabular-nums">
                632.0$
              </CardTitle>
              <Badge className="rounded-full bg-yellow-100 px-4 py-1 text-green-600 text-sm font-semibold">
                +1,29%
              </Badge>
            </div>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl bg-[#F7F7F7] text-black dark:bg-card dark:text-white p-6 shadow-sm">
          <CardHeader className="flex flex-row justify-between items-start p-0">
            <div className="h-12 w-12 rounded-full bg-yellow-400" />
            <MoreHorizontal className="text-gray-400" />
          </CardHeader>

          <CardFooter className="flex-col items-start p-0 pt-6 w-full">
            <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
              Total Revenue
            </CardDescription>

            <div className="flex justify-between items-center w-full">
              <CardTitle className="text-[32px] font-bold tabular-nums">
                632.0$
              </CardTitle>
              <Badge className="rounded-full bg-yellow-100 px-4 py-1 text-green-600 text-sm font-semibold">
                +1,29%
              </Badge>
            </div>
          </CardFooter>
        </Card>
        <Card className="rounded-3xl bg-[#F7F7F7] text-black dark:bg-card dark:text-white p-6 shadow-sm">
          <CardHeader className="flex flex-row justify-between items-start p-0">
            <div className="h-12 w-12 rounded-full bg-yellow-400" />
            <MoreHorizontal className="text-gray-400" />
          </CardHeader>

          <CardFooter className="flex-col items-start p-0 pt-6 w-full">
            <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-2">
              Total Revenue
            </CardDescription>

            <div className="flex justify-between items-center w-full">
              <CardTitle className="text-[32px] font-bold tabular-nums">
                632.0$
              </CardTitle>
              <Badge className="rounded-full bg-yellow-100 px-4 py-1 text-green-600 text-sm font-semibold">
                +1,29%
              </Badge>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-6">
        {events.map((event, index) => (
          <Card key={index} className="rounded-2xl shadow-md overflow-hidden">
            {/* Header Image */}
            <div className="relative h-[160px] w-full">
              <img
                src={event.img}
                alt="Event banner"
                className="h-full w-full object-cover"
              />
              <Bookmark className="absolute top-3 right-3 h-5 w-5 text-white drop-shadow" />
            </div>

            {/* Event Content */}
            <CardContent className="p-4">
              <CardTitle className="text-base font-semibold line-clamp-2">
                {event.title}
              </CardTitle>

              <div className="mt-2 flex items-center gap-2 text-muted-foreground text-sm">
                <Map className="h-4 w-4" />
                <span className="line-clamp-1">{event.location}</span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <span>Date: {event.date}</span>
              </div>
            </CardContent>

            {/* Footer Stats */}
            <CardFooter className="flex items-center justify-between px-4 pb-4 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Heart className="h-4 w-4" />
                1.8k
                <MessageCircle className="h-4 w-4" />
                18
              </div>
              <div className="flex items-center gap-2">
                <Share className="h-4 w-4" />
                10
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
