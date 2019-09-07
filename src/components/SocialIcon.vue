<template>
  <a target="_blank" :href="$socialLinks[name]">
    <i :class="icon"></i>
  </a>
</template>

<script>
export default {
  props: ["icon", "name"]
};
</script>
