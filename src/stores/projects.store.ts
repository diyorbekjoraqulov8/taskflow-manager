import { create } from 'zustand'

export interface IProject {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface IProjects {
    isLoading: boolean;
    projects: IProject[];
    getAllProjects: () => void;
}

const useProjects = create<IProjects>((set) => ({
    isLoading: false,
    projects: [],

    // ACTIONS
    getAllProjects: async () => {
        set({ isLoading: true });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!response.ok) throw new Error('Maʼlumot olishda xatolik yuz berdi');

            const data: IProject[] = response.ok ? await response.json() : [];
            set({ projects: data, isLoading: false });
        } catch (err) {
            console.log('err: ', err)
            set({ isLoading: false });
        }
    },
}))

export default useProjects;