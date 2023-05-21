'use client';

import { ChatArea } from '@/components/ChatArea';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { useState } from 'react';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>();

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
        <div className="w-full h-5 bg-red-600 mt-2"></div>
      </SideBar>
      <section className=" flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} />
      </section>
    </main>
  );
};
export default Page;
