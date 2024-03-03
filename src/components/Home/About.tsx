import { CheckIcon } from "@radix-ui/react-icons";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function About() {
  // Define an array of list items
  const listItems = [
    "Sharing resources and study tips to help each other learn more",
    "Organizing group study sessions and workshops on interesting topics",
    "Connecting with experts and mentors for guidance and advice",
    "Planning collaborative projects to apply what we've learned",
  ];

  return (
    <MaxWidthWrapper className="pb-10">
      <section className="space-y-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            About our Study Group
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Connect with fellow learners in our online study group. We're here
            to support each other as we grow our knowledge and skills.
          </p>
        </div>
        <div className="mx-auto max-w-prose">
          <ul className="grid gap-2 px-2.5 md:px-0">
            {/* Map over the list items and render them */}
            {listItems.map((item, index) => (
              <li key={index} className="text-lg">
                <CheckIcon className="mr-2 inline-block size-6" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
