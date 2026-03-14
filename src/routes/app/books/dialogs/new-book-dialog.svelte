<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import * as Dialog from "$lib/components/ui/dialog/index";

  let open = $derived($page.url.searchParams.get("dialog") == "new-book");

  function closeDialog() {
    const url = new URL($page.url);
    url.searchParams.delete("dialog");
    goto(url.toString(), { replaceState: true, keepFocus: true, noScroll: true });
  }
</script>

<Dialog.Root {open} onOpenChange={closeDialog}>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Adicionar livro</Dialog.Title>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>

