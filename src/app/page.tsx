'use client';

import { ChatArea } from '@/components/ChatArea';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { Chat } from './types/Chat';
import { Footer } from '@/components/Footer';
import { v4 as uuidv4 } from 'uuid';
import { SidebarChatButton } from '@/components/SidebarChatButton';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (AiLoading) getAIresponse();
  }, [AiLoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const getAIresponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: 'Aqui vai a resposta da Ai :)'
        });
      }
      setChatList(chatListClone);
      setAiLoading(false);
    }, 2000);
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

  const handleSelectChat = (id: string) => {
    if (AiLoading) return;

    let item = chatList.find(item => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSidebar();
  };
  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId('');
  };
  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  };

  return (
    <main className="flex min-h-screen bg-gpt-gray ">
      <SideBar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map(item => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </SideBar>
      <section className=" flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'Nova Conversa'}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} loading={AiLoading} />

        <Footer onSendMessage={handleSendMessage} disabled={AiLoading} />
      </section>
    </main>
  );
};
export default Page;
