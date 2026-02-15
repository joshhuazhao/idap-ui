import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeaderAlerts() {
    const notifications = [
        {
            id: 1,
            title: "New Project Created",
            description: "Project 'Alpha' has been successfully created.",
            time: "2 mins ago",
        },
        {
            id: 2,
            title: "System Update",
            description: "System maintenance scheduled for tonight.",
            time: "1 hour ago",
        },
        {
            id: 3,
            title: "New User Signup",
            description: "User 'jdoe' has signed up.",
            time: "3 hours ago",
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Toggle notifications</span>
                    {/* Badge for unread notifications */}
                    <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                    <DropdownMenuItem key={notification.id} className="cursor-pointer flex-col items-start gap-1 p-3">
                        <div className="flex w-full items-center justify-between">
                            <span className="font-semibold text-sm">{notification.title}</span>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                            {notification.description}
                        </p>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer justify-center text-center text-primary font-medium">
                    View all notifications
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
