<script>
  export let elem;
</script>

<div class="panel">
  <textarea bind:this={elem} on:keyup on:focus />
</div>
