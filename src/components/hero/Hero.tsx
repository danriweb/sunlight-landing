import Image from "next/image";

import picture from "@assets/images/picture-hero-header.png";
import pictureComplete from "@assets/images/picture-сomplete-hero-header.png";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex-base flex-col gap-6.25 rounded-[20px] hero-bg pt-6 min-[1404px]:flex-row min-[1404px]:justify-between! min-[1404px]:pt-0"
    >
      <div className="flex-center flex-col px-4 min-[1404px]:px-0 min-[1404px]:pl-12.5">
        {/* Text Content */}
        <div className="flex-base flex-col gap-4 text-center text-white min-[1404px]:text-left">
          <h1 id="hero-title" className="section-title w-full">
            Программа лояльности <span className="block min-[1404px]:inline"> SUNLIGHT Club </span>
          </h1>
          <p className="section-subtitle w-full">
            Мы обновили программу лояльности
            <br /> для наших самых любимых клиентов!
          </p>
        </div>
        {/* Features */}
        <ul className="flex-base flex-col gap-4 pt-6 section-features tracking-[0.4px] text-white min-[390px]:flex-row min-[390px]:gap-6 min-[1404px]:justify-start! sm:gap-8 sm:pt-8 lg:gap-10 lg:pt-10 xl:gap-10 xl:pt-12">
          <li>1 бонус = 1рубль</li>
          <li>3% бонус-бэк</li>
        </ul>
      </div>
      {/* Pictures */}
      <Image
        src={pictureComplete}
        priority
        alt="Успейте потратить начисленные баллы!"
        className="h-full max-h-112.5 max-w-182.5 max-[1404px]:hidden"
      />
      <Image
        src={picture}
        priority
        alt="Успейте потратить начисленные баллы!"
        className="min-[390px]:max-w-100 min-[1404px]:hidden"
      />
    </section>
  );
};

export default Hero;
