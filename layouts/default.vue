<!--  default.vue means it will be used for all pages on the site -->
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
  </nav>
  <main>
    <!--  Add the slot whereever we want the content to appear -->
    <slot />
  </main>
</template>
