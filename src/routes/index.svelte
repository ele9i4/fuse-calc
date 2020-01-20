<svelte:head>
  <title>Home</title>
</svelte:head>

<script context="module">
  export async function preload() {
    const data = await this.fetch('list.json');
    const ucList = await data.json();
    return { ucList };
  }
</script>
<script>
  import { onMount } from 'svelte';
  import { Button, Checkbox } from 'fulmo/cmp';
  import AnimPage from 'components/AnimatePage.svelte';
  import FuseCalc from 'components/FuseCalc.svelte';

  export let ucList = [];
  let filter = '';
  let selected = ucList[0];
  let ucData = {};
  let fullData = [];
  let filteredList = [];

  onMount (() => {
    loadData();
  });

  async function loadData () {
    const data = await fetch('data.json');
    fullData = await data.json();
  }

  function filterList () {
    filteredList = ucList
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
    ucData = fullData.find (({ name }) => name === selected);
  }

  $: changeUc (selected, fullData);
  $: filterList (ucList, filter);
</script>

<AnimPage>
  <div class="wrapper">
    <div class="inputs">
      <label>
        Filter:
        <input type="text" bind:value={filter}>
      </label>
      <br>
      {#if filteredList.length}
        <select bind:value={selected}>
          {#each filteredList as uc (uc)}
            <option value={uc} label={uc}>
          {/each}
        </select>
      {:else if ucList.length}
        <p>No find elements</p>
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
    <FuseCalc data={ucData} />
  </div>
</AnimPage>

<style>
  .wrapper {
    display: flex;
  }
  .inputs {
    display: block;
  }
</style>