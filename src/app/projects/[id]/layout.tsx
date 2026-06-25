import { Metadata } from "next";
import { projects } from "@/constants/projects";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.subtitle || project.description,
  };
}

export default function ProjectLayout({ children }: Props) {
  return <>{children}</>;
}
