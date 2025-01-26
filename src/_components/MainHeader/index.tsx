"use client";

import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuPopover from "../MenuPopover";

export default function MainHeader() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const pathname = usePathname();

  const formatPathname = (path: string) => {
    if (path === "/") return "home";
    return path.split("/").filter(Boolean).join(" / ");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full relative mb-24">
        <div className="flex items-center text-sm">
          <p className="text-gray">chiho.zip&nbsp; &nbsp; / &nbsp; &nbsp;</p>

          <p className="[word-spacing:0.7rem]">{formatPathname(pathname)}</p>
        </div>

        <div>
          <Plus
            size={20}
            className={`text-gray cursor-pointer transition-transform duration-200 ease-in-out ${
              isPopoverOpen ? "rotate-45" : ""
            }`}
            onClick={() => setIsPopoverOpen((prev) => !prev)}
          />

          <MenuPopover
            opens={isPopoverOpen}
            onClose={() => setIsPopoverOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
