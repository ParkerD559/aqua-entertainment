<template>
  <Layout>
    <PageHero img="img/hero-events.jpg">
      <div slot="title">Parties & Events</div>
      <div slot="text">
        Have your next party at Aqua Entertainment. We have so much to enjoy.
        From bowling to arcade games. We have something for everyone.
      </div>
    </PageHero>
    <div class="relative pb-32 mb-10">
      <background-image img="img/chairs.jpg" />
      <page-section>
        <div slot="title">Give Us a Call</div>
        <div slot="text">(209) 710-4988</div>
      </page-section>
      <page-section>
        <div slot="title">Location</div>
        <div slot="text">923 W Pacheco Blvd, Los Banos, CA 93635</div>
      </page-section>
      <page-section>
        <div slot="title">Make a Reservation</div>
        <div slot="text">Give us a call and reserve our party room.</div>
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
    title: "Events"
  },
  components: {
    PageHero,
    BackgroundImage,
    PageSection
  }
};
</script>
