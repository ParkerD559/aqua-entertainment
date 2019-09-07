<template>
  <div>
    <div class="_top-foot text-center pb-24 pt-10">
      <div class="text-3xl md:text-6xl font-black">Keep in Touch</div>
      <div
        class="p-5"
      >Give us an email and we can keep you up to date with all Aqua Entertainment has to offer!</div>
      <div class="flex">
        <input class="text-black px-2 w-1/2 ml-auto max-w-xs" type="text" placeholder="Email" />
        <button class="block mr-auto px-4 py-1 bg-blue-500">Subscribe</button>
      </div>
    </div>
    <div class="_bottom-foot py-10">
      <div class="flex text-3xl">
        <div class="flex items-center ml-auto px-3">
          <social-icon name="facebook" icon="fab fa-facebook-square" />
        </div>
        <div class="flex items-center px-3">
          <social-icon name="instagram" icon="fab fa-instagram" />
        </div>
        <div class="flex items-center mr-auto px-3">
          <social-icon name="yelp" icon="fab fa-yelp" />
        </div>
      </div>
      <div class="text-xs text-center pt-10">Copyright Aqua Entertainment 2019 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "~/components/SocialIcon.vue";
export default {
  components: {
    SocialIcon
  }
};
</script>

<style>
._top-foot {
  background: #4c6879;
  border-color: #afeaff;
  border-width: 10px 0;
}
._bottom-foot {
  background: #1e3653;
}
</style>