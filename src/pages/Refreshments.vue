<template>
  <Layout>
    <PageHero img="img/hero-refreshments.jpg">
      <div slot="title">Eat & Drink</div>
      <div slot="text">
        Come and check out our selection of food, snacks, and tap beer.
        We'll keep you full while you have fun!
      </div>
    </PageHero>
    <div class="relative mb-40">
      <background-image img="img/chips.png" />
      <page-section>
        <div slot="title">Pizza, Hotdogs, or Nachos</div>
        <div slot="text">Have a slice of pizza or a hotdog while having a friendly game of bowling.</div>
      </page-section>
      <page-section>
        <div slot="title">Tap Beers</div>
        <div slot="text">Just want a beer go for it with selection of on the tap beers.</div>
      </page-section>
      <page-section>
        <div slot="title">Snacks</div>
        <div slot="text">
          Maybe you just want something small to munch on while you play a game of pool.
          We've got your covered with a wide range of snacks available at the counter.
        </div>
      </page-section>
    </div>
  </Layout>
</template>

<script>
import PageHero from "~/components/PageHero.vue";
import BackgroundImage from "~/components/BackgroundImage.vue";
import PageSection from "~/components/PageSection.vue";
export default {
  metaInfo: {
    title: "Refreshments"
  },
  components: {
    PageHero,
    BackgroundImage,
    PageSection
  }
};
</script>
