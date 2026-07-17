<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col p-5 md:p-10 bg-noise">
  <a class="flex gap-4 items-center" href="/">
    <img
      class="h-16 w-16 rounded-2xl"
      width="100"
      height="100"
      src="/app-icon.png"
      alt="Logo of CassetteOne"
    />
    <div class="flex flex-col">
      <p class="font-bold mt-1 text-sm md:text-base">CassetteOne - Ambience &amp; Music</p>
      <p class="opacity-60 text-xs md:text-base">Listen white noise, ambient sounds and music.</p>
    </div>
  </a>
  <div class="mt-10 prose prose-invert">
    {@render children()}
  </div>
</div>
