<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import robot from "$lib/images/robot.png";
  import robot_dark from "$lib/images/robot-dark.png";
  import ToolCard from "$lib/components/ToolCard.svelte";
  import { tools } from "$lib/misc/tools";
  import type { Tool } from "$lib/models/tool";

  const featuredTools = tools.filter((tool: Tool) => tool.isFeatured);
</script>

<svelte:head>
  <title>YU Tools</title>
  <meta
    name="description"
    content="Tools for the students of Al Yamamah Unversity!"
  />
</svelte:head>

<div>
  <!-- hero section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-center mb-16 md:mb-0 min-h-screen"
  >
    <div class="text-center">
      <h1 class="text-orange font-bold text-4xl md:text-6xl">YU Tools</h1>
      <p class="text-xl md:text-2xl pb-2">
        The hammer and the drill<br />you’ve always dreamt of!
      </p>
      <Button
        text="View Tools"
        leadingIcon="bi:tools"
        onClick={() => {
          window.location.href = "/tools";
        }}
      />
    </div>
    <img class="w-96" src={robot_dark} alt="robot with glow behind it" />
  </section>

  <!-- featured tools section -->
  <section class="pb-12">
    <h1 class="text-orange font-bold text-5xl text-center mb-4">
      Featured Tools
    </h1>
    <div
      class="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-8 md:px-0 mb-4"
    >
      {#each featuredTools as featuredTool}
        <ToolCard
          imageSrc={featuredTool.imageSrc}
          imageAlt={featuredTool.imageAlt}
          title={featuredTool.title}
          description={featuredTool.description}
          githubLink={featuredTool.githubLink}
          twitterLink={featuredTool.twitterLink}
          websiteLink={featuredTool.websiteLink}
          appStoreLink={featuredTool.appStoreLink}
          googlePlayLink={featuredTool.googlePlayLink}
        />
      {/each}
    </div>
    <div class="flex flex-row justify-center">
      <Button
        text="See more"
        trailingIcon="material-symbols:arrow-right-alt-rounded"
        onClick={() => {
          window.location.href = "/tools";
        }}
      />
    </div>
  </section>
</div>
