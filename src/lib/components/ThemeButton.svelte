<script lang="ts">
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
</script>

<button
  class="bg-light-gray dark:bg-dark-gray rounded-full px-4 py-2"
  on:click={toggleTheme}>Toggle Theme</button
>
