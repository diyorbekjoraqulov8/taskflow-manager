import { Outlet, useLocation } from 'react-router-dom';

import { AppSidebar } from "@/components/main/AppSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import {ProjectsList} from "@/pages/app/projects/components/ProjectsList.tsx";

export default function Page() {
    const location = useLocation();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className={'w-[calc(100vw-16rem)]! flex-row flex-1 w-full flex-1 flex-grow'}>
                {
                    location.pathname === '/projects/tasks' && <ProjectsList />
                }
                <div className={'flex flex-col w-full p-4'}>
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1 cursor-pointer" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Build Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 pt-0">
                        <Outlet />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
