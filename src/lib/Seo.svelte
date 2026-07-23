<script lang="ts">
  interface Props {
    title: string;
    description: string;
    path?: string;
    type?: string;
  }

  let { title, description, path = "/", type = "website" }: Props = $props();

  const origin = "https://cassette.one";
  const canonical = $derived(path === "/" ? `${origin}/` : `${origin}${path}`);
  const ogImage = `${origin}/app-icon.png`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content="CassetteOne" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
