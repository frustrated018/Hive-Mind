import MaxWidthWrapper from "../MaxWidthWrapper";
import { BiLock } from "react-icons/bi";
import { BsGearWideConnected, BsInbox } from "react-icons/bs";
import { FaHandshake, FaUsersGear } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const features = [
  {
    title: "Smart Inbox",
    description:
      "Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.",
    icon: BsInbox,
  },
  {
    title: "Seamless Integration",
    description:
      "Seamless Integration allows you to connect with your peers and mentors, facilitating group discussions and study sessions effortlessly.",
    icon: FaUsersGear,
  },
  {
    title: "Advanced Customization",
    description:
      "With Advanced Customization, you can personalize your email client to suit your preferences and work style.",
    icon: BsGearWideConnected,
  },
  {
    title: "Powerful Search",
    description:
      "Our Powerful Search feature allows you to find any email, contact, or file in seconds.",
    icon: IoIosSearch,
  },
  {
    title: "Reliable Security",
    description:
      "With Reliable Security, your data is always safe and protected.",
    icon: BiLock,
  },
  {
    title: "Easy Collaboration",
    description:
      "Easy Collaboration allows you to share and edit documents with your team in real time.",
    icon: FaHandshake,
  },
];

export default function Unique() {
  return (
    <section className="w-full py-10 lg:py-20">
      <MaxWidthWrapper>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Discover Our Unique Features
          </h1>
          <p className="max-w-[600px] md:text-xl text-muted-foreground mx-auto">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>
        <div className="w-full max-w-full space-y-4 mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg"
              >
                <div className="p-2">
                  <feature.icon size={30} />
                </div>
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
