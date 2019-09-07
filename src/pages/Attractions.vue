<template>
  <Layout>
    <PageHero img="img/hero-attractions.jpg">
      <div slot="title">Attractions</div>
      <div slot="text">
        Aqua Entertainment has so much to offer when it comes to having a great time.
        Our arcade has a fantastic selection of games everyone will love.
        Have a friendly game of pool or have a few games of bowling.
      </div>
    </PageHero>
  </Layout>
</template>

<script>
import PageHero from "~/components/PageHero.vue";
export default {
  metaInfo: {
    title: "Attractions"
  },
  components: {
    PageHero
  }
};
</script>
