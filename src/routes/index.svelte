<svelte:head>
  <title>Home</title>
</svelte:head>

<script context="module">
  export async function preload() {
    const ucList = await this.fetch('list.json').then(r => r.json());
    return { ucList };
  }
</script>
<script>
  import { onMount } from 'svelte';
  import AnimPage from 'components/AnimatePage.svelte';
  import { Button, Checkbox } from 'fulmo/cmp';
  import FuseCalc from 'components/FuseCalc.svelte';
  import { fullData, ucListStore } from 'store/store';

  export let ucList = [];


  $: $ucListStore = ucList;
  let filter = '';
  let selected = $ucListStore[0];
  let ucData = {};
  let filteredList = [];

  onMount (async () => {
    $fullData = await fetch('data.json').then(r => r.json());
  });

  function filterList () {
    filteredList = $ucListStore
      .filter ((uc) => filter
        .split (' ')
        .every ((filterEl) => uc.includes (filterEl))
      )
    if (!filteredList.includes(selected)) {
      selected = filteredList[0];
      changeUc ();
    }
  }

  function changeUc () {
    ucData = $fullData.find (({ name }) => name === selected);
  }

  $: changeUc (selected, $fullData);
  $: filterList ($ucListStore, filter);
</script>

<AnimPage>
  <div class="wrapper">
    <div class="inputs">
      <label>
        Filter:
      </label>
      <input type="text" bind:value={filter}>
      <br>
      {#if filteredList.length}
        <select bind:value={selected}>
          {#each filteredList as uc (uc)}
            <option value={uc} label={uc}>
          {/each}
        </select>
      {:else if $ucListStore.length}
        <p>No find elements</p>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
    <div class="divider" />
    <FuseCalc data={ucData} />
  </div>
</AnimPage>

<style lang="postcss">
  .wrapper {
    display: flex;
    height: auto;
    max-height: 100%;
    width: 100%;
    overflow: auto;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
    padding: 16px;
    @media (max-width: 768px) {
      justify-content: flex-start;
      flex-flow: column;
    }
  }
  .divider {
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 16px;
    @media (min-width: 767px) {
      border: none;
      width: 32px;
    }
  }
  .inputs {
    display: block;
    margin-bottom: 16px;
  }
  input {
    width: 100%;
    margin-bottom: 8px;
    font-size: 1.2em;
    padding: 4px;
  }
  select {
    width: 100%;
    font-size: 1.2em;
    padding: 4px;
  }
</style>