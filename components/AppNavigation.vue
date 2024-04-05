<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list-item raleway-400">Home</li>
      <li class="navigation__list-item raleway-400">About</li>
      <li class="navigation__list-item raleway-400">Sign Up / Sign In</li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.navigation {
  &__list {
    list-style: none;
    margin: 0;
    display: flex;
    flex: 1 0 100%;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__list-item {
    padding: 1rem;
    font-size: 1.2rem;
    color: $light-parimary;
  }
}
</style>
