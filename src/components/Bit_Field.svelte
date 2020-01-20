<script>
  import BitMask from './Bit_Mask.svelte';
  export let bitField;
</script>

<div>
  <p>{bitField.name}</p>
  <BitMask mask={0x00} fillMask={bitField.mask} type="bitfield" />
</div>