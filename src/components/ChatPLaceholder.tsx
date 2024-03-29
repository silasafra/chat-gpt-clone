import IconAlertTriangle from './icons/IconAlertTriangle';
import IconLightningBolt from './icons/IconLightningBolt';
import IconSunTwentyFour from './icons/IconSun';

export const ChatPlaceholder = () => {
  return (
    <div className="m-5">
      <h3 className="text-4xl font-bold text-center my-8">ChatGPT</h3>

      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
        <div className="">
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSunTwentyFour width={24} height={24} className="mr-3" />
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center text-lg mb-3">
            <IconLightningBolt width={24} height={24} className="mr-3" />
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center text-lg mb-3">
            <IconAlertTriangle width={24} height={24} className="mr-3" />
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
          <div className="bg-white/5 rounded text-center text-sm mb-3 p-3">
            Explique o sentido da vida em termos simples
          </div>
        </div>
      </div>
    </div>
  );
};
