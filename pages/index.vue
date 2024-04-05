<template>
  <article class="home">
    <section class="home__nav">
      <AppNavigation />
    </section>
    <section class="home__content">
      <h1 class="home__content-heading raleway-700">Don't Show Me That</h1>
      <p class="home__content-tag-line raleway-400">
        Control what you see instantly
      </p>
    </section>
  </article>
  <article class="home__main">
    <section class="home__main-descriptive container">
      <h2>Control What You See, Instanly</h2>
      <ul class="home__main-list">
        <li>Tired of seeing posts that you don't like?</li>
        <li>Sick of seeing NUDES IN BIO?</li>
        <li>Fed up of seeing fake news?</li>
        <li>distraught at the amount of violent content on the internet?</li>
        <li>Want to live in your own little safe, online bubble?</li>
      </ul>
    </section>
    <section class="home__main-cta">
      <div class="home__main-cta-container container">
        <h2>It sounds like you need Don't Show Me That</h2>
        <p class="home__main-cta-text">
          Sign up now to stop seeing things you don't like
        </p>

        <article class="home__main-cta-form">
          <div class="home__main-cta-form-container">
            <input
              type="email"
              id="email"
              name="email"
              class="home__main-cta-form-input"
              aria-label="Enter email here to sign up"
              placeholder="Enter email to sign up"
              required
              v-model="email"
            />
            <button class="home__main-cta-btn" @click="handleSignUp">
              Sign Up!
            </button>
          </div>
        </article>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppNavigation from "../components/AppNavigation.vue";

const email = ref<String>("");

const handleSignUp = () => {
  if (email.value === "") {
    alert("enter ya email");
    return;
  }

  alert(`Thanks for signin up , ${email.value}`);
};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

@mixin align-text($odd-align: left, $even-align: right) {
  li {
    &:nth-child(odd) {
      text-align: $odd-align;
    }

    &:nth-child(even) {
      text-align: $even-align;
    }
  }
}

.home {
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    117deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(255, 255, 255, 0.13) 100%
    ),
    url("https://images.pexels.com/photos/10617843/pexels-photo-10617843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  height: 100dvh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    color: $color-white;
    text-align: center;
    padding: 0 2rem;
    text-shadow: $text-shadow-primary;

    &-heading {
      font-size: 5.2rem;
    }

    &-tag-line {
      font-size: 2.75rem;
    }
  }

  &__main {
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-snap-align: start;

    h2 {
      text-align: center;
      font-size: 3rem;
    }

    p {
      margin-bottom: 1rem;
    }

    &-list {
      @include align-text(left, right);
      list-style: none;
      margin-bottom: 2rem;

      li {
        padding: 4rem;
        font-size: 2.5rem;
      }
    }

    section {
      scroll-snap-align: start;
    }

    &-cta {
      height: 40dvh !important;
      background-color: $dark-primary;
      color: $color-white;
      scroll-snap-align: start;
      height: 100dvh;
      padding: 2.5rem;
      text-align: center;

      &-form {
        margin-top: 5rem;
      }

      &-form-container {
        background: white;
        max-width: 80%;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 5rem;
        display: flex;
        align-items: center;
      }

      &-form-input {
        flex: 1;
        border: none;
        font-size: 1.25rem;
        margin: 0 1rem;
        padding: 1rem;
        border-radius: 2rem;
      }

      &-btn {
        background-color: $teale-primary;
        color: $light-parimary;
        padding: 1rem 1.5rem;
        border: none;
        border-radius: 2rem;
        min-width: 4rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
}
</style>
