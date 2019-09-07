<template>
  <div class="relative z-10 text-center px-10 pt-20 lg:pt-32 lg:max-w-6xl m-auto">
    <div class="text-4xl sm:text-5xl lg:text-7xl font-black pb-2">
      <slot name="title"></slot>
    </div>
    <div class="text-lg sm:text-2xl lg:text-4xl">
      <slot name="text"></slot>
    </div>
  </div>
</template>
