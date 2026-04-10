"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {NavLink} from "react-router-dom";

export function NavMain({
        items,
    }: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Boshqaruv</SidebarGroupLabel>
            <SidebarMenu className={'px-3'}>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger
                                render={(props) => (
                                    <SidebarMenuButton
                                        {...props}
                                        tooltip={item.title}
                                        className="cursor-pointer w-full h-12! group p-0!"
                                    >
                                        <NavLink
                                            to={item.url}
                                            className={({ isActive }) =>
                                                `flex w-full h-12! pl-2 rounded-md items-center gap-2 [&>svg:first-child]:p-2 [&>svg:first-child]:box-content [&>svg:first-child]:bg-primary/10 [&>svg:first-child]:rounded-md [&>svg:first-child]:text-primary ${isActive && !!item.url 
                                                    ? 'bg-primary/7 text-primary font-medium [&>svg:first-child]:bg-white [&>svg:first-child]:rounded-md [&>svg:first-child]:text-black' 
                                                    : 'hover:bg-muted hover:text-foreground'}`
                                            }
                                        >
                                            {item.icon && <item.icon size={20} />}
                                            <span>{item.title}</span>

                                            {item.items?.length && (
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            )}
                                        </NavLink>
                                    </SidebarMenuButton>
                                )}
                            />
                            {
                                item.items?.length &&
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    render={(props) => (
                                                        <a {...props} href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    )}
                                                />
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            }
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}