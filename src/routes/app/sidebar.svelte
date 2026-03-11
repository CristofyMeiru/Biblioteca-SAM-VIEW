<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button/index";
  import * as Sidebar from "$lib/components/ui/sidebar/index";
  import {
    IconArrowsExchange,
    IconBooks,
    IconBookUpload,
    IconChartBar,
    IconCornerDownLeft,
    IconLayoutDashboard,
    IconPlus,
    IconSchool,
    IconSettings,
    IconUsers,
  } from "@tabler/icons-svelte";

  const navItems = [
    { icon: IconLayoutDashboard, label: "Dashboard", href: "/app" },
    { icon: IconBooks, label: "Acervo", href: "/app/acervo" },
    { icon: IconUsers, label: "Usuários", href: "/app/usuarios" },
    { icon: IconArrowsExchange, label: "Empréstimos", href: "/app/emprestimos" },
    { icon: IconSchool, label: "Cursos", href: "/app/courses" },
  ] as const;

  const navActions = [
    { icon: IconBookUpload, label: "Adicionar Livro", href: "/app/books?dialog=new-book" },
    { icon: IconArrowsExchange, label: "Fazer Empréstimo", href: "/app/loans?dialog=new-loan" },
    { icon: IconSchool, label: "Adicionar Curso", href: "/app/courses?dialog=new-course" },
    { icon: IconCornerDownLeft, label: "Registrar Devolução", href: "/app/loans?dialog=return-loan" },
  ] as const;

  const bottomItems = [{ icon: IconSettings, label: "Configurações", href: "/app/configuracoes" }] as const;

  const usuario = {
    nome: "João Silva",
    cargo: "Bibliotecário",
    iniciais: "JS",
  };

  function isActive(href: string) {
    return $page.url.pathname === href;
  }
</script>

<Sidebar.Root>
  <!-- Header -->
  <Sidebar.Header class="px-4 py-4 border-b border-sidebar-border">
    <div class="flex items-center gap-3">
      <img
        src="/logo.png"
        class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"
        alt="logo.png"
      />
      <div class="flex flex-col">
        <span class="font-bold text-sm leading-tight text-sidebar-foreground">Biblioteca SAM</span>
        <span class="text-[10px] text-muted-foreground leading-tight">EEEP Salomão A. de Moura</span>
      </div>
    </div>

    <Button href="/loans" class="w-full mt-4 gap-2" size="sm">
      <IconPlus size={16} />
      Novo Empréstimo
    </Button>
  </Sidebar.Header>

  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel class="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-1">
        Menu
      </Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navItems as item}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive(item.href)} class="gap-3">
                <svelte:component this={item.icon} size={18} stroke={1.8} />
                <span>{item.label}</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

    <Sidebar.Group>
      <Sidebar.GroupLabel class="text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-1">
        Ações
      </Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navActions as action}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive(action.href)} class="gap-3">
                <svelte:component this={action.icon} size={18} stroke={1.8} />
                <span>{action.label}</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>

  <!-- Footer: configurações + usuário -->
  <Sidebar.Footer class="px-2 py-3 border-t border-sidebar-border space-y-1">
    {#each bottomItems as item}
      <Sidebar.MenuButton isActive={isActive(item.href)} class="gap-3 w-full">
        <svelte:component this={item.icon} size={18} stroke={1.8} />
        <span>{item.label}</span>
      </Sidebar.MenuButton>
    {/each}
  </Sidebar.Footer>
</Sidebar.Root>
