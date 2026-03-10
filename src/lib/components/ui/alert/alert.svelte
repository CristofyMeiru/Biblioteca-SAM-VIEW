<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const alertVariants = tv({
		base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-xs border text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
		variants: {
			variant: {
				default: "bg-card text-card-foreground",
				destructive:
					"text-white bg-destructive border-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current",
			},
			size: {
				default: "px-4 py-3",
				sm: "px-4 py-1"
			}
		},
		defaultVariants: {
			variant: "default",
			size: 'default'
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
	export type AlertSize = VariantProps<typeof alertVariants>["size"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
		size?: AlertSize;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	role="alert"
	class={cn(alertVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
