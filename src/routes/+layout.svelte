<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>CassetteOne - Ambience &amp; Music</title>
  <meta name="description" content="A retro design cassette player." />
  <meta
    name="keywords"
    content="CassetteOne,Cassette,One,Nooc,Weelone,Music,Player,LEMO FM,SOLOS,B Sides,Lo-Fi,White noise,Ambience,Apple Music,Third-party"
  />
  <meta name="apple-itunes-app" content="app-id=6683308033" />
  <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
  <link rel="icon" href="/icon.png" type="image/png" sizes="1024x1024" />
  <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="1024x1024" />
</svelte:head>

<div class="w-full h-full overflow-auto rounded-xl bg-neutral-900 shadow-inner shadow-neutral-900">
  {@render children()}
</div>
