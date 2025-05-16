import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Like } from "iconsax-reactjs";
import { Dislike } from "iconsax-reactjs";
import { Share } from "iconsax-reactjs";

export function EventCard(data) {
  return (
    <>
      <Card className={"pt-0"}>
      <AspectRatio ratio={16 / 9}>
        <img
          src={data.image_url}
          alt="Image"
          className="rounded-md w-full object-cover"
        />
      </AspectRatio>
      <CardContent>
          {data.title}
        </CardContent>
      <CardFooter className={"flex justify-between"}>
        <div className="flex gap-2">
          <div className="flex gap-1.5">
            <Like/> 1.8k
          </div>
          <div className="flex gap-1.5">
            <Dislike/> 1.8k
          </div>
        </div>
        <div>
          <Share/>
        </div>
      </CardFooter>
      </Card>
    </>
  );
}
