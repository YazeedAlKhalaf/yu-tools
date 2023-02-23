<script lang="ts">
  import "./styles.css";
  import "iconify-icon";
</script>

<div class="flex flex-col min-h-screen">
  <main class="flex-1 flex flex-col p-4 max-w-5xl m-auto box-border">
    <slot />
  </main>
  <footer class="flex flex-col justify-center items-center p-3">
    <div class="flex flex-row space-x-3 justify-center items-center mt-4">
      <a
        href="https://github.com/YazeedAlKhalaf"
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="logos:github-icon" mode="mask" class="text-2xl" />
      </a>
      <a
        href="https://twitter.com/YazeedAlKhalaf"
        target="_blank"
        rel="noreferrer"
        class="hover:text-orange"
      >
        <iconify-icon icon="logos:twitter" mode="mask" class="text-2xl" />
      </a>
    </div>
    <p class="text-lg font-bold mt-1">Made with ❤️ by Yazeed AlKhalaf</p>
  </footer>
</div>
