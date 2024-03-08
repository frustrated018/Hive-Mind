import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import MaxWidthWrapper from "../MaxWidthWrapper";

const cardData = [
  {
    title: "Students Assisted",
    description: "Supporting learners globally",
    count: "20,000+",
  },
  {
    title: "Group Study Sessions",
    description: "Engaging in collaborative learning",
    count: "1000+",
  },
  {
    title: "Expert Connections",
    description: "Building mentorship relationships",
    count: "80+",
  },
  {
    title: "Workshops",
    description: "Organizing large-scale events",
    count: "10+",
  },
];

export default function About() {
  return (
    <MaxWidthWrapper className="w-full py-10">
      <div id="about" className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-4 md:px-0 text-center lg:gap-10">
        <div className="space-y-3 md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            About Us
          </h2>
          <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We started this project back in uni to work together with friends
            from different countries. Now, it's grown into a big enough platform
            where we can help thousands of students and learns come togather as
            a community.
          </p>
          <div className="grid gap-4 text-sm sm:gap-2 md:grid-cols-2 lg:text-base xl:text-lg">
            {cardData.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-base">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl">{card.count}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-sm rounded-xl overflow-hidden shadow-lg md:max-w-none">
          <img
            alt="Community"
            className="aspect-[3/4] object-cover object-center h-[550px] w-[600px]"
            src="https://source.unsplash.com/a-group-of-people-sitting-on-the-ground-looking-at-a-book-KXtTWJZgw8g"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
