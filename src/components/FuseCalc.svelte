<script>
  import SingleFuse from './SingleFuse.svelte';
  export let data = {}
</script>

<div class="wrapper">
  <h2>
    Fuse calc
  </h2>
  {#if data.name}
    <div class="name">Selected uc: {data.name}</div>
    <div class="fuses">
      {#each data.fuses as fuse}
        <SingleFuse {fuse} />
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