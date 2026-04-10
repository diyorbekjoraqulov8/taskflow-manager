import {IBoard} from "@/stores/boards.store.ts";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ProjectsCardActions} from "@/pages/app/projects/components/ProjectsCardActions.tsx";
import {ProjectsCardMembers} from "@/pages/app/projects/components/ProjectsCardMembers.tsx";
import {Link} from "react-router-dom";

export default function BoardsCard({ board } : { board: IBoard }) {
    return (
        <Link to={`${board.id}/tasks`}>
            <Card size="sm" className="mx-auto w-full max-w-sm hover:bg-accent cursor-pointer">
                <CardHeader>
                    <div className={'flex items-center justify-between min-h-8 gap-2'}>
                        <CardTitle className={'capitalize'}>{ board.title }</CardTitle>
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