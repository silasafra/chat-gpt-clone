'use client';

import { SideBar } from '@/components/Sidebar';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handleClearConversations = () => {};
  const handleNewChat = () => {};
  return (
    <main className="flex min-h-screen bg-gpt-gray ">
      <SideBar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="w-16 h-96 bg-red-600 mt-2">...</div>
      </SideBar>
      <section className=" flex flex-col w-full"></section>
    </main>
  );
};
export default Page;
