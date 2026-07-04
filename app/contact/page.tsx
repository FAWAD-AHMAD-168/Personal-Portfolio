import Image from "next/image";
import SectionHeading from "@/components/customUI/SectionHeading";
import Contact from "@/components/sections/contact/contact";
import ContactMetaData from "@/seo/contact"


export const metadata = ContactMetaData;
const page = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-250  flex flex-col mx-auto  items-center gap-10  mt-2 sm:mt-4   "
    >
      <h2 className="mx-auto">
        <SectionHeading>Contact Me </SectionHeading>
      </h2>

      <p className="w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] text-(--text-secondary-color) text-center">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello! I am always open to connecting with like-minded
        individuals and exploring new opportunities.
      </p>

      {/* contact form */}

      <div className="w-[90%] md:w-[50%] lg:w-150 flex flex-col gap-5  p-5 rounded-lg bg-(--bg-skillsCard-color) shadow-[0_0_25px_rgba(156,163,175,0.20)]   ">
        <h3 className="font-semibold text-[16px] md:text-xl  flex gap-2  px-10 pt-6  text-(--primary-color)  ">
          <Image src="/send.svg" alt="Send Message" width={25} height={25} />
          Let&apos;s Connect
        </h3>

        <Contact />
      </div>
    </section>
  );
};

export default page;
