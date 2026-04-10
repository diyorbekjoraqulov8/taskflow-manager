import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export function ProjectsList() {
    const fileTree: FileTreeItem[] = [
        {
            name: "ZPos Project",
            items: [
                {
                    name: "Frontend",
                    items: [
                        { name: "button.tsx" },
                        { name: "card.tsx" },
                        { name: "dialog.tsx" },
                        { name: "input.tsx" },
                        { name: "select.tsx" },
                        { name: "table.tsx" },
                    ],
                },
                { name: "Backend" },
                { name: "DevOps" },
            ],
        },
        { name: "Project 1" },
        { name: "Project 2" },
        { name: "Project 3" },
        { name: "Project 4" },
    ]

    const renderItem = (fileItem: FileTreeItem) => {
        if ("items" in fileItem) {
            return (
                <Collapsible key={fileItem.name}>
                    <CollapsibleTrigger
                        render={(props) => (
                            <Button
                                {...props}
                                variant="ghost"
                                size="sm"
                                className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground h-9 rounded-none border-none"
                            >
                                <ChevronRightIcon className="transition-transform group-data-[panel-open]:rotate-90" />
                                <FolderIcon />
                                {fileItem.name}
                            </Button>
                        )}
                    >
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1 ml-5 style-lyra:ml-4">
                        <div className="flex flex-col gap-1">
                            {fileItem.items.map((child) => renderItem(child))}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            )
        }
        return (
            <Button
                key={fileItem.name}
                variant="ghost"
                size="sm"
                className="w-full justify-start gap-2 text-foreground h-9 rounded-none border-none"
            >
                <FileIcon />
                <span>{fileItem.name}</span>
            </Button>
        )
    }

    return (
        <Card
            className="max-w-48 ring-offset-0! w-full gap-2 rounded-none!"
            size="sm"
        >
            <CardHeader>
                <CardTitle>Loyihalar</CardTitle>
            </CardHeader>
            <CardContent className={'p-0!'}>
                <div className="flex flex-col gap-1">
                    {fileTree.map((item) => renderItem(item))}
                </div>
            </CardContent>
        </Card>
    )
}
