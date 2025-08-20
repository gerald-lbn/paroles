<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  const { icon, title, description, action }: {
    icon?: Snippet<[]>
    title: string;
    description?: string
    action?: Snippet<[]>
  } = $props()
</script>


<div class="bg-secondary flex flex-col gap-4 items-center justify-center p-4 rounded-lg h-96">
  {@render icon?.()}
  <div class="text-center">
    <h2 class="text-lg font-semibold text-foreground">{title}</h2>
    {#if description}
      <p class="text-sm text-muted-foreground">{description}</p>
    {/if}
  </div>
  {@render action?.()}
</div>