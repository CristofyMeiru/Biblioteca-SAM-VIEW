<script lang="ts">
  import { Lock, Mail } from '@lucide/svelte';
  import Button from "@src/lib/components/ui/button/button.svelte";
  import * as Form from "@src/lib/components/ui/form/index";
  import * as InputGroup from "@src/lib/components/ui/input-group/index";
  import { superForm, type SuperValidated } from "sveltekit-superforms";
  import { zod4Client } from "sveltekit-superforms/adapters";
  import { signInEmailSchema, type SignInEmail } from "./sign-in.schema";

  let { data }: { data: { form: SuperValidated<SignInEmail> } } = $props();

  // svelte-ignore state_referenced_locally
    const form = superForm(data.form, {
    validators: zod4Client(signInEmailSchema),
  });

  const { form: formData, enhance, errors, submitting } = form;
</script>

<form method="POST" use:enhance>

  <h1 class=" text-4xl font-medium text-center mb-10 ">Entrar</h1>

  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <InputGroup.Root>
        <InputGroup.Addon><Mail/></InputGroup.Addon>
        <InputGroup.Input placeholder='exemplo@prof.ce.gov.br' {...props} type="email" bind:value={$formData.email} />
        </InputGroup.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control>
      {#snippet children({ props })}
        <div class=" flex justify-between ">
          <Form.Label>Senha</Form.Label>
          <Button variant='link' class='py-0 h-fit' >Esqueceu a senha?</Button>
        </div>
        <InputGroup.Root>
        <InputGroup.Addon><Lock/></InputGroup.Addon>
        <InputGroup.Input placeholder='Informe sua senha' {...props} type="email" bind:value={$formData.email} />
        </InputGroup.Root>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Button size="lg" class="w-full" type="submit" disabled={$submitting}>
    {$submitting ? 'Entrando...' : 'Entrar'}
  </Button>
</form>