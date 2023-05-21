import { ChatMessageInput } from './ChatMessageInput';

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput disable={disabled} onSend={onSendMessage} />
        <div className="text-center pt-3 text-xs text-gray-400">
          Feito por Silas Afra
        </div>
      </div>
    </footer>
  );
};
