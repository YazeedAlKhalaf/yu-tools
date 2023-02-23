<script lang="ts">
  import ToolCard from "$lib/components/ToolCard.svelte";
  import { tools } from "$lib/misc/tools";
</script>

<h1 class="text-center text-orange text-4xl md:text-6xl font-bold">Tools</h1>
<div class="grid grid-flow-row grid-cols-2 gap-4">
  {#each tools as tool}
    <ToolCard
      imageSrc={tool.imageSrc}
      imageAlt={tool.imageAlt}
      title={tool.title}
      description={tool.description}
      githubLink={tool.githubLink}
      twitterLink={tool.twitterLink}
      websiteLink={tool.websiteLink}
      appStoreLink={tool.appStoreLink}
      googlePlayLink={tool.googlePlayLink}
    />
  {/each}
</div>
