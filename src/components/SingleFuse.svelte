<script>
  import BitField from './BitField.svelte';
  import BitMask from './BitMask.svelte';
  export let fuse = {};

  $: mask = parseInt(fuse.initval, 16);

  function handleBitFieldUpdate (event, maskStr) {
    const bitFieldMask = parseInt(maskStr, 16);
    mask = (mask & (~ bitFieldMask)) | event.detail.mask;
  }

  function handleBitMaskUpdate (event) {
    mask = event.detail.mask;
  }

</script>

<div class="single-fuse">
  <p>{fuse.name}: 0x{mask.toString(16).padStart(2, '0').toUpperCase()}</p>
  <BitMask {mask} fillMask={0xFF} type="fuse" on:update={handleBitMaskUpdate}/>
  {#each fuse.bitFields as bitField}
    <BitField
      {bitField}
      fuseMask={mask}
      on:update={(event) => handleBitFieldUpdate (event, bitField.mask)} />
  {/each}
</div>

<style>
  .single-fuse {
    padding: 8px;
    display: flex;
    flex-flow: column;
  }
</style>