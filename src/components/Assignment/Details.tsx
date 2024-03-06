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

    //TODO: Fix the img not covering the whole div in md and lg devices 

  return (
    <MaxWidthWrapper className="md:px-0 lg:px-5 xl:px-10">
      <Card className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 overflow-hidden rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none h-full lg:h-[500px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-full object-cover h-full lg:h-[500px]"
          />
        </div>
        <div className="w-full h-full md:w-1/2">
          <CardContent className="py-5">
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-secondary text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Assignment Name</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {title}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Details</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {description}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Creator</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {creator.name}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Difficulty</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {difficulty}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Marks</dt>
                  <dd className="text-muted-foregroud sm:col-span-2">
                    {marks}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-lg md:text-base xl:text-lg font-semibold">Due</dt>
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
