import { Data } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface DetailsProps {
  data?: Data;
}

export default function Details({ data }: DetailsProps) {
  if (!data) {
    return null;
  }

  // Function to format date
  const formatDate = (date: Date | undefined) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    }
    return "Not Available";
  };

  const { creator, description, difficulty, marks, thumbnail, title, due } =
    data;

  return (
    <MaxWidthWrapper>
      <Card className="flex flex-col md:flex-row items-center">
        <div className="w-full h-full md:w-1/2 overflow-hidden rounded-l-xl max-h-[500px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full md:w-1/2">
          <CardContent>
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-secondary text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Assignment Name</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {title}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Details</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {description}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Creator</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {creator.name}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Difficulty</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {difficulty}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Marks</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {marks}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium">Due</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {formatDate(due)}
                  </dd>
                </div>
              </dl>
            </div>
          </CardContent>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
