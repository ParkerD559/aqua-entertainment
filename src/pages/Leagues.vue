<template>
  <Layout>
    <PageHero class="_leagues-hero">
      <div slot="title">Leagues</div>
      <div slot="text">
        Want a bowling league of your own or join one of ours.
        Now you can with our Los Banos Bowling Leagues.
      </div>
    </PageHero>
  </Layout>
</template>

<script>
import PageHero from "~/components/PageHero.vue";
export default {
  metaInfo: {
    title: "Leagues"
  },
  components: {
    PageHero
  }
};
</script>
