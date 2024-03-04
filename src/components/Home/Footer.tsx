import { Link } from "@tanstack/react-router";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa6";
import { BsTwitch, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const socialIcons = [
    { Icon: FaFacebook },
    { Icon: FaInstagram },
    { Icon: BsTwitterX },
    { Icon: BsTwitch },
    { Icon: FaSpotify },
    { Icon: FaYoutube },
  ];

  const sections = [
    {
      title: "Services",
      links: [
        { label: "1-on-1 Tutoring", href: "#" },
        { label: "Assignment Help", href: "#" },
        { label: "Study Groups", href: "#" },
        { label: "Learning Resources", href: "#" },
        { label: "Test Prep", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Our Mission", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Live Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Accessibility Statement", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Copyright Information", href: "#" },
      ],
    },
  ];

  return (
    <footer className="py-10">
      <MaxWidthWrapper>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center items-center gap-3">
            <img src="/Logo.svg" alt="Logo" />
            <h2 className="text-4xl font-bold">Hive Mind</h2>
          </div>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <Link to="/">
                  <item.Icon size={25} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 pt-8 grid-cols-2 lg:grid-cols-4 lg:pt-16">
          {sections.map((section, index) => (
            <div key={index}>
              <p className="font-semibold text-base xl:text-xl text-center">
                {section.title}
              </p>

              <ul className="mt-4 space-y-4 text-sm md:text-base xl:text-lg text-center">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:underline hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-5 md:text-sm xl:text-base">
          &copy; 2024. Hive Mind Inc. All rights reserved.
        </p>
      </MaxWidthWrapper>
    </footer>
  );
}
