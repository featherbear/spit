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
      target.placeholder = "";
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
  }
</script>

<div class="container">
  <header>
    <h1>Spit</h1>
    <p>
      Select a conversion to perform below, then enter the data into either text
      field
    </p>
  </header>
  <main>
    <Panel
      on:keyup={handleChange}
      bind:elem={inputA}
      on:focus={handleInputFocus}
    />
    <div class="selector">
      <p><b>Conversion Type</b></p>
      <!-- svelte-ignore a11y-no-onchange -->
      <select bind:value={conversionOption} on:change={handleChange}>
        {#each Object.entries(conversions) as [id, { aName, bName }]}
          <option value={id}>{aName} to {bName}</option>
        {/each}
      </select>
    </div>
    <Panel
      on:keyup={handleChange}
      bind:elem={inputB}
      on:focus={handleInputFocus}
    />
  </main>

  <footer>
    <a href="https://github.com/featherbear/spit">GitHub</a> |
    <a href="https://featherbear.cc/">Andrew Wong</a>
  </footer>
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

    > :global(*) {
      flex: 1;
      text-align: center;
    }

    > .selector {
      max-width: 20%;
    }
  }

  footer {
    background-color: #ff8a62;
    padding: 4px;
    color: white;
    user-select: none;
    text-align: center;
  }
  //   @media (min-width: 640px) {
  //     main {
  //       max-width: none;
  //     }
  //   }
</style>
