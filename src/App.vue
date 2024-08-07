<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useContact } from "./store/contact";

const contactStore = useContact();

onMounted(async () => {
  await contactStore.connectToBackEnd();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>