<script>
  export let elem;
</script>

<textarea bind:this={elem} on:keyup on:focus />

<style>
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
</style>
