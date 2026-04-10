import TasksKanban from "@/pages/app/tasks/kanban/TasksKanban.tsx";
import TasksHeaders from "@/pages/app/tasks/components/TasksHeaders.tsx";

export default function TasksPage () {
    return (
        <div className={'flex flex-col w-full h-full'}>
            <TasksHeaders />

            <TasksKanban />
        </div>
    )
}