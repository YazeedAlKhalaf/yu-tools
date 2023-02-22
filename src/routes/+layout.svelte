<script lang="ts">
  import "./styles.css";
</script>

<div class="flex flex-col min-h-screen">
  <main class="flex-1 flex flex-col p-4 w-full max-w-5xl m-auto box-border">
    <slot />
  </main>
  <footer class="flex flex-col justify-center items-center p-3">
    <p>Made with ❤️ by Yazeed AlKhalaf</p>
  </footer>
</div>
