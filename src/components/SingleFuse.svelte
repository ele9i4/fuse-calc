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
  <div class="divider" />
  {#each fuse.bitFields as bitField}
    <BitField
      {bitField}
      fuseMask={mask}
      on:update={(event) => handleBitFieldUpdate (event, bitField.mask)} />
  {/each}
</div>

<style>
  .single-fuse {
    padding: 8px 8px 16px;
    display: flex;
    flex-flow: column;
    min-width: 280px;
    width: 100%;
    margin-bottom: 16px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: 767px) {
      width: calc(33.333% - 32px);
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .fuse-name {
    margin-bottom: 6px;
    padding: 2px 8px;
    background: rgba(0, 0, 0, 0.10);
    border-radius: 4px;
  }
  .divider {
    margin-top: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
</style>