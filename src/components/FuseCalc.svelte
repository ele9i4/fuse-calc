<script>
  import SingleFuse from './SingleFuse.svelte';
  export let data = {}
  let fuseObj = [];

  function getFuseNames () {
    return (data.fuses)
      ? data.fuses.reduce ((res, fuse) => {
        res[fuse.name] = fuse.initval;
        return res
      }, {})
      : {};
  }

  $: fuseObj = getFuseNames ( data );

  function handleUpdateFuse (event) {
    console.log(event.details)
  }
</script>

<div class="wrapper">
  {#if data.name}
    <div class="name">Selected uc: {data.name}</div>
    <div class="command">List: {Object.keys(fuseObj)}</div>

    <div class="fuses">
      {#each data.fuses as fuse}
        <SingleFuse {fuse} on:update={handleUpdateFuse}/>
      {/each}
    </div>
  {:else}
    <p>Select uc</p>
  {/if}
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-flow: column;
  }
  .fuses {
    display: flex;
  }
</style>