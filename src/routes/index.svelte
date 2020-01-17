<svelte:head>
  <title>Home</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import { Button, Checkbox } from 'fulmo/cmp';
  import AnimPage from 'components/animate-page.svelte';

  let ucData = [];
  let selected = '';

  onMount(async () => {
    const data = await fetch('/data');
    ucData = await data.json();
    selected = ucData[0].name;
  });


</script>

<AnimPage>
  {#if ucData.length}
    <select bind:value={selected}>
      {#each ucData as uc}
        <option value={uc.name} label={uc.name}>
      {/each}
    </select>
  {:else}
    <p>Loading...</p>
  {/if}
  {selected}
</AnimPage>
