import { type } from 'os';
import IconSend from './icons/IconSend';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';

type Props = {
  disable: boolean;
  onSend: (message: string) => void;
};

export const ChatMessageInput = ({ disable, onSend }: Props) => {
  const [text, setText] = useState('');
  const textEL = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textEL.current) {
      textEL.current.style.height = '0px';
      let scrollHeight = textEL.current.scrollHeight;
      textEL.current.style.height = scrollHeight + 'px';
    }
  }, [text, textEL]);

  const handleSendMessage = () => {
    if (!disable && text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };
  const handleOnKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLocaleLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={`flex  content-center border-gray-800/50 bg-gpt-lightgray p-2 rounded-md ${
        disable && 'opacity-50'
      }`}
    >
      <textarea
        ref={textEL}
        className="flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto"
        placeholder="Digite uma mensagem"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleOnKeyUp}
        disabled={disable}
      ></textarea>
      <div
        className={`self-end p-1 cursor-pointer rounded ${
          text.length ? 'opacity-100 hover:bg-black/50' : 'opacity-20'
        }  `}
        onClick={handleSendMessage}
      >
        <IconSend width={14} height={14} />
      </div>
    </div>
  );
};
