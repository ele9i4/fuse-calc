<script>
  import BitField from './Bit_Field.svelte';
  import BitMask from './Bit_Mask.svelte';
  export let fuse = {};

</script>

<div class="single-fuse">
  <p>{fuse.name}: {fuse.initval}</p>
  {#each fuse.bitFields as bitField}
    <BitField {bitField} />
  {/each}
  <p>Current value:</p>
  <BitMask mask={fuse.initval} fillMask="0xFF" type="fuse"/>
</div>

<style>
  .single-fuse {
    display: flex;
    flex-flow: column;
  }
</style>