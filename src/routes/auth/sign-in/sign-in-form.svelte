<script lang="ts">
  import Button from "@src/lib/components/ui/button/button.svelte";
  import * as Form from "@src/lib/components/ui/form/index";
  import * as InputGroup from "@src/lib/components/ui/input-group/index";
  import {
    IconEye,
    IconEyeClosed,
    IconLock,
    IconMail,
  } from "@tabler/icons-svelte";
  import { superForm, type SuperValidated } from "sveltekit-superforms";
  import { zod4Client } from "sveltekit-superforms/adapters";
  import { signInEmailSchema, type SignInEmail } from "./sign-in.schema";

  let { data }: { data: { form: SuperValidated<SignInEmail> } } = $props();

  // svelte-ignore state_referenced_locally
  const form = superForm(data.form, {
    validators: zod4Client(signInEmailSchema),
  });

  const { form: formData, enhance, errors, submitting } = form;

  let showPassword = $state(false);
</script>

<form class=" w-full max-w-md" method="POST" use:enhance>
  <div class=" mb-10 text-center">
    <h1 class=" text-4xl font-medium">Entrar</h1>
    <span class=" text-muted-foreground">Acesse sua conta para continuar</span>
  </div>

  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <InputGroup.Root>
          <InputGroup.Addon><IconMail /></InputGroup.Addon>
          <InputGroup.Input
            placeholder="exemplo@prof.ce.gov.br"
            {...props}
            type="email"
            bind:value={$formData.email}
          />
        </InputGroup.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control>
      {#snippet children({ props })}
        <div class=" flex justify-between">
          <Form.Label>Senha</Form.Label>
          <Button variant="link" class=" h-fit">Esqueceu a senha?</Button>
        </div>
        <InputGroup.Root>
          <InputGroup.Addon><IconLock /></InputGroup.Addon>
          <InputGroup.Input
            placeholder="Informe sua senha"
            {...props}
            type={showPassword ? "text" : "password"}
            bind:value={$formData.password}
          />
          <InputGroup.Button
            class="text-muted-foreground"
            onclick={() => (showPassword = !showPassword)}
            >{#if showPassword}
              <IconEye class="size-5" />
            {:else}
              <IconEyeClosed class="size-5" />
            {/if}</InputGroup.Button
          >
        </InputGroup.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Button size="lg" class="w-full" type="submit" disabled={$submitting}>
    {$submitting ? "Entrando..." : "Entrar"}
  </Button>
</form>
