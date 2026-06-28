import BackButton from "@/components/customUI/BackButton";
import getProjectBySlug from "@/utils/GetProjectBySlug";
import ProjectHeroLeft from "@/components/projectDetails/home/ProjectHeroLeft";
import ProjectHeroRight from "@/components/projectDetails/home/ProjectHeroRight";
import TechStack from "@/components/projectDetails/tech/TechStack";
import Features from "@/components/projectDetails/features/Features";
import Showcase from "@/components/projectDetails/showcase/showcase";
// import Footer from "@/components/sections/footer/Footer";
import NotFoundPage from "@/app/not-found";

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
    return <NotFoundPage />;
  }

  return (
    <section className="max-w-262.5 h-[400vh] flex flex-col">
      {/*  header */}
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-1000   w-[90%]  bg-slate-900/80 backdrop-blur-sm h-20 flex items-center  ">
        <BackButton />
      </header>

      {/* Main content */}
      <main className="w-[90%] max-w-262.5  absolute top-30 left-1/2 -translate-x-1/2 flex flex-col gap-20 ">
        <section className="flex   justify-center items-center max-[850px]:flex-col-reverse  gap-10 ">
          <ProjectHeroLeft project={project} />
          <ProjectHeroRight project={project} />
        </section>

        <TechStack project={project} />
        <Features project={project} />
        <Showcase project={project} />
      </main>
    </section>
  );
}

export default Page;
