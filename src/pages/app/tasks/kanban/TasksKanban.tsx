import useTasks from "@/stores/tasks.store.ts";
import TasksKanbanState from "@/pages/app/tasks/kanban/components/TasksKanbanState.tsx";

export default function TasksKanban () {
    const { states } = useTasks()

    return (
        <div className={'flex gap-x-3 flex-1 overflow-x-auto w-full'}>
            {states.map((state, index) => (
                <TasksKanbanState
                    key={`state_${state.id}`}
                    state={state}
                    stateIndex={index}
                >
                    11
                </TasksKanbanState>
            ))}
        </div>
    )
}