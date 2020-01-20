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
        <input type="text" bind:value={filter}>
      </label>
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