import {
  type IconType,
  SiFacebook,
  SiInstagram,
  SiOdnoklassniki,
  SiVk,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

import { Dich, DownloadAppGallery, DownloadAppStore, DownloadGooglePlay, SunMag } from "@ui/icons";

type IconConfig = {
  Component: IconType;
  inverted?: boolean;
  title: string;
};

const ICONS: IconConfig[] = [
  { Component: SiInstagram, inverted: true, title: "Инстаграм" },
  { Component: SiFacebook, title: "Фейсбук" },
  { Component: SiYoutube, title: "Ютуб" },
  { Component: SiOdnoklassniki, title: "Одноклассники" },
  { Component: SiVk, title: "ВКонтакте" },
];

export function SocialLinks() {
  return (
    <div className="flex w-full">
      <ul className="flex w-full justify-between gap-5">
        {ICONS.map((icon, index) => {
          return <SocialIcon key={index} Icon={icon.Component} inverted={icon.inverted} title={icon.title} />;
        })}
      </ul>
    </div>
  );
}

type SocialIconProps = {
  Icon: IconType;
  inverted?: boolean;
  title: string;
  href?: string;
};

function SocialIcon({ Icon, inverted = false, title, href = "#" }: SocialIconProps) {
  return (
    <li className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black">
      <Link
        href={href}
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-full w-full items-center justify-center"
      >
        {inverted && <div className="absolute inset-2.25 rounded-md bg-white" />}
        <Icon className="z-10" color={inverted ? "black" : "white"} />
      </Link>
    </li>
  );
}

export function MediaPromo() {
  return (
    <div className="flex w-full flex-col pt-8">
      {/*Sun Mag*/}
      <Link
        href="#"
        aria-label="SunMag"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center gap-2.25"
      >
        <SunMag className="h-12 w-12 lg:h-auto lg:w-auto" />
        <div className="flex flex-col text-[20px]/[20px] lg:text-[14px]/[20px]">
          SUN Magazine{" "}
          <span className="leading-3.5 opacity-50 group-hover:text-red-500 group-hover:opacity-100">
            Сайт, с которым не скучно
          </span>
        </div>
      </Link>
      {/*Dich*/}
      <Link
        href="#"
        aria-label="Dich"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full flex-col gap-1 pt-4.5"
      >
        <Dich className="h-7.25 w-32.25 lg:h-5 lg:w-21.5" />
        <div className="flex text-[18px]/[20px] group-hover:text-red-500 lg:text-[14px]/[20px]">
          О жизни. Для жизни. Для мужчин.
        </div>
      </Link>
    </div>
  );
}
export function AppDownloads() {
  return (
    <div className="flex w-full flex-col gap-1.25 pt-6 lg:pt-12.25">
      <Link
        href="#"
        aria-label="Скачать в Google Play"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-auto items-center justify-center border"
      >
        <DownloadGooglePlay className="h-15.5 w-auto lg:h-10.5 xl:h-auto" />
      </Link>
      <Link
        href="#"
        aria-label="Скачать в App Store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-auto items-center justify-center border"
      >
        <DownloadAppStore className="h-15.5 w-auto lg:h-10.5 xl:h-auto" />
      </Link>
      <Link
        href="#"
        aria-label="Скачать в AppGallery"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-auto items-center justify-center border"
      >
        <DownloadAppGallery className="h-15.5 w-auto lg:h-10.5 xl:h-auto" />
      </Link>
    </div>
  );
}
