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
  const { title, description, difficulty, thumbnail } = data;

  return (
    <Card>
      <div className="overflow-hidden rounded-t-xl max-h-44">
        <img
          alt="Thumbnail"
          className="object-cover object-center w-full h-full"
          src={thumbnail}
        />
      </div>

      <CardHeader className="flex flex-col items-start">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
        {difficulty === "easy" && <Badge variant="easy">{difficulty}</Badge>}
        {difficulty === "medium" && (
          <Badge variant="medium">{difficulty}</Badge>
        )}
        {difficulty === "hard" && <Badge variant="hard">{difficulty}</Badge>}
        {difficulty !== "easy" &&
          difficulty !== "medium" &&
          difficulty !== "hard" && (
            <Badge variant="secondary">{difficulty}</Badge>
          )}
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
