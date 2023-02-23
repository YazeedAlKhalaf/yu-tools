<script lang="ts">
  import Button from "./Button.svelte";

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
</script>

<Button text="Toggle Theme" onClick={toggleTheme} />
