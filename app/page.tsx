import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Image
        className="h20 w-20 rounded-2xl"
        width={100}
        height={100}
        src="/app-icon.png"
        alt="Logo of CassetteOne"
      />
      <p className="font-bold mt-3">CassetteOne</p>
    </div>
  );
}
