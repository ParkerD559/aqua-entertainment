<template>
  <Layout>
    <PageHero img="img/hero-events.jpg">
      <div slot="title">Parties & Events</div>
      <div slot="text">
        Have your next party at Aqua Entertainment. We have so much to enjoy.
        From bowling to arcade games. We have something for everyone.
      </div>
    </PageHero>
  </Layout>
</template>

<script>
import PageHero from "~/components/PageHero.vue";
export default {
  metaInfo: {
    title: "Events"
  },
  components: {
    PageHero
  }
};
</script>
