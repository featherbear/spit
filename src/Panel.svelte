<script>
  export let elem;
</script>

<div class="panel">
  <textarea bind:this={elem} on:keyup on:focus />
</div>

<style>
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
</style>