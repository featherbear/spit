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
    if (!lastInput) return;

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
    <div class="panel">
      <h6>{conversionOption && conversions[conversionOption].aName}</h6>
      <Panel
        on:keyup={handleChange}
        bind:elem={inputA}
        on:focus={handleInputFocus}
      />
    </div>
    <div class="selector">
      <h6>Conversion Type</h6>
      <!-- svelte-ignore a11y-no-onchange -->
      <select bind:value={conversionOption} on:change={handleChange}>
        {#each Object.entries(conversions) as [id, { aName, bName }]}
          <option value={id}>{aName} - {bName}</option>
        {/each}
      </select>
    </div>
    <div class="panel">
      <h6>{conversionOption && conversions[conversionOption].bName}</h6>
      <Panel
        on:keyup={handleChange}
        bind:elem={inputB}
        on:focus={handleInputFocus}
      />
      <div />
    </div>
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
      font-size: 3em;
      font-weight: 100;
    }

    p {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

  main {
    flex: 1;
    padding: 8px;
    display: flex;
    flex-direction: row;

    h6 {
      font-size: 1em;
      margin: 5px 0;
    }

    > :global(*) {
      flex: 1;
      text-align: center;
      height: 100%;
    }

    > .panel {
      display: flex;
      flex-direction: column;
    }

    > .selector {
      max-width: 20%;

      > select {
        text-align: center;
        max-width: calc(100% - 20px);
      }
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
