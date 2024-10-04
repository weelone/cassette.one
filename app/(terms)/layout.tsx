import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-5 md:p-10 bg-noise">
      <Link className="flex gap-4 items-center" href="/">
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
      </Link>
      <div className="mt-10 prose prose-invert">{children}</div>
    </div>
  );
}
