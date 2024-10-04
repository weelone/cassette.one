import Image from "next/image";
import DownloadOnAppStore from "../public/download-on-app-store.svg";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="min-w-full min-h-full flex flex-col p-5 gap-5 md:p-10 justify-center font-[family-name:var(--font-geist-sans)] bg-noise">
      <div className="flex gap-4 items-center">
        <Image
          className="h-16 w-16 rounded-2xl"
          width={100}
          height={100}
          src="/app-icon.png"
          alt="Logo of CassetteOne"
        />
        <div className="flex flex-col">
          <p className="font-bold mt-1 text-sm md:text-base">
            CassetteOne - Ambience & Music
          </p>
          <p className="opacity-60 text-xs md:text-base">
            Listen white noise, ambient sounds and music.
          </p>
        </div>
      </div>
      <p className="max-w-2xl">
        CassetteOne is a music player with a retro design that simulates a
        cassette player. You can use it to play built-in white noise or link it
        to Apple Music to play your own playlists. It also offers different
        interface themes to choose from.
      </p>
      <a
        className="inline w-fit"
        href="https://apps.apple.com/us/app/cassetteone/id6683308033"
      >
        <Image
          className="h20"
          src={DownloadOnAppStore}
          alt="Download on the App Store image"
        />
      </a>
      <div className="lg:max-w-md aspect-video">
        <video
          className="lg:max-w-md rounded-xl shadow-lg shadow-neutral-900 border border-neutral-800"
          src="https://cdn.cassette.one/preview-video.mov"
          controls
        />
      </div>
    </div>
  );
}
