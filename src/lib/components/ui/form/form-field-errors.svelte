<script lang="ts">
  import * as Alert from "$lib/components/ui/alert/index";
  import { cn, type WithoutChild } from "$lib/utils.js";
  import AlertCircleFilled from "@tabler/icons-svelte/icons/alert-circle-filled";
  import * as FormPrimitive from "formsnap";

  let {
    ref = $bindable(null),
    class: className,
    errorClasses,
    children: childrenProp,
    ...restProps
  }: WithoutChild<FormPrimitive.FieldErrorsProps> & {
    errorClasses?: string | undefined | null;
  } = $props();
</script>

<div class=" min-h-7 mb-1">
  <FormPrimitive.FieldErrors
    bind:ref
    class={cn("text-destructive text-sm font-medium", className)}
    {...restProps}
  >
    {#snippet children({ errors, errorProps })}
      {#if childrenProp}
        {@render childrenProp({ errors, errorProps })}
      {:else}
        {#each errors as error (error)}
          <Alert.Root size="sm" variant="destructive">
            <AlertCircleFilled />
            <Alert.Title {...errorProps} class={cn(errorClasses)}
              >{error}</Alert.Title
            >
          </Alert.Root>
        {/each}
      {/if}
    {/snippet}
  </FormPrimitive.FieldErrors>
</div>
