import * as React from "react";
import {IState} from "@/stores/tasks.store.ts";

interface ITasksKanbanState {
    children: React.ReactNode;
    state: IState;
    stateIndex: number;
}

export default function TasksKanbanState ({ children, state, stateIndex }: ITasksKanbanState) {
    return (
        <div className={'w-xs flex flex-none flex-col overflow-y-auto overflow-x-hidden rounded-lg px-0.5'}>
            <div className={'border-t-4 rounded-t-2xl p-4 font-semibold'} style={{borderColor: state.color}}>
                Today's Tasks
            </div>
            <div>{state.title} / {state.order}</div>

            <div>
                {children}
            </div>
        </div>
    )
}