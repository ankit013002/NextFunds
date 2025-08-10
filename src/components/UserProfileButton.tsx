import Image from "next/image";
import React from "react";

const UserProfileButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        className="btn btn-ghost p-0 h-auto rounded-2xl border-2 shadow border-neutral-300 hover:bg-[#27b481] group active:bg-[#27b481]"
        aria-haspopup="menu"
      >
        <div className="flex items-center gap-3 px-2 py-1.5">
          <Image
            src="/DefaultPfp.jpg"
            alt="Profile picture"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <div className="text-left leading-tight">
            <div className="text-sm text-[#1F8F67] font-medium group-hover:text-white">
              Jaylon Baptista
            </div>
            <div className="text-xs text-[#4FC49B] group-hover:text-neutral-500">
              @jaylonbaptista
            </div>
          </div>
        </div>
      </button>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-[1] w-56 p-2 shadow"
        role="menu"
      >
        <li className="hover:bg-[#27b481]">
          <div>Profile</div>
        </li>
        <li className="hover:bg-[#27b481]">
          <div>Settings</div>
        </li>
        <li className="hover:bg-[#27b481]">
          <div>Log Out</div>
        </li>
      </ul>
    </div>
  );
};

export default UserProfileButton;
