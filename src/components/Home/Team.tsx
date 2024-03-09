import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card } from "../ui/card";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Dayan",
      role: "Senior Frontend Engineer",
      bio: "Sarah is a frontend architect with a passion for design systems and open-source. She's a core team member of shadcn and loves creating accessible and beautiful components for the web.",
      avatarSrc:
        "https://source.unsplash.com/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY",
    },
    {
      name: "Elena Garcia",
      role: "Online Tutor",
      bio: "Elena is an experienced online tutor specializing in mathematics and physics. She enjoys helping students understand complex concepts and achieve their academic goals.",
      avatarSrc:
        "https://source.unsplash.com/woman-sitting-on-white-red-and-black-striped-mat-on-top-of-stand-Gx5-zf_HE9w",
    },
    {
      name: "Michael Johnson",
      role: "Study Group Moderator",
      bio: "Michael is a dedicated study group moderator with a background in psychology. He facilitates discussions and fosters a supportive learning environment for students from diverse backgrounds.",
      avatarSrc:
        "https://source.unsplash.com/man-in-orange-and-white-striped-crew-neck-shirt-UpjtG9zkqdc",
    },
    {
      name: "Sophia Ramirez",
      role: "Project Manager",
      bio: "Sophia is a seasoned project manager with expertise in organizing and coordinating online study groups. She ensures projects are delivered on time and meets the needs of both students and tutors.",
      avatarSrc:
        "https://source.unsplash.com/woman-sitting-on-seashore-7-OKB41ilGY",
    },
    {
      name: "Daniel Lee",
      role: "Software Developer",
      bio: "Daniel is a skilled software developer specializing in building interactive online learning platforms. He enjoys creating intuitive interfaces and optimizing the user experience for students.",
      avatarSrc:
        "https://source.unsplash.com/man-holding-starbucks-disposable-cup-g4DgCF90EM4",
    },
    {
      name: "Emily Chen",
      role: "Community Manager",
      bio: "Emily is a passionate community manager dedicated to fostering a supportive online learning community. She organizes events, moderates discussions, and ensures a positive experience for all members.",
      avatarSrc:
        "https://source.unsplash.com/woman-in-white-long-sleeve-shirt-arPZr6tqsoA",
    },
  ];

  return (
    <MaxWidthWrapper>
      <section className="space-y-8 py-10">
        {/* Heading and sub heading */}

        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Meet the Team
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Here are the dedicated and passionate people behind Hive Mind.
            Without them, it would be impossible to provide and maintain a
            quality service.
          </p>
        </div>

        <div className="grid max-w-sm gap-4 mx-auto items-stretch sm:max-w-md md:max-w-none md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="divide-y">
              <div className="p-4 grid gap-2">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover object-center"
                    height="96"
                    width="96"
                    src={member.avatarSrc}
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold tracking-tighter sm:text-base">
                    {member.name}
                  </h4>
                  <p className="text-xs">{member.role}</p>
                </div>
              </div>
              <div className="p-4 grid gap-2">
                <p className="text-base">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
