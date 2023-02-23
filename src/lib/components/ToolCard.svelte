<script lang="ts">
  import "iconify-icon";

  export let imageSrc: string;
  export let imageAlt: string;
  export let title: string;
  export let description: string;
  export let gituhbLink: string = "";
  export let twitterLink: string = "";
  export let websiteLink: string = "";
  export let appStoreLink: string = "";
  export let googlePlayLink: string = "";
</script>

<div class="bg-light-gray dark:bg-dark-gray rounded-2xl flex-1">
  <img class="rounded-t-2xl" src={imageSrc} alt={imageAlt} />
  <h3 class="font-medium text-2xl text-center mt-4 px-3">{title}</h3>
  <p class="text-lg text-center px-3">{description}</p>
  <div class="flex flex-row space-x-3 justify-center items-center mt-4">
    {#if gituhbLink != ""}
      <a
        href={gituhbLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="logos:github-icon" mode="mask" class="text-2xl" />
      </a>
    {/if}
    {#if twitterLink != ""}
      <a
        href={twitterLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="logos:twitter" mode="mask" class="text-2xl" />
      </a>
    {/if}
    {#if websiteLink != ""}
      <a
        href={websiteLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="ph:globe" mode="mask" class="text-3xl" />
      </a>
    {/if}
    {#if appStoreLink != ""}
      <a
        href={appStoreLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon
          icon="basil:app-store-solid"
          mode="mask"
          class="text-3xl"
        />
      </a>
    {/if}
    {#if googlePlayLink != ""}
      <a
        href={googlePlayLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="mdi:google-play" mode="mask" class="text-3xl" />
      </a>
    {/if}
  </div>
</div>
