'use client';

import { ChatArea } from '@/components/ChatArea';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { title } from 'process';
import { useState } from 'react';
import { Chat } from './types/Chat';
import { Footer } from '@/components/Footer';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'bla bla blu',
    messages: [
      {
        id: '99',
        author: 'me',
        body: 'opa tudo bem?'
      },
      {
        id: '100',
        author: 'ai',
        body: 'Sim, em que posso te ajuda?'
      },
      {
        id: '100',
        author: 'me',
        body: 'nada, muito obrigado :)'
      }
    ]
  });

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handleClearConversations = () => {};
  const handleNewChat = () => {};
  const handleSendMessage = () => {};
  const [AIloading, setAIloading] = useState(false);
  return (
    <main className="flex min-h-screen bg-gpt-gray ">
      <SideBar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="w-full h-5 mt-2">...</div>
      </SideBar>
      <section className=" flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`bla bla bla`}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} />

        <Footer onSendMessage={handleNewChat} disabled={AIloading} />
      </section>
    </main>
  );
};
export default Page;
