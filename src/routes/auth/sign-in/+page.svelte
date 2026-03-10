<svelte:head>
  <title>Biblioteca SAM | Entrar</title>
</svelte:head>

<script lang="ts">
  import * as Card from '$lib/components/ui/card/index';
  import type { PageData } from './$types';
  import SignInForm from './sign-in-form.svelte';

  let { data }: { data: PageData } = $props();
</script>

<main>

  <Card.Root class=" shadow-2xl min-h-4/6 w-full pt-0 max-w-5xl ">
  <Card.Header class=" bg-primary p-2 px-10 " >
    <div class="flex justify-between items-center">
      <h1 class=" font-bold text-2xl text-secondary ">Biblioteca SAM</h1>
      <img class=" w-30 " src="https://i0.wp.com/eeepsam.com.br/wp-content/uploads/2024/10/logo-header.png?fit=506%2C193&ssl=1" alt="eeep-logo">
    </div>
  </Card.Header>
    <Card.Content class=" flex space-x-4 ">
      <div class=" flex-1 ">
        <SignInForm data={data} />
      </div>
      <aside class="flex-1">
      </aside>
    </Card.Content>
  </Card.Root>

</main>

<style>
  @reference "@src/routes/layout.css";

  main {
    background-image: url("@src/lib/assets/shape-green.avif");
    @apply w-full h-screen flex justify-center items-center bg-emerald-300/30 ;
  }
</style>