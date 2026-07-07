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
    <section className="w-full h-screen  flex flex-col ">
      <header className="mt-10 fixed z-1000 w-full max-w-262.5  left-1/2 -translate-x-1/2   h-16    flex items-center justify-start  px-4">
        <BackButton />
      </header>

      {/* Main Section Containing Hero, Tech, Features, and Showcase Sections */}
      <main className="w-full max-w-262.5 mx-auto   flex flex-col justify-center items-center gap-10 mt-30">
       
        {/* HERO SECTION  */}
        <section className="mx-auto p-3  flex  justify-center items-center   max-[1024px]:flex-col-reverse  gap-10 ">
          <ProjectHeroLeft project={project} />
          <ProjectHeroRight project={project} />
        </section>

        <TechStack project={project} />
        <Features project={project} />
        <Showcase project={project} />
      </main>

      {/* Footer */}
     
        <Footer />
     
    </section>
  );
}

export default Page;
