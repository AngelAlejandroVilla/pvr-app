<template>
          <section class="section">
          <Filtros/>
            <div class="container mt-100 mt-60">
                  <div class="row justify-content-center">
                      <div class="col-12">
                          <div class="section-title mb-4 pb-2 text-center">
                              <span class="badge rounded-pill bg-soft-primary">Process</span>
                              <h4 class="title mt-3 mb-4">How it work</h4>
                              <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          </div>
                      </div><!--end col-->
                  </div><!--end row-->
  
                  <div class="row">
                      <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                          <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                              <div class="icons text-center mx-auto">
                                  <i class="uil uil-map-marker-plus rounded h3 mb-0"></i>
                              </div>
  
                              <div class="card-body p-0 mt-4">
                                  <a href="javascript:void(0)" class="title h5 text-dark">Map Search</a>
                                  <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                  <div class="mt-2">
                                      <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div><!--end col-->
  
                      <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                          <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                              <div class="icons text-center mx-auto">
                                  <i class="uil uil-estate rounded h3 mb-0"></i>
                              </div>
  
                              <div class="card-body p-0 mt-4">
                                  <a href="javascript:void(0)" class="title h5 text-dark">Property Lookup</a>
                                  <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                  <div class="mt-2">
                                      <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div><!--end col-->
  
                      <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                          <div class="card border-0 text-center features feature-primary feature-clean rounded p-4">
                              <div class="icons text-center mx-auto">
                                  <i class="uil uil-house-user rounded h3 mb-0"></i>
                              </div>
  
                              <div class="card-body p-0 mt-4">
                                  <a href="javascript:void(0)" class="title h5 text-dark">Buy / Sell Property</a>
                                  <p class="text-muted mt-3 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                  <div class="mt-2">
                                      <a href="javascript:void(0)" class="text-primary">Read More <i data-feather="arrow-right" class="fea icon-sm"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div><!--end col-->
                  </div><!--end row-->
              </div><!--end container-->
  
              <div class="container mt-100 mt-60">
                  <div class="row justify-content-center">
                      <div class="col-12">
                          <div class="section-title mb-4 pb-2 text-center">
                              <span class="badge rounded-pill bg-soft-primary">Featured Items</span>
                              <h4 class="title mt-3 mb-4">Latest Property</h4>
                              <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary fw-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                          </div>
                      </div><!--end col-->
                  </div><!--end row-->
  
                  <div class="row">
                      <CustomCard
                          v-for="(deps, index) in paginatedDepartamentos"
                          :key="index"
                          :data="deps"
                          imageSrc="../../assets/images/real/property/1.jpg"
                          link="property-detail.html"
                          :address="deps.Nombre"
                          area="8000sqf"
                          :beds="deps.Recamaras"
                          :baths="deps.Baños"
                          price="$5000"
                          rating="5.0"
                          reviews="30"
                      />
                       <!-- Componente de paginación -->
                      <Paginacion :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange"/>
                      
                     <!-- Componente de detalles de la propiedad -->
                     <DetallesPropiedad v-if="propiedadSeleccionada" :propiedad="propiedadSeleccionada" @cerrar="propiedadSeleccionada = null" />

                      <div class="col-12 mt-4 pt-2">
                          <div class="text-center">
                              <a href="property-grid.html" class="mt-3 h6 text-primary">View More Properties <i class="uil uil-angle-right-b align-middle"></i></a>
                          </div>
                      </div>
                  </div><!--end row-->
              </div><!--end container-->
  
  
          </section>
    <!-- End -->
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref, computed } from "vue";
  import Filtros from "../components/filtro/filtro.vue";
  import CustomCard from '../components/Cards/Card.vue';
  import {apiApp} from '../core/api/apiApp.ts'
  import Paginacion from "../components/Cards/Paginacion.vue"
  import DetallesPropiedad from "./DetallesPropiedad.vue";
  
  export interface Departamentos {
    idPropiedad: number
    Compartida: number
    Nombre: string
    Condominio: string
    Huespedes: number
    Recamaras: number
    tipo: string
    imagen: string
    url?: string
    prioritaria: number
    Estado: string
    Zona: string
    Domicilio: string
    Ciudad: string
    Descripcion: string
    minNoches: string
    Baños: string
    CalendarioImportado?: string
  }
  
  export default defineComponent({
    components: {
      Filtros,
      CustomCard,
      Paginacion,
      DetallesPropiedad,
    },
    
    setup() {
      const departamentos = ref<Departamentos[]>([])
      const currentPage = ref(1);
      const pageSize = 9;
      const propiedadSeleccionada = ref<Departamentos | null>(null);
  
      const refreshInfo = async() => {
          await apiApp.get("propiedades").then((response) => {
              departamentos.value= response.data;
              console.log(departamentos.value)
          });
      }
  
      onMounted(() => {
          refreshInfo()
      })
      
      const handlePageChange = (page: number) => {
        currentPage.value = page;
      };
  
      const totalPages = computed(() => {
          console.log(departamentos.value.length)
          console.log(pageSize)
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
  