<template>
  <header>
    <div class="hidden md:block bg-black">
      <div v-visible-class="'fadeInRight'" class="py-2 container flex mx-auto">
        <div class="flex items-center ml-auto px-3">
          <i class="fab fa-facebook-square"></i>
        </div>
        <div class="flex items-center px-3">
          <i class="fab fa-instagram"></i>
        </div>
        <button class="ml-5 px-3 border-2 hover:bg-gray-800">Book an Event</button>
      </div>
    </div>
    <div class="bg-teal-700 bg-faded text-2xl font-bold uppercase fixed md:absolute z-50 inset-x-0">
      <div class="md:hidden text-right">
        <i @click="navOpen = !navOpen" class="cursor-pointer mr-10 my-6 text-4xl fas fa-bars"></i>
      </div>
      <nav
        :class="navOpen ? '' : 'hidden'"
        v-visible-class="'fadeInDown'"
        class="md:block container mx-auto"
      >
        <ul class="w-full pb-10 md:py-10 ml-5">
          <li class="md:text-center md:inline-block my-auto md:w-1/5">Eat & Drink</li>
          <li class="md:text-center md:inline-block my-auto md:w-1/5">Parties & Events</li>
          <li class="hidden md:text-center md:inline-block my-auto md:w-1/5">Logo</li>
          <li class="md:text-center md:inline-block my-auto md:w-1/5">Attractions</li>
          <li class="md:text-center md:inline-block my-auto md:w-1/5">Leagues</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false
    };
  }
};
</script>

<style>
@media (min-width: 768px) {
  .bg-faded {
    background-color: rgba(100, 150, 150, 0.5);
  }
}
</style>
