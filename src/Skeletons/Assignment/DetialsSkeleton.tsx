import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetialsSkeleton() {
  return (
    <MaxWidthWrapper>
      <Card className="flex flex-col md:flex-row items-center">
        <Skeleton className="w-full h-[400px] md:w-1/2 overflow-hiSkeletonen rounded-l-xl"></Skeleton>
        <div className="w-full h-full md:w-1/2">
          <CardContent>
            <div className="flow-root">
              <div className="-my-3 divide-y divide-secondary text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <Skeleton className="h-4 w-[150px]"></Skeleton>
                  <Skeleton className="h-4 w-[200px]"></Skeleton>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
