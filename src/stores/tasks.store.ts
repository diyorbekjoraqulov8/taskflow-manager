import { create } from 'zustand'

export interface IState {
    id: number;
    title: string;
    order: number;
    color: string;
}
export interface ITasks {
    id: number;
    title: string;
    order: number;
}

interface ITasksStore {
    isLoading: boolean;
    states: IState[];
    tasks: ITasks[];
}

const useTasks = create<ITasksStore>((set) => ({
    isLoading: false,
    states: [
        {
            id: 1,
            title: "Qoralama",
            order: 1,
            color: '#FFA726'
        },
        {
            id: 2,
            title: "Jarayonda",
            order: 2,
            color: '#0066CC'
        },
        {
            id: 3,
            title: "Tekshirish",
            order: 3,
            color: '#00B894'
        },
        {
            id: 4,
            title: "Tugallangan",
            order: 4,
            color: '#FFA726'
        },
        {
            id: 5,
            title: "Tekshirish",
            order: 5,
            color: '#00B894'
        },
        {
            id: 6,
            title: "Tugallangan",
            order: 6,
            color: '#FFA726'
        },
    ],
    tasks: [],
}))

export default useTasks;