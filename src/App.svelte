<script lang="ts">
  import Panel from "./Panel.svelte";

  let lastInput;
  let inputA;
  let inputB;
  let conversionOption;

  import conversions from "./conversions";

  function handleInputFocus({ target }) {
    if (lastInput !== target) {
      lastInput = target;
      target.placeholder = ""
    }
  }

  function handleChange() {
    if (lastInput === inputA) {
      try {
        inputB.value = conversions[conversionOption].aToB(inputA.value);
      } catch (e) {
        inputB.placeholder = e.message;
        inputB.value = "";
      }
    } else {
      try {
        inputA.value = conversions[conversionOption].bToA(inputB.value);
      } catch (e) {
        inputA.placeholder = e.message;
        inputA.value = "";
      }
    }
    // Failed to convert
  }
</script>

<div class="container">
  <header>
    <h1>Hello!</h1>
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  </header>
  <main>
    <Panel
      on:keyup={handleChange}
      bind:elem={inputA}
      on:focus={handleInputFocus}
    />
    <div class="selector">
      <select bind:value={conversionOption} on:select={handleChange}>
        {#each Object.entries(conversions) as [id, { name }]}
          <option value={id}>{name}</option>
        {/each}
      </select>
    </div>
    <Panel
      on:keyup={handleChange}
      bind:elem={inputB}
      on:focus={handleInputFocus}
    />
  </main>

  <footer>footer</footer>
</div>

<style lang="scss">
  div.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  header {
    text-align: center;
    padding: 1em;
    // max-width: 240px;
    margin: 0 auto;

    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
  }

  main {
    flex: 1;
    padding: 8px;
    display: flex;
    flex-direction: row;
  }

  //   @media (min-width: 640px) {
  //     main {
  //       max-width: none;
  //     }
  //   }
</style>
