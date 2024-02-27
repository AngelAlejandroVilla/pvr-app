<template>
  <MenuPrincipal />
  <!-- AQUI VA EL CARRUSEL -->
        <!-- Hero Start -->
            <Carrusel :selector="'home'" :slides="slides" :delay="delay" />
        <!-- Hero End -->
        <RouterView />
  <!-- End -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import Carrusel from "./components/carrusel.vue";
import MenuPrincipal from "./layouts/main-layout/header/header.vue";


export default defineComponent({
  components: {
    Carrusel,
    MenuPrincipal,
  },
  setup(){
    return{
      slides: [
        '@/assets/images/real/1.jpg',
        '@/assets/images/real/2.jpg',
        '@/assets/images/real/3.jpg',
      ],
      delay: [4000, 4000, 4000],
    };
},
});
</script>
