<script>
  import BitMask from './BitMask.svelte';
  export let bitField;
  export let fuseMask;

  function findShift () {
    for (let i = 0; i < 8; i++) {
      if (fillMask & (1 << i)) return i;
    }
    return 0;
  }

  $: fillMask = parseInt(bitField.mask, 16);
  $: mask = fuseMask & bitField.mask;
  $: shift = findShift(fillMask);
</script>

<div>
  <p>{bitField.name}</p>
  <BitMask {mask} {fillMask} type="bitfield" on:update />
  {#if bitField.valueLabel}
    {(bitField.valuesArray.values.find (({value}) => {
      return (( parseInt(value, 16) << shift) === mask);
    }) || {name: 'Unused bits combination'}).name}
  {/if}
</div>

<style>
  p {
    margin-bottom: 0;
  }
</style>