<script lang="ts">
  import {
    IconActivity,
    IconBook2,
    IconBooks,
    IconChartBar,
    IconChevronDown,
    IconLock,
    IconSearch,
    IconUsers,
  } from "@tabler/icons-svelte";
  import { onMount } from "svelte";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  const features = [
    {
      icon: IconSearch,
      accent: false,
      title: "Catálogo Público",
      desc: "Busque por título, autor, área ou curso técnico. Disponível para toda a comunidade.",
    },
    {
      icon: IconUsers,
      accent: true,
      title: "Gestão de Usuários",
      desc: "Cadastro de alunos e professores, histórico de empréstimos, devoluções e multas automatizadas.",
    },
    {
      icon: IconChartBar,
      accent: false,
      title: "Relatórios e Dados",
      desc: "Estatísticas de uso, títulos mais procurados e relatórios para apoio à gestão escolar.",
    },
    {
      icon: IconBooks,
      accent: false,
      title: "Acervo Técnico",
      desc: "Obras para os cursos da EEEP SAM: Informática, Administração, Agropecuária e mais.",
    },
    {
      icon: IconLock,
      accent: true,
      title: "Acesso Seguro",
      desc: "Painel protegido por autenticação. Apenas gestores e bibliotecários gerenciam o acervo.",
    },
    {
      icon: IconActivity,
      accent: false,
      title: "Sempre Atualizado",
      desc: "O acervo reflete em tempo real a disponibilidade dos exemplares na biblioteca física.",
    },
  ] as const;

  const tags = [
    "Consulta pública",
    "Gestão de empréstimos",
    "Cursos técnicos",
    "Relatórios",
  ];
  const stats = [
    { value: "500", suffix: "+", label: "Títulos" },
    { value: "12", suffix: "+", label: "Áreas" },
    { value: "1k", suffix: "", label: "Alunos" },
  ];
  const navLinks = ["sobre", "recursos", "acesso"];
</script>

<svelte:head>
  <title>Biblioteca SAM · EEEP Salomão Alves de Moura</title>
</svelte:head>

<!-- NAVBAR -->
<nav
  class=" bg-green-950 relative z-50 flex items-center justify-between px-6 md:px-12 py-5"
>
  <a href="/" class="flex items-center gap-3">
    <img class="size-10" src="/logo.png" alt="" />
    <span class="font-serif font-bold text-xl text-green-50 tracking-tight">
      Biblioteca <span class="text-green-400">SAM</span>
    </span>
  </a>

  <div class="hidden md:flex items-center gap-8">
    {#each navLinks as section}
      <a
        href="#{section}"
        class="text-sm text-green-200/70 hover:text-green-100 transition-colors font-medium capitalize"
      >
        {section}
      </a>
    {/each}
  </div>

  <a
    href="/auth/sign-in"
    class="text-sm font-semibold text-green-300 border border-green-700 rounded-full px-5 py-2 hover:bg-green-900/60 transition-colors"
  >
    Entrar
  </a>
</nav>

<!-- HERO -->
<section
  class="relative min-h-screen flex items-center overflow-hidden pb-32 pt-10"
  style="background: linear-gradient(135deg, #052e16 0%, #0a3d1f 50%, #0d4a25 100%);"
>
  <div
    class="absolute w-96 h-96 rounded-full top-10 -left-24 blur-3xl bg-green-600/20 pointer-events-none"
  ></div>
  <div
    class="absolute w-72 h-72 rounded-full bottom-20 right-10 blur-3xl bg-orange-500/15 pointer-events-none"
  ></div>
  <div class="absolute inset-0 pointer-events-none grid-bg"></div>

  <div
    class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center"
  >
    <!-- Left -->
    <div
      class="flex flex-col transition-opacity duration-500"
      class:opacity-100={mounted}
      class:opacity-0={!mounted}
    >
      <div
        class="inline-flex items-center gap-2 bg-green-900/60 border border-green-700/50 rounded-full px-4 py-1.5 mb-8 w-fit"
      >
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span class="text-xs font-medium text-green-300 tracking-wide uppercase"
          >EEEP Salomão Alves de Moura</span
        >
      </div>

      <h1
        class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
      >
        <span class="text-green-50">O saber da</span><br />
        <span
          class="bg-linear-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent"
        >
          EEEP SAM
        </span><br />
        <span class="text-green-50">ao seu alcance</span>
      </h1>

      <p class="text-green-200/70 text-lg leading-relaxed max-w-md mb-10">
        Descubra, explore e gerencie o acervo da Biblioteca SAM. Títulos para
        todos os cursos técnicos, pesquisa e leitura em um só lugar.
      </p>

      <div class="flex flex-wrap gap-4">
        <a
          href="/acervo"
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-950/60 transition-all hover:-translate-y-0.5"
        >
          <IconBooks size={18} />
          Explorar Acervo
        </a>
        <a
          href="/auth/sign-in"
          class="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-950/40 transition-all hover:-translate-y-0.5"
        >
          <IconLock size={18} />
          Painel Administrativo
        </a>
      </div>

      <div class="flex gap-10 mt-14 border-t border-green-800/50 pt-8">
        {#each stats as stat, i}
          {#if i > 0}<div class="w-px bg-green-800/60"></div>{/if}
          <div>
            <p class="font-serif text-4xl font-bold text-green-300">
              {stat.value}<span class="text-orange-400">{stat.suffix}</span>
            </p>
            <p
              class="text-xs text-green-500 uppercase tracking-widest mt-1 font-medium"
            >
              {stat.label}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Illustration -->
    <div class="hidden md:flex items-center justify-center relative">
      <div
        class="absolute w-72 h-72 rounded-full border border-green-600/20 animate-pulse"
      ></div>
      <div
        class="absolute w-96 h-96 rounded-full border border-green-700/10 animate-pulse"
        style="animation-delay:.8s"
      ></div>
      <div class="book-float relative z-10">
        <svg
          viewBox="0 0 340 360"
          width="320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="170"
            cy="332"
            rx="120"
            ry="18"
            fill="#000"
            opacity=".3"
          />
          <rect x="50" y="270" width="240" height="48" rx="6" fill="#0e3a5c" />
          <rect x="50" y="270" width="20" height="48" rx="4" fill="#092a44" />
          <rect x="62" y="226" width="220" height="46" rx="6" fill="#14532d" />
          <rect x="62" y="226" width="18" height="46" rx="4" fill="#0d3d21" />
          <rect x="72" y="184" width="200" height="44" rx="6" fill="#c2410c" />
          <rect x="72" y="184" width="17" height="44" rx="4" fill="#9a3412" />
          <rect x="80" y="144" width="184" height="42" rx="6" fill="#0f766e" />
          <rect x="80" y="144" width="16" height="42" rx="4" fill="#0b5a54" />
          <rect x="90" y="108" width="164" height="38" rx="6" fill="#b45309" />
          <rect x="90" y="108" width="15" height="38" rx="4" fill="#92400e" />
          <rect x="196" y="108" width="8" height="28" rx="1" fill="#f97316" />
          <polygon points="196,136 204,136 200,144" fill="#f97316" />
          <path
            d="M170 108 Q158 82 140 72"
            stroke="#16a34a"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
          />
          <ellipse
            cx="132"
            cy="66"
            rx="18"
            ry="9"
            fill="#22c55e"
            opacity=".9"
            transform="rotate(-35 132 66)"
          />
          <path
            d="M180 108 Q194 78 212 68"
            stroke="#15803d"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
          />
          <ellipse
            cx="220"
            cy="63"
            rx="16"
            ry="8"
            fill="#16a34a"
            opacity=".85"
            transform="rotate(30 220 63)"
          />
        </svg>
      </div>
    </div>
  </div>

  <div
    class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-600"
  >
    <span class="text-xs tracking-widest uppercase font-medium">Saiba mais</span
    >
    <IconChevronDown size={20} class="animate-bounce" />
  </div>
</section>

<!-- SOBRE -->
<section id="sobre" class="py-28 px-6 md:px-12" style="background:#071f0e;">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div class="reveal translate-y-6 transition-all duration-700">
      <p
        class="font-serif text-2xl md:text-3xl italic text-green-100 leading-relaxed pl-6 border-l-4 border-orange-500"
      >
        Uma biblioteca não é apenas um lugar onde os livros ficam guardados — é
        onde o futuro começa a ser escrito.
      </p>
      <p class="mt-6 pl-6 text-sm text-green-500 font-medium">
        — Biblioteca SAM · EEEP Salomão Alves de Moura
      </p>
    </div>

    <div class="reveal translate-y-6 transition-all duration-700 delay-150">
      <span
        class="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 block"
        >Sobre o projeto</span
      >
      <h2
        class="font-serif text-4xl font-bold text-green-50 mb-6 leading-tight"
      >
        Acervo digital para a comunidade SAM
      </h2>
      <p class="text-green-300/70 leading-relaxed mb-4">
        Sistema de gestão e consulta do acervo bibliográfico da EEEP Salomão
        Alves de Moura, em Aracoiaba, Ceará. Desenvolvido para facilitar o
        acesso de alunos e professores ao vasto acervo da escola.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        {#each tags as tag}
          <span
            class="text-xs font-medium bg-green-900/60 border border-green-700/40 text-green-300 rounded-full px-4 py-1.5"
          >
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- RECURSOS -->
<section
  id="recursos"
  class="py-28 px-6 md:px-12"
  style="background: linear-gradient(180deg, #071f0e 0%, #052e16 100%);"
>
  <div class="max-w-7xl mx-auto">
    <div
      class="text-center mb-16 reveal translate-y-6 transition-all duration-700"
    >
      <span
        class="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 block"
        >Funcionalidades</span
      >
      <h2 class="font-serif text-4xl md:text-5xl font-bold text-green-50">
        O que você encontra aqui
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each features as f}
        <div
          class="reveal hover:bg-green-900/50! translate-y-6 transition-all duration-500 rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-2xl cursor-default border"
          style="background: {f.accent
            ? 'hsl(var(--accent)/0.08)'
            : 'hsl(var(--muted))'}; border-color: {f.accent
            ? 'hsl(var(--accent)/0.3)'
            : 'hsl(var(--border))'}"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border"
            style="background: {f.accent
              ? 'hsl(var(--accent)/0.2)'
              : 'hsl(var(--primary)/0.2)'}; border-color: {f.accent
              ? 'hsl(var(--accent)/0.4)'
              : 'hsl(var(--primary)/0.4)'}"
          >
            <f.icon
              size={22}
              color={f.accent ? "#fb923c" : "#4ade80"}
              stroke={1.8}
            />
          </div>
          <h3 class="font-serif text-xl font-semibold text-green-50 mb-3">
            {f.title}
          </h3>
          <p class="text-green-400/70 text-sm leading-relaxed">{f.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section
  id="acesso"
  class="py-28 px-6 md:px-12 relative overflow-hidden"
  style="background:#071f0e;"
>
  <div
    class="absolute w-80 h-80 rounded-full -bottom-20 -left-20 blur-3xl bg-green-700/25 pointer-events-none"
  ></div>
  <div
    class="absolute w-64 h-64 rounded-full -top-10 right-10 blur-3xl bg-orange-500/10 pointer-events-none"
  ></div>

  <div
    class="relative max-w-4xl mx-auto reveal translate-y-6 transition-all duration-700"
  >
    <div
      class="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      style="background: linear-gradient(135deg, #0d3d1f, #0a2e17); border: 1px solid rgba(22,163,74,.2);"
    >
      <div
        class="absolute top-0 right-0 w-40 h-40 opacity-20 pointer-events-none"
        style="background: radial-gradient(circle at top right, #f97316, transparent 70%);"
      ></div>

      <span
        class="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-5 block"
        >Acesso rápido</span
      >
      <h2
        class="font-serif text-4xl md:text-5xl font-bold text-green-50 mb-4 leading-tight"
      >
        Por onde você<br />quer começar?
      </h2>
      <p class="text-green-400/70 max-w-md mx-auto mb-12">
        Acesse o acervo público sem precisar de conta, ou entre no painel com
        suas credenciais institucionais.
      </p>

      <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
        <a
          href="/acervo"
          class="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg shadow-green-950/50 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
        >
          <IconBooks size={20} />
          Explorar Acervo
          <span class="text-green-300/60 text-xs font-normal">— público</span>
        </a>
        <a
          href="/auth/sign-in"
          class="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-950/40 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
        >
          <IconLock size={20} />
          Painel Administrativo
          <span class="text-orange-200/60 text-xs font-normal">— restrito</span>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer
  class="border-t border-green-900/80 py-8 px-6 md:px-12"
  style="background:#040f07;"
>
  <div
    class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
  >
    <div class="flex items-center gap-3">
      <div
        class="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center"
      >
        <IconBook2 size={14} color="white" stroke={2} />
      </div>
      <span class="font-serif font-semibold text-green-400 text-sm"
        >Biblioteca SAM</span
      >
    </div>
    <p class="text-xs text-green-700 text-center">
      © 2025 EEEP Salomão Alves de Moura · Aracoiaba, Ceará
    </p>
    <a
      href="https://eeepsam.com.br"
      target="_blank"
      rel="noopener noreferrer"
      class="text-xs text-green-600 hover:text-green-400 transition-colors"
    >
      eeepsam.com.br ↗
    </a>
  </div>
</footer>

<style>
  @reference "@src/routes/layout.css";

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .book-float {
    animation: float 4s ease-in-out infinite;
  }

  .grid-bg {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.03) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }
</style>
