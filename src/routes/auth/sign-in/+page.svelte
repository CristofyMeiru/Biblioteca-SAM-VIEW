<script lang="ts">
  import * as Card from "$lib/components/ui/card/index";
  import books from "@src/lib/assets/books.png";
  import type { PageData } from "./$types";
  import SignInForm from "./sign-in-form.svelte";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Biblioteca SAM · Entrar</title>
</svelte:head>

<main>
  <div
    class="absolute w-96 h-96 rounded-full top-10 -left-24 blur-3xl bg-green-600/20 pointer-events-none"
  ></div>
  <div
    class="absolute w-72 h-72 rounded-full bottom-10 right-10 blur-3xl bg-orange-500/10 pointer-events-none"
  ></div>

  <Card.Root
    class="card-enter relative z-10 w-full max-w-5xl shadow-2xl overflow-hidden p-0 gap-0"
  >
    <Card.Header class="bg-background border-b px-8 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
          <img class="size-9" src="/logo.png" alt="Biblioteca SAM" />
          <h1 class="font-bold text-xl text-primary">Biblioteca SAM</h1>
        </div>
        <img
          class="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
          src="https://i0.wp.com/eeepsam.com.br/wp-content/uploads/2024/10/logo-header.png?fit=506%2C193&ssl=1"
          alt="EEEP SAM"
        />
      </div>
    </Card.Header>

    <div class="flex min-h-120">
      <Card.Content class="flex-1 flex items-center justify-center px-10 py-12">
        <SignInForm {data} />
      </Card.Content>

      <aside
        class="hidden md:flex flex-1 flex-col items-center justify-center gap-6 bg-muted border-l border-border px-10 py-12"
      >
        <img
          class="w-64 max-w-full drop-shadow-xl"
          src={books}
          alt="Pilha de livros"
        />
        <div class="text-center space-y-1">
          <h2 class="font-semibold text-primary text-base leading-snug">
            O conhecimento ao alcance<br />de todos
          </h2>
          <span class="text-xs text-muted-foreground">
            Sistema de gestão da Biblioteca SAM · EEEP
          </span>
        </div>
      </aside>
    </div>
  </Card.Root>
</main>

<style>
  @reference "@src/routes/layout.css";

  main {
    @apply relative w-full min-h-screen flex justify-center items-center p-4 overflow-hidden;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
