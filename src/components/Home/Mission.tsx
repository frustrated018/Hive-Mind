import { CheckIcon } from "@radix-ui/react-icons";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Mission() {
  // Define an array of list items
  const listItems = [
    "Sharing resources and study tips to help each other learn more.",
    "Organizing group study sessions and workshops on interesting topics.",
    "Connecting with experts and mentors for guidance and advice.",
    "Planning collaborative projects to apply what we've learned.",
    "Creating a supportive environment for knowledge exchange and growth.",
    "Encouraging continuous learning through discussion and exploration.",
    "Fostering a sense of community among like-minded individuals.",
  ];

  return (
    <MaxWidthWrapper className="pb-10">
      <section className="space-y-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Our Mission
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Making connecting with fellow learners easy and seamless. We're here
            to support each other as we grow our knowledge and skills.
          </p>
        </div>
        <div className="mx-auto max-w-prose">
          <ul className="grid gap-2 px-2.5 md:px-0">
            {/* Map over the list items and render them */}
            {listItems.map((item, index) => (
              <li key={index} className="text-lg flex items-center">
                <CheckIcon className="mr-2 size-8 md:size-6 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
