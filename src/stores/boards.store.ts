import { create } from 'zustand'

export interface IBoard {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface IGetAllBoardsProps { projectId: number }

interface IBoardsStore {
    isLoading: boolean;
    boards: IBoard[];
    getAllBoards: (arg0: IGetAllBoardsProps) => void;
}

const useBoards = create<IBoardsStore>((set) => ({
    isLoading: false,
    boards: [],

    // ACTIONS
    getAllBoards: async ({ projectId }:IGetAllBoardsProps) => {
        console.log('projectId: ', projectId)
        set({ isLoading: true });
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
            if (!response.ok) throw new Error('Maʼlumot olishda xatolik yuz berdi');

            const data: IBoard[] = response.ok ? await response.json() : [];
            set({ boards: data, isLoading: false });
        } catch (err) {
            set({ isLoading: false });
        }
    },
}))

export default useBoards;