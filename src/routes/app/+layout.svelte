<!-- src/routes/(app)/+layout.svelte -->
<script lang="ts">
  import {
    SidebarProvider,
    SidebarTrigger,
  } from "@src/lib/components/ui/sidebar";
  import Sidebar from "./sidebar.svelte";

  let { children } = $props();
</script>

<div class="flex h-screen overflow-hidden private-background">
  <SidebarProvider>
    <Sidebar />
    <div class=" flex flex-col flex-1 overflow-y-auto">
      <section class=" bg-sidebar p-2 border-b border-border">
        <SidebarTrigger />
      </section>
      <main class=" flex-1">
        {@render children()}
      </main>
    </div>
  </SidebarProvider>
</div>

<style>
  .private-background {
    background: #f4f4f5;
  }
</style>
