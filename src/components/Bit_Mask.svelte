<script>
  export let mask;
  export let fillMask;
  export let type;
  $: bits = parseInt(mask, 16);
  $: fillBits = parseInt(fillMask, 16);
</script>

<div
  class="bitmask"
  class:bitfield={type === 'bitfield'}
  class:fuse={type === 'fuse'}
  >
  {#each Array(8) as _, i}
    <div
      class="bit"
      class:active={bits & (1 << (7 - i))}
      class:fill={fillBits & (1 << (7 - i))}
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