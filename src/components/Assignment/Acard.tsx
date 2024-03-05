import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

//! declearing type of data

interface Creator {
  name: string;
  email: string;
}

interface Data {
  title: string;
  description: string;
  thumbnail: string;
  marks: number;
  difficulty: string;
  status: string;
  creator: Creator;
  due?: Date;
}

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
        <Button variant="outline" className="font-bold">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
