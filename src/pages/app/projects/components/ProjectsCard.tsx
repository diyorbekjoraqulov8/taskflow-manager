import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {IProject} from "@/stores/projects.store.ts";
import {ProjectsCardActions} from "@/pages/app/projects/components/ProjectsCardActions.tsx";
import {ProjectsCardMembers} from "@/pages/app/projects/components/ProjectsCardMembers.tsx";
import {Link} from "react-router-dom";

export default function ProjectsCard({project}: {project: IProject}) {
    return (
        <Link to={`${project.id}/boards`}>
            <Card size="sm" className="mx-auto w-full max-w-sm hover:bg-accent cursor-pointer">
                <CardHeader>
                    <div className={'flex items-center justify-between min-h-8 gap-2'}>
                        <CardTitle className={'capitalize'}>{ project.title }</CardTitle>
                        <ProjectsCardActions />
                    </div>
                    <CardDescription>
                        This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={'mb-2'}>
                        <p>
                            The card component supports a size prop that can be set to
                            &quot;sm&quot; for a more compact appearance.
                        </p>
                    </div>


                    <ProjectsCardMembers />
                </CardContent>
            </Card>
        </Link>
    )
}
