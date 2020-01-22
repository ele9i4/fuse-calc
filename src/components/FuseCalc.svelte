<script>
  import SingleFuse from './SingleFuse.svelte';
  export let data = {}
  let fuseObj = [];
  let command = '';
  let messageShow = false;
  let message = "Command copied to clipboard";

  function getFuseNames () {
    return (data && data.fuses)
      ? data.fuses.reduce ((res, fuse) => {
        res[fuse.name] = parseInt (fuse.initval, 16);
        return res
      }, {})
      : {};
  }

  function singleDudeFuse (fuseName) {
    const shortFuseName = fuseName[0].toLowerCase() + 'fuse'
    const fuseValue = '0x' + fuseObj[fuseName].toString(16).padStart(2, '0');
    return `-U ${shortFuseName}:w:${fuseValue}:m`;
  }

  $: fuseObj = getFuseNames ( data );
  $: command = `avrdude.exe ${Object.keys( fuseObj ).map (singleDudeFuse).join (' ')}`;

  function handleUpdateFuse (event, fuse) {
    fuseObj[fuse.name] = event.detail.mask;
  }

  function handleCopy () {
    navigator.clipboard.writeText (command);
    messageShow = true;
    setTimeout (() => {
      messageShow = false;
    }, 600)
  }
</script>

<div class="wrapper">
  {#if data && data.name}
    <div class="name">Selected microcontroller:
      <b>
        {data.name}
      </b>
    </div>
    <div class="command">Command (click to copy):
      <pre class="command-line" on:click={handleCopy}>
        {command}
      </pre>
    </div>
    <div class="message" class:message-show={messageShow}>
      {message}
    </div>

    <div class="fuses">
      {#each data.fuses as fuse}
        <SingleFuse {fuse} on:update={(e) => handleUpdateFuse (e, fuse)}/>
      {/each}
    </div>
  {:else}
    <p>Select microcontroller</p>
  {/if}
</div>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-flow: column;
    max-width: 100%;
  }
  .fuses {
    display: flex;
  }
  .command-line {
    padding: 4px 8px;
    margin: 0;
    background: lightgray;
    cursor: pointer;
    overflow: auto;
  }
  .message {
    opacity: 0;
    transition: 0.3s;
    margin-bottom: 8px;
  }
  .message-show {
    opacity: 1;
  }
  .name {
    margin-bottom: 8px;
  }
  .fuses {
    @media (max-width: 768px) {
      flex-flow: column;
    }
  }
</style>