'use client';

import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
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
      <section className=" flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />
      </section>
    </main>
  );
};
export default Page;
