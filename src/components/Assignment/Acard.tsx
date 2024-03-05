import { CardTitle, CardDescription, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card key="1" className="w-full max-w-sm">
      <div className="flex items-center space-x-4 p-4">
        <div className="rounded-lg overflow-hidden w-12 h-12 flex-shrink-0">
          <img
            alt="Thumbnail"
            src="/placeholder.svg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="grid gap-1.5">
          <CardTitle className="text-base font-medium">{data.title}</CardTitle>
          <CardDescription className="text-sm">
            {data.description}
          </CardDescription>
          <Badge>Easy</Badge>
        </div>
      </div>
    </Card>
  );
}
