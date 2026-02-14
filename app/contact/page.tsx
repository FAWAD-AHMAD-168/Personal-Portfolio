import Image from "next/image";
import SectionHeading from "@/components/customUI/SectionHeading";
import Contact from "@/components/sections/contact/contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fawad Ahmad",
  description:
    "Get in touch with Fawad Ahmad for collaborations, freelance projects, or professional inquiries. Let's connect and build something amazing together.",
  keywords: [
    "Fawad Ahmad",
    "Contact Fawad",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "Portfolio Contact",
  ],
  authors: [{ name: "Fawad Ahmad" }],
  creator: "Fawad Ahmad",
  openGraph: {
    title: "Contact | Fawad Ahmad",
    description:
      "Reach out to Fawad Ahmad for collaborations, freelance work, or project discussions.",
    url: "https://yourdomain.com/contact", // replace later
    siteName: "Fawad Ahmad Portfolio",
    type: "website",
  },
};

const page = () => {
  return (
    <section
      id="contact"
      className="w-full  flex flex-col mx-auto  items-center gap-10  "
    >
      <h2 className="mx-auto">
        <SectionHeading>Contact Me </SectionHeading>
      </h2>

      <p className="w-[90%] md:w-[50%] xl:w-[40%] 2xl:w-[33%] text-(--text-secondary-color) text-center">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello! I am always open to connecting with like-minded
        individuals and exploring new opportunities.
      </p>

      {/* contact form */}

      <div className="w-[90%] md:w-[50%] lg:w-150 flex flex-col gap-5  p-5 rounded-lg bg-(--bg-secondary-color)    ">
        <h3 className="font-semibold text-[16px] md:text-xl  flex gap-2  px-10 pt-6 bg-linear-to-r from-(--primary-color) to-(--secondary-color) bg-clip-text text-transparent  ">
          <Image src="/send.svg" alt="Send Message" width={25} height={25} />
          Send A Message
        </h3>

        <Contact />
      </div>
    </section>
  );
};

export default page;
