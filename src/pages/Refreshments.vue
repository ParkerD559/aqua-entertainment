<template>
  <Layout>
    <PageHero class="_refreshments-hero">
      <div slot="title">Eat & Drink</div>
      <div slot="text">
        Come and check out our selection of food, snacks, and tap beer.
        We'll keep you full while you have fun!
      </div>
    </PageHero>
  </Layout>
</template>

<script>
import PageHero from "~/components/PageHero.vue";
export default {
  metaInfo: {
    title: "Refreshments"
  },
  components: {
    PageHero
  }
};
</script>
