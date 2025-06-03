import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Menu, User, Settings, LogOut, Bell } from "lucide-react";

type NavbarInput = {
  toggleSidebar: () => void;
};

export const Navbar = ({ toggleSidebar }: NavbarInput) => {
  return (
    <header className="flex items-center justify-between border-b bg-[#F3F4F6] px-4 py-2 shadow-sm">
      {/* Sidebar Toggle */}
      <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle Sidebar" >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Right Section: Notification, Avatar, User Info */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <div className="relative bg-gray-100 p-2 rounded-lg">
          <Bell size={18} className="text-[#1A1A1A]" />
        </div>

        {/* Avatar */}
        <div>
          <Avatar style={{ width: 30, height: 30 }} className="bg-[#111827]">
            <AvatarImage src=" "/>
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>

        {/* Name + Dropdown */}
        
        <DropdownMenu>
        <div> 
        <DropdownMenuTrigger asChild>
            <div className="cursor-pointer flex flex-col text-left leading-tight">
              <span className="flex items-center text-sm font-medium gap-1">
                Caleb Bart-Addison
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-xs text-muted-foreground">Product Designer</span>
            </div>
          </DropdownMenuTrigger>
        </div>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>
              <div className="font-semibold">Caleb Bart-Addison</div>
              <div className="text-xs text-muted-foreground">Product Designer</div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};



