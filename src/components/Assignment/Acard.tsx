import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { Data } from "@/lib/types";

export default function Acard({ data }: { data: Data }) {
  return (
    <Card>
      <div className="overflow-hidden rounded-t-xl max-h-44">
        <img
          alt="Thumbnail"
          className="object-cover object-center w-full h-full"
          src={data.thumbnail}
        />
      </div>

      <CardHeader className="flex flex-col items-start">
        <CardTitle className="line-clamp-1">{data.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {data.description}
        </CardDescription>
        <Badge>Easy shit</Badge>
      </CardHeader>
      <CardFooter>
        <Link
          to={`/assignments/$assignmentId`}
          params={{ assignmentId: data._id }}
          className={buttonVariants({
            variant: "outline",
            className: "font-bold",
          })}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}
