import {useParams} from "react-router-dom";
import {useEffect} from "react";
import useBoards from "@/stores/boards.store.ts";
import BoardsCard from "@/pages/app/boards/components/BoardsCard.tsx";


export default function BoardsPage() {
    const { boards, isLoading, getAllBoards } = useBoards();
    const params = useParams();

    useEffect(() => {
        getAllBoards({ projectId: params.projectId });
    }, [getAllBoards]);

    if (isLoading) return <p className="text-blue-500">Yuklanmoqda...</p>;

    return (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}>
            {boards.map((board) => (
                <BoardsCard key={board.id} board={board} />
            ))}
        </div>
    )
}