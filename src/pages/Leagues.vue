<template>
  <Layout>
    <PageHero img="img/hero-leagues.jpg">
      <div slot="title">Leagues</div>
      <div slot="text">
        Want a bowling league of your own or join one of ours.
        Now you can with our Los Banos Bowling Leagues.
      </div>
    </PageHero>
    <div class="relative pb-40 mb-10">
      <background-image img="img/bowling-ball.jpg" />
      <page-section>
        <div slot="title">Contact Chris for a League</div>
        <div slot="text">
          (209) 675-1536
          <br />canddpugs@sbcglobal.net
        </div>
      </page-section>
      <page-section>
        <div slot="title">Location</div>
        <div slot="text">923 W Pacheco Blvd, Los Banos, CA 93635</div>
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
    title: "Leagues"
  },
  components: {
    PageHero,
    BackgroundImage,
    PageSection
  }
};
</script>
