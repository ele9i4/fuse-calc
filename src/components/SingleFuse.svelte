<script>
  import { createEventDispatcher } from 'svelte';
  import BitField from './BitField.svelte';
  import BitMask from './BitMask.svelte';
  const dispatch = createEventDispatcher();

  export let fuse = {};

  $: mask = parseInt(fuse.initval, 16);

  function handleBitFieldUpdate (event, maskStr) {
    const bitFieldMask = parseInt(maskStr, 16);
    mask = (mask & (~ bitFieldMask)) | event.detail.mask;
    dispatch ('update', { mask });
  }

  function handleBitMaskUpdate (event) {
    mask = event.detail.mask;
    dispatch ('update', { mask });
  }

</script>

<div class="single-fuse">
  <div class="fuse-name">
    <b>{fuse.name}:</b> 0x{mask.toString(16).padStart(2, '0').toUpperCase()}
  </div>
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
    width: 100%;
    margin-bottom: 16px;
  }
  .fuse-name {
    margin-bottom: 4px;
  }
</style>