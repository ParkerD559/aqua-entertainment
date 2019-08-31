<template>
  <Layout>
    <section class="_hero _index-hero relative bg-cover h-screen w-screen mb-10">
      <div class="bg-black absolute z-0 inset-0 opacity-50"></div>
      <div class="relative z-10 pt-40 lg:pt-64">
        <div class="_title-text text-5xl sm:text-6xl md:text-8xl border w-full">
          <div class="pl-3 sm:w-500px md:w-700px py-5 m-auto font-black italic uppercase">
            We are more
            <br />than just
            <br />
            <span class="text-teal-400">bowling</span>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full border-t-2 lg:hidden _mobile-book-event">
        <div class="flex text-3xl my-6 sm:my-10">
          <div class="flex items-center ml-auto px-3">
            <i class="fab fa-facebook-square"></i>
          </div>
          <div class="flex items-center mr-auto px-3">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <button class="block m-auto text-3xl border-2 px-8 py-2 mb-6 sm:mb-10">Book an Event</button>
      </div>
    </section>
    <IndexSection
      img="/img/parties.jpg"
      title="Parties & Events"
      text="Parties at Aqua Entertainment are more than just a party. We are here to provide memories that last a lifetime. Come and book your next event with us!"
      learn="/events"
    />
    <IndexSection
      img="/img/food.jpg"
      title="Food & Drink"
      text="Come and enjoy a craft beer and a pizza while you bowl. We have a great selection of food options that will satisfy anybody's cravings."
      learn="/refreshments"
    />
    <IndexSection
      img="/img/attractions.jpg"
      title="Attractions"
      text="Aqua Entertainment is more than just a bowling alley. We are a full blown entertainment center. Enjoy yourself at our arcade center or hang out at the bar and have a game of pool with your buds."
      learn="/attractions"
    />
    <IndexSection
      img="/img/leagues.jpg"
      title="Leagues"
      text="Ever wanted to be part of your very own bowling league? Now you can with the Los Banos Bowling Leagues. Have a blast competing with other leagues and fight for glory while having a blast!"
      learn="/leagues"
    />
  </Layout>
</template>

<script>
import IndexSection from "~/components/IndexSection.vue";
export default {
  metaInfo: {
    title: ""
  },
  components: {
    IndexSection
  }
};
</script>
