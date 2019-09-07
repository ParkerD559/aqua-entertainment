<template>
  <section class="_hero relative bg-cover h-screen w-full mb-10">
    <background-image :img="img" />
    <div class="_hero-container text-center container px-10">
      <div class="text-4xl sm:text-7xl lg:text-10xl font-bold uppercase">
        <slot name="title" />
      </div>
      <div class="text-lg sm:text-2xl lg:text-4xl mt-8">
        <slot name="text" />
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundImage from "~/components/BackgroundImage.vue";
export default {
  props: ["img"],
  components: {
    BackgroundImage
  }
};
</script>
