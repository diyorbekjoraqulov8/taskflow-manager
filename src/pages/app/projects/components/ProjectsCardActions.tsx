import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MoreHorizontal, Edit, Trash2, ArrowRightLeft, Archive} from "lucide-react";

export function ProjectsCardActions() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={(props) => (
                    <Button {...props} variant="outline" size="icon">
                        <MoreHorizontal />
                    </Button>
                )}
            />
            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Amallar</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <ArrowRightLeft />
                        Ko'chirish
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Edit />
                        Tahrirlash
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Archive />
                        Arxivlash
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">
                        <Trash2 />
                        O'chirish
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
