<template>
  <MenuPrincipal />
  <!-- AQUI VA EL CARRUSEL -->
        
        <RouterView />
  <!-- End -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";

import MenuPrincipal from "./layouts/main-layout/header/header.vue";


export default defineComponent({
  components: {
    MenuPrincipal,
  },
  setup(){

},
});
</script>
