import IconRobot from './icons/IconRobot';

export const ChatMessageLoading = () => {
  return (
    <div className="p-5 bg-gray-500/50">
      <div className="mar-w-4xl m-auto flex items-center">
        <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded bg-green-900 ">
          <IconRobot />
        </div>
        <div className="flex-1 text-base whitespace-pre-wrap">
          <div className="w-1 h-4 bg-slate-300 animate-blink "></div>
        </div>
      </div>
    </div>
  );
};
