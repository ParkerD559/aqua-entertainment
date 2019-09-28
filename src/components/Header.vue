<template>
  <header>
    <div class="hidden lg:block bg-black">
      <div class="py-2 container flex mx-auto">
        <div class="flex items-center ml-auto px-3">
          <social-icon name="facebook" icon="fab fa-facebook-square" />
        </div>
        <div class="flex items-center px-3">
          <social-icon name="instagram" icon="fab fa-instagram" />
        </div>
        <div class="flex items-center px-3">
          <social-icon name="yelp" icon="fab fa-yelp" />
        </div>
        <a target="_blank" href="https://calendly.com/aquaentertainment">
          <button class="ml-5 px-3 border-2 hover:bg-gray-800">Book an Event</button>
        </a>
      </div>
    </div>
    <div class="bg-teal-700 bg-faded text-2xl font-bold uppercase fixed lg:absolute z-50 inset-x-0">
      <div class="flex">
        <div class="w-1/4 lg:hidden"></div>
        <div class="w-1/2 lg:hidden">
          <a href="/" class="href">
            <img class="mx-auto" style="height: 80px" src="/img/logo.png" alt="Aqua Entertainment" />
          </a>
        </div>
        <div class="w-1/4 lg:hidden text-right">
          <i @click="navOpen = !navOpen" class="cursor-pointer mr-10 my-6 text-4xl fas fa-bars"></i>
        </div>
      </div>
      <nav :class="navOpen ? '' : 'hidden'" class="lg:block container mx-auto">
        <ul class="w-full ml-5 pb-10 lg:pb-0 lg:flex">
          <li class="lg:text-center my-auto lg:w-1/5">
            <a href="/refreshments" class="href">Eat & Drink</a>
          </li>
          <li class="lg:text-center my-auto lg:w-1/5">
            <a href="/events" class="href">Parties & Events</a>
          </li>
          <li class="hidden lg:text-center lg:flex my-auto lg:w-1/5">
            <a href="/" class="href mx-auto">
              <img style="height: 150px" src="/img/logo.png" alt="Aqua Entertainment" />
            </a>
          </li>
          <li class="lg:text-center my-auto lg:w-1/5">
            <a href="/attractions" class="href">Attractions</a>
          </li>
          <li class="lg:text-center my-auto lg:w-1/5">
            <a href="/leagues" class="href">Leagues</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import SocialIcon from "~/components/SocialIcon.vue";
export default {
  components: {
    SocialIcon
  },
  data() {
    return {
      navOpen: false
    };
  },
  mounted() {
    window.document.body.addEventListener(
      "click",
      () => this.maybeClose(),
      true
    );
  },
  methods: {
    maybeClose() {
      if (this.navOpen) {
        this.navOpen = false;
      }
    }
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .bg-faded {
    background-color: rgba(100, 150, 150, 0.5);
  }
}
</style>
