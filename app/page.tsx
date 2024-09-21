import Image from "next/image";
import DownloadOnAppStore from "../public/download-on-app-store.svg";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Image
        className="h-16 w-16 rounded-2xl"
        width={100}
        height={100}
        src="/app-icon.png"
        alt="Logo of CassetteOne"
      />
      <p className="font-bold mt-1">CassetteOne</p>
      <a
        className="mt-5"
        href="https://apps.apple.com/us/app/cassetteone/id6683308033"
      >
        <Image
          className="h20"
          src={DownloadOnAppStore}
          alt="Download on the App Store image"
        />
      </a>
    </div>
  );
}
