import { Chat } from '@/app/types/Chat';
import { ChatPlaceholder } from './ChatPLaceholder';

type Props = {
  chat: Chat | undefined;
};

export const ChatArea = ({ chat }: Props) => {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map(item => <div>...</div>)}
    </section>
  );
};
