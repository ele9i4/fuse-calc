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
  let selected = ucList[0];
  let ucData = {};
  let fullData = [];

  onMount (() => {
    loadData();
  });

  async function loadData () {
    const data = await fetch('data.json');
    fullData = await data.json();
  }

  $: ucData = fullData.find (({ name }) => name === selected);
</script>

<AnimPage>
  {#if ucList.length}
    <select bind:value={selected}>
      {#each ucList as uc}
        <option value={uc} label={uc}>
      {/each}
    </select>
  {:else}
    <p>Loading...</p>
  {/if}

  <FuseCalc data={ucData} />
</AnimPage>
