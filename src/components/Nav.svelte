
<script>
  import NavLink from 'UI/NavLink.svelte';

  export let segment;

  let menuVisible = false;
  $: menuVisible = (segment, false);

  function profileMenuClose() {
    menuVisible = false;
  }

  function profileMenuOpen() {
    menuVisible = true;
  }

  const links = [
    {
      href: '.',
      name: 'Home',
    },
    {
      href: 'about',
      name: 'About',
    },
  ];
</script>

<nav class="nav">
  <ul class="nav__list">
    {#each links as link}
    <li class="nav__item">
      <NavLink
        selected={(segment === link.href) || (!segment && link.href === '.' )}
        href={link.href}
        name={link.name}
      />
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  .nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__list {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__item {
      margin: 0;
      padding: 0;
      display: block;
    }
  }
</style>
