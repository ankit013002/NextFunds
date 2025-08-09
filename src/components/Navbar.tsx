import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Bell, MessageCircle, Search } from "lucide-react";
import UserProfileButton from "./UserProfileButton";
const Navbar = () => {
  return (
    <div className="flex items-center justify-around min-h-[5vh]">
      {/* Logo select dashboard */}
      <div className="flex items-center gap-x-5">
        <Image src="/NextFunds.png" alt="Logo" width={100} height={100} />
        <Select>
          <SelectTrigger className="w-[180px] border-2 border-neutral-200">
            <SelectValue placeholder="Personal Account" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Personal Account</SelectItem>
            <SelectItem value="dark">Family Account</SelectItem>
            <SelectItem value="system">Business Account</SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-transparent border-2 border-neutral-200 text-[#27b481] hover:bg-[#27b481] hover:text-white">
          Dashboard
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center">
        <label className="input bg-transparent  border-2 border-neutral-200 rounded-2xl w-[30vw] max-w-[500px]">
          <Search />
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>

      {/* chart, notifcations profile*/}
      <div className="flex items-center gap-x-5">
        <Button className="bg-transparent border-2 border-neutral-200 text-[#27b481] hover:bg-[#27b481] hover:text-white ">
          <div className="flex gap-x-1 items-center">
            <MessageCircle />
            Chat
          </div>
        </Button>
        <Button className="bg-transparent border-2 border-neutral-200 text-[#27b481] hover:bg-[#27b481] hover:text-white ">
          <Bell />
        </Button>
        <UserProfileButton />
      </div>
    </div>
  );
};

export default Navbar;
