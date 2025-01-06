"use client";

import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuPopover from "../MenuPopover";

export default function MainHeader() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between items-center w-full relative">
        <div className="flex items-center text-sm">
          <p className="text-gray">chiho.zip&nbsp; &nbsp; / &nbsp; &nbsp;</p>

          <p className="text-black">{pathname === "/" ? "home" : pathname}</p>
        </div>

        <div>
          <Plus
            size={18}
            className="text-gray cursor-pointer"
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
