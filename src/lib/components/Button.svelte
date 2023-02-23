<script lang="ts">
  export let text: string;
  export let onClick: () => void;
  export let leadingIcon: string = "";
  export let trailingIcon: string = "";
</script>

<button
  class="bg-light-gray dark:bg-dark-gray hover:bg-dark-gray hover:text-white dark:hover:bg-light-gray dark:hover:text-black rounded-lg px-4 pt-2"
  on:click={onClick}
>
  <div class="flex flex-row gap-2 items-center">
    {#if leadingIcon != ""}
      <iconify-icon icon={leadingIcon} mode="mask" class="text-xl mb-2" />
    {/if}
    <p class="text-xl font-medium">{text}</p>
    {#if trailingIcon != ""}
      <iconify-icon icon={trailingIcon} mode="mask" class="text-xl mb-1" />
    {/if}
  </div>
</button>
