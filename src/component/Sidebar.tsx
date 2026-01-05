import { HelpCircle, History, Menu, PlusCircle, Settings } from "lucide-react";
import React, { useState } from "react";

function Sidebar() {
  const [isToggle, setIsToggle] = useState(false);

  function toggleNav() {
    setIsToggle(!isToggle);
  }
  return (
    <div className="bg-gray-100  whitespace-nowrap  left-0 h-screen w-content  transition flex flex-col justify-between md:px-8 md:py-5 px-1 py-6">
      <div>
        <button onClick={toggleNav} >
          <Menu />
        </button>

        <div className="pt-20">
          <button className="flex gap-2 items-center bg-gray-200 p-3 rounded-4xl">
            <PlusCircle size={20} />{" "}
            <span className={isToggle ? "" : "hidden"}> New Chat</span>
          </button>
          <div className={`pt-5 ${isToggle ? "" : "hidden"} `}>
            <h2>Recents</h2>
            <li>dummy data</li>
          </div>
        </div>
      </div>
      <div className={`flex gap-6 flex-col ${isToggle? ' ':'justify-center items-center'}   `}>
        <div className="flex gap-2">
          <HelpCircle /> <p className={isToggle ? "" : "hidden"}> Help </p>
        </div>
        <div className="flex gap-2">
          <Settings /> <p className={isToggle ? "" : "hidden"}> Settings</p>
        </div>

        <div className="flex gap-2">
          <History /> <p className={isToggle ? "" : "hidden"}> Recent chats</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
