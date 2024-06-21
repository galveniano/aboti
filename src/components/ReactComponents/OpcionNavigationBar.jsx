import React, { useState } from "react";

function OpcionNavigationBar({ id, children, label }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        id={id}
        class="rounded-full focus:border-brand1 border-2 border-negro1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </button>

      <span
        class={`${
          isHovered ? "absolute" : "hidden"
        }  absolute ml-[30%] mt-[40%]  transform -translate-y-1/2 bg-white text-ubuntu whitespace-nowrap text-bg1 text-sm px-2 py-1 rounded-[8px] transition-opacity`}
      >
        {label}
      </span>
    </div>
  );
}

export default OpcionNavigationBar;
