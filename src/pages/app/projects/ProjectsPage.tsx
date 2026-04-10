import {useEffect} from "react";
import useProjects from "@/stores/projects.store.ts";
import ProjectsCard from "@/pages/app/projects/components/ProjectsCard.tsx";

export default function ProjectsPage () {
    const { projects, isLoading, getAllProjects } = useProjects();

    useEffect(() => {
        getAllProjects();
    }, [getAllProjects]);

    if (isLoading) return <p className="text-blue-500">Yuklanmoqda...</p>;

    return (
        <div>
            <h2 className={'mb-4 text-xl'}>Loyihalar</h2>

            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
                {projects.map((project) => (
                    <ProjectsCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}