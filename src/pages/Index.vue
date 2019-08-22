<template>
  <Layout>
    <section class="relative">
      <img src="/img/hero.jpg" alt="Hero" />
      <div class="bg-black absolute inset-0 opacity-25"></div>
      <div class="section-1 absolute border w-full">
        <div
          class="py-5 w-1/2 m-auto text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black italic uppercase"
        >
          We are more
          <br />than just
          <br />
          <span class="text-teal-400">bowling</span>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.section-1 {
  top: 35%;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

img {
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
}
</style>
