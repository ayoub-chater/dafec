<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useContact } from "./store/contact";

const contactStore = useContact();

onMounted(() => {
  contactStore.getToken();
  contactStore.connectToBackEnd();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>