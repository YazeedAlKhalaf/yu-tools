<script lang="ts">
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };
</script>

<button on:click={toggleTheme}>Toggle Theme</button>
