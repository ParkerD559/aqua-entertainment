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
    <div class="relative mb-32">
      <background-image img="img/pool.png" />
      <page-section>
        <div slot="title">Arcade Machines</div>
        <div slot="text">
          Play one of our latest interactive machines or play a fun game of air hockey.
          We have something for everyone.
        </div>
      </page-section>
      <page-section>
        <div slot="title">Billiards</div>
        <div slot="text">
          Compete with your friends in a game of pool.
          Or maybe meet a few new people over a friendly game.
        </div>
      </page-section>
      <page-section>
        <div slot="title">Bowling</div>
        <div slot="text">
          As the cornerstone of Aqua Entertainment our bowling alleys are clean and oiled routinely.
          Have a game with friends or join a league.
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
    title: "Attractions"
  },
  components: {
    PageHero,
    BackgroundImage,
    PageSection
  }
};
</script>
