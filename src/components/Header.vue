<template>
  <header>
    <div class="bg-black">
      <div v-visible-class="'fadeInRight'" class="py-2 container flex mx-auto">
        <div class="flex items-center ml-auto px-3">
          <i class="fab fa-facebook-square"></i>
        </div>
        <div class="flex items-center px-3">
          <i class="fab fa-instagram"></i>
        </div>
        <button class="ml-5 px-3 border-2 hover:bg-gray-800">Book an Event</button>
      </div>
    </div>
    <div class="bg-faded text-2xl font-bold uppercase absolute z-50 inset-x-0">
      <nav v-visible-class="'fadeInDown'" class="container flex mx-auto">
        <ul class="flex w-2/5">
          <li class="text-center my-auto w-1/2">Eat & Drink</li>
          <li class="text-center my-auto w-1/2">Parties & Events</li>
        </ul>
        <div class="w-1/5" style="height: 150px">Logo</div>
        <ul class="flex w-2/5">
          <li class="text-center my-auto w-1/2">Attractions</li>
          <li class="text-center my-auto w-1/2">Leagues</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.bg-faded {
  background-color: rgba(100, 150, 150, 0.5);
}
</style>
