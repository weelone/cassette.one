<script lang="ts">
  import Seo from "$lib/Seo.svelte";

  const description =
    "CassetteOne is a retro-design cassette player for iPhone and iPad. Play built-in white noise and ambient sounds, or link Apple Music to play your own playlists.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CassetteOne",
    operatingSystem: "iOS",
    applicationCategory: "MultimediaApplication",
    description,
    url: "https://cassette.one/",
    image: "https://cassette.one/app-icon.png",
    downloadUrl: "https://apps.apple.com/us/app/cassetteone/id6683308033",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Weelone Ltd",
      url: "https://weelone.com",
    },
  };
</script>

<Seo title="CassetteOne - Ambience &amp; Music" {description} path="/" />

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<div
  class="min-w-full min-h-full flex flex-col p-5 gap-5 md:p-10 justify-center font-[family-name:var(--font-geist-sans)] bg-noise"
>
  <div class="flex gap-4 items-center">
    <img
      class="h-16 w-16 rounded-2xl"
      width="100"
      height="100"
      src="/app-icon.png"
      alt="Logo of CassetteOne"
    />
    <div class="flex flex-col">
      <h1 class="font-bold mt-1 text-sm md:text-base">CassetteOne - Ambience &amp; Music</h1>
      <p class="opacity-60 text-xs md:text-base">Listen white noise, ambient sounds and music.</p>
    </div>
  </div>

  <p class="max-w-2xl">
    CassetteOne is a music player with a retro design that simulates a cassette player. You can use it
    to play built-in white noise or link it to Apple Music to play your own playlists. It also offers
    different interface themes to choose from.
  </p>

  <div class="flex flex-col md:flex-row gap-5">
    <a class="inline w-fit" href="https://apps.apple.com/us/app/cassetteone/id6683308033">
      <img
        src="/download-on-app-store.svg"
        alt="Download on the App Store"
        width="120"
        height="40"
      />
    </a>
    <a
      href="https://www.producthunt.com/posts/cassetteone?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cassetteone"
      target="_blank"
      rel="noopener"
    >
      <img
        class="h-[40px] w-fit rounded-lg border border-neutral-400"
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=492825&theme=dark"
        alt="CassetteOne - Retro design ambience & music | Product Hunt"
        width="250"
        height="54"
      />
    </a>
  </div>

  <div class="lg:max-w-md aspect-video">
    <!-- svelte-ignore a11y_media_has_caption -->
    <video
      class="lg:max-w-md rounded-xl shadow-lg shadow-neutral-900 border border-neutral-800"
      src="https://cdn.cassette.one/preview-video.mov"
      controls
    ></video>
  </div>

  <ol class="flex gap-4 text-sm mt-auto underline">
    <li><a href="https://weelone.com" target="_blank" rel="noopener">Weelone</a></li>
    <li><a href="https://echobell.one" target="_blank" rel="noopener">Echobell</a></li>
    <li><a href="https://nooc.me" target="_blank" rel="noopener">Nooc</a></li>
    <li><a href="https://sparkmemos.com" target="_blank" rel="noopener">Spark Memos</a></li>
  </ol>

  <ol class="flex gap-4 opacity-50 text-sm -mt-3">
    <li><a href="/privacy">Privacy</a></li>
    <li><a href="/terms">Terms</a></li>
  </ol>
</div>
