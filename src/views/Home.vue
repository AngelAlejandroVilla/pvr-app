<template>
  <section class="section">
    <Filtros />
    <!--end container-->

    <div class="container mt-20 mt-60">
      <!--end row-->

      <div class="row">
        <CustomCard
          v-for="(deps, index) in paginatedDepartamentos"
          :key="index"
          :data="deps"
          :imageSrc="deps.imagen"
          :idDep="deps.idPropiedad"
          :address="deps.Nombre"
          :huespedes="deps.Huespedes"
          :beds="deps.Recamaras"
          :baths="deps.Baños"
          price="$5000"
          rating="5.0"
        />
        <!-- Componente de paginación -->
        <Paginacion
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />

        <div class="col-12 mt-4 pt-2">
          <div class="text-center">
            <a href="property-grid.html" class="mt-3 h6 text-primary"
              >View More Properties
              <i class="uil uil-angle-right-b align-middle"></i
            ></a>
          </div>
        </div>
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!-- End -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import Filtros from "../components/filtro/filtro.vue";
import CustomCard from "../components/Cards/Card.vue";
import { apiApp } from "../core/api/apiApp.ts";
import Paginacion from "../components/Cards/Paginacion.vue";
import Carrusel from "../components/carrusel.vue";
import DetallesPropiedad from "./DetallesPropiedad.vue";

export interface Departamentos {
  idPropiedad: number;
  Compartida: number;
  Nombre: string;
  Condominio: string;
  Huespedes: number;
  Recamaras: number;
  tipo: string;
  imagen: string;
  url?: string;
  prioritaria: number;
  Estado: string;
  Zona: string;
  Domicilio: string;
  Ciudad: string;
  Descripcion: string;
  minNoches: string;
  Baños: string;
  CalendarioImportado?: string;
}

export default defineComponent({
  components: {
    Filtros,
    CustomCard,
    Paginacion,
    DetallesPropiedad,
    Carrusel,
  },

  setup() {
    const departamentos = ref<Departamentos[]>([]);
    const currentPage = ref(1);
    const pageSize = 12;
    const propiedadSeleccionada = ref<Departamentos | null>(null);

    const refreshInfo = async () => {
      await apiApp.get("propiedades").then((response) => {
        departamentos.value = response.data;
        console.log(departamentos.value);
      });
    };

    onMounted(() => {
      refreshInfo();
    });

    const handlePageChange = (page: number) => {
      currentPage.value = page;
    };

    const totalPages = computed(() => {
      console.log(departamentos.value.length);
      console.log(pageSize);
      return Math.ceil(departamentos.value.length / pageSize);
    });

    const paginatedDepartamentos = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return departamentos.value.slice(startIndex, endIndex);
    });

    const mostrarDetalles = (propiedad: Departamentos) => {
      propiedadSeleccionada.value = propiedad; // Guarda los detalles de la propiedad seleccionada
    };

    return {
      departamentos,
      currentPage,
      pageSize,
      totalPages,
      paginatedDepartamentos,
      handlePageChange,
      mostrarDetalles,
      propiedadSeleccionada,
    };
  },
});
</script>
