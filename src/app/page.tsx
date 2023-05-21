'use client';

import { ChatArea } from '@/components/ChatArea';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { Chat } from './types/Chat';
import { Footer } from '@/components/Footer';
import { v4 as uuidv4 } from 'uuid';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handleClearConversations = () => {
    if (AiLoading) return;
    setChatActiveId('');
    setChatList([]);
  };

  const handleNewChat = () => {
    if (AiLoading) return;
    setChatActiveId('');
    closeSidebar();
  };

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      //Creating new Chat
      let newChatId = uuidv4();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: 'me', body: message }]
        },
        ...chatList
      ]);
      setChatActiveId(newChatId);
    } else {
      //Updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      });
      setChatList(chatListClone);
    }
    setAiLoading(true);
  };

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
        <ChatArea chat={chatActive} loading={AiLoading} />

        <Footer onSendMessage={handleSendMessage} disabled={AiLoading} />
      </section>
    </main>
  );
};
export default Page;
