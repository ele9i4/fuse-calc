<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let mask;
  export let fillMask;
  export let type;

  function handleClick (bit) {
    const bitMask = (1 << (7 - bit));
    if (bitMask & fillMask) {
      mask ^= bitMask;
      dispatch ('update', { mask });
    }
  }
</script>

<div
  class="bitmask"
  class:bitfield={type === 'bitfield'}
  class:fuse={type === 'fuse'}
  >
  {#each Array(8) as _, i}
    <div
      on:click={() => handleClick(i)}
      class="bit"
      class:active={mask & (1 << (7 - i))}
      class:fill={fillMask & (1 << (7 - i))}
    />
  {/each}
</div>

<style>
  .bitmask {
    display: flex;
  }
  .bit {
    width: 10px;
    height: 10px;
    margin-right: 2px;
    border: 1px solid blue;
    background: lightgray;
  }
  .bitfield .active {
    background: blue;
  }
  .fill {
    background: lightgreen;
  }
  .fuse .active {
    background: blue;
  }
</style>