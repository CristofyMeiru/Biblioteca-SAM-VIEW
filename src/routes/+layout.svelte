<script lang="ts">
  import { page } from "$app/stores";
  import favicon from "$lib/assets/favicon.svg";
  import { APP_NAME } from "$lib/constants";
  import "./layout.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>
    {$page.data.title ? `${APP_NAME} · ${$page.data.title}` : APP_NAME}
  </title>
</svelte:head>
{@render children()}

<style>
  :global(body) {
    background-color: #052e16;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(135deg, #052e16 0%, #0a3d1f 50%, #0d4a25 100%);
    background-size:
      60px 60px,
      60px 60px,
      100% 100%;
    min-height: 100vh;
  }
</style>
