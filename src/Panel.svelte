<script>
  export let elem;
</script>

<textarea bind:this={elem} on:keyup on:focus />

<style lang="scss">
  textarea {
    resize: none;
    width: 100%;
    height: 100%;

    &:focus {
      outline: none !important;
      border: 1px solid var(--accent);
      box-shadow: 0 0 5px var(--accent2);
    }
  }
</style>
