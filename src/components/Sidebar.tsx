import { ReactNode } from 'react';
import IconClose from './icons/iconClose';
import IconAdd from './icons/iconAdd';
import { SidebarButton } from './sidebarButton';
import IconTrash from './icons/iconTrash';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onClear: () => void;
  onNewChat: () => void;
};

export const SideBar = ({
  open,
  onClose,
  children,
  onClear,
  onNewChat
}: Props) => {
  return (
    <section
      className={`fixed left-0 top-0 bottom-0 text-white 
      ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}
    >
      <div
        className={` transition-all duration-300 flex h-screen ${
          open ? 'ml-0' : '-ml-96'
        } md:ml-0`}
      >
        <div className="flex flex-col w-64 p-2 bg-gray-900">
          <div
            onClick={onNewChat}
            className="flex items-center gap-2 p-3 rounded-md cursor-pointer border border-white/20  hover:bg-gray-500/20"
          >
            <IconAdd width={16} height={16} /> Nova conversa
          </div>
          <nav className="flex-1 pt-2 overflow-y-auto">{children}</nav>
          <div className="border-t border-gray-700 pt-2">
            <SidebarButton
              icon={<IconTrash width={16} height={16} />}
              label="limpar todas as conversas"
              onClick={onClear}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
          <IconClose onClick={onClose} width={24} height={24} />
        </div>
      </div>
    </section>
  );
};
