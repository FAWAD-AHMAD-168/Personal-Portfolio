import BackButton from "@/components/customUI/BackButton";
import getProjectBySlug from "@/utils/GetProjectBySlug";
import ProjectHeroLeft from "@/components/projectDetails/home/ProjectHeroLeft";
import ProjectHeroRight from "@/components/projectDetails/home/ProjectHeroRight";
import TechStack from "@/components/projectDetails/tech/TechStack";
import Features from "@/components/projectDetails/features/Features";
import Showcase from "@/components/projectDetails/showcase/showcase";
import Footer from "@/components/projectDetails/footer/footer";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return (
    <section className="mx-auto max-w-262.5 flex  ">
      {/*  header */}
      <header className="z-1000 fixed top-7 max-[1100px]:left-7  ">
        <BackButton />
      </header>

      {/* Main content */}
      <main className="w-[90%] max-w-262.5     absolute top-25 left-1/2 -translate-x-1/2 flex flex-col gap-20 ">
        <section className="mx-auto p-3  flex  justify-center items-center   max-[850px]:flex-col-reverse  gap-10 ">
          <ProjectHeroLeft project={project} />
          <ProjectHeroRight project={project} />
        </section>

        <TechStack project={project} />
        <Features project={project} />
        <Showcase project={project} />
      </main>
      <div className="w-full absolute top-[420vh] left-0  flex justify-center items-center -mt-6">
        <Footer />
      </div>
    </section>
  );
}

export default Page;
