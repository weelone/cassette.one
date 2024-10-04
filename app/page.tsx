import Image from "next/image";
import DownloadOnAppStore from "../public/download-on-app-store.svg";
import Link from "next/link";

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

      <div className="flex flex-col md:flex-row gap-5">
        <a
          className="inline w-fit"
          href="https://apps.apple.com/us/app/cassetteone/id6683308033"
        >
          <Image
            src={DownloadOnAppStore}
            alt="Download on the App Store image"
          />
        </a>
        <a
          href="https://www.producthunt.com/posts/cassetteone?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cassetteone"
          target="_blank"
        >
          <img
            className="h-[40px] w-fit rounded-lg border border-neutral-400"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=492825&theme=dark"
            alt="CassetteOne - Retro&#0032;design&#0032;ambience&#0032;&#0038;&#0032;music | Product Hunt"
            width="250"
            height="54"
          />
        </a>
      </div>

      <div className="lg:max-w-md aspect-video">
        <video
          className="lg:max-w-md rounded-xl shadow-lg shadow-neutral-900 border border-neutral-800"
          src="https://cdn.cassette.one/preview-video.mov"
          controls
        />
      </div>

      <ol className="flex gap-4 text-sm mt-auto underline">
        <li>
          <a href="https://weelone.com" target="_blank">
            Weelone
          </a>
        </li>
        <li>
          <a href="https://nooc.me" target="_blank">
            Nooc
          </a>
        </li>
        <li>
          <a href="https://sparkmemos.com" target="_blank">
            Spark Memos
          </a>
        </li>
      </ol>

      <ol className="flex gap-4 opacity-50 text-sm -mt-3">
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
      </ol>
    </div>
  );
}
