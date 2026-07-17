<script lang="ts">
  import { page } from "$app/state";

  const message = $derived(
    page.status === 404 ? "This page could not be found." : (page.error?.message ?? "An error occurred."),
  );
</script>

<svelte:head>
  <title>{page.status}: {message}</title>
</svelte:head>

<div
  style="font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'; height: 100vh; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;"
>
  <div>
    <h1
      style="display: inline-block; margin: 0 20px 0 0; padding: 0 23px 0 0; font-size: 24px; font-weight: 500; vertical-align: top; line-height: 49px; border-right: 1px solid rgba(255, 255, 255, 0.3);"
    >
      {page.status}
    </h1>
    <div style="display: inline-block;">
      <h2 style="font-size: 14px; font-weight: 400; line-height: 49px; margin: 0;">{message}</h2>
    </div>
  </div>
</div>
