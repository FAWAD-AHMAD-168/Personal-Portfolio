import Image from "next/image";
import SectionHeading from "@/components/customUI/SectionHeading";
import Contact from "@/components/sections/contact/contact";

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

        <div>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default page;
