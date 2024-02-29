<template>
  <section class="bg-top-74 d-table w-100">
    <div class="container-fluid">
      <div v-if="loading" class="row">
        <div class="col-lg-6 p-1">
          <div
            class="work-container work-primary work-modern position-relative d-block overflow-hidden rounded"
          >
            <img
              :src="'http://pvrproperties.ai/imagenes/' + fotos[1].Fotografia"
              class="img-fluid rounded shadow"
              alt=""
            />
            <div class="overlay-work"></div>
            <div class="icons text-center">
              <a
                :href="
                  'http://pvrproperties.ai/imagenes/' + fotos[1].Fotografia
                "
                class="work-icon bg-white d-inline-flex rounded-pill lightbox"
                ><i data-feather="camera" class="fea icon-sm image-icon"></i
              ></a>
            </div>
          </div>
        </div>
        <!--end col-->

        <div v-if="loading" class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-12 p-1">
                  <div
                    class="work-container work-primary work-modern position-relative d-block overflow-hidden rounded"
                  >
                    <img
                      :src="
                        'http://pvrproperties.ai/imagenes/' +
                        fotos[2].Fotografia
                      "
                      class="img-fluid rounded shadow"
                      alt=""
                    />
                    <div class="overlay-work"></div>
                    <div class="icons text-center">
                      <a
                        href="../assets/images/real/property/single/2.jpg"
                        class="work-icon bg-white d-inline-flex rounded-pill lightbox"
                        ><i
                          data-feather="camera"
                          class="fea icon-sm image-icon"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12 p-1">
                  <div
                    class="work-container work-primary work-modern position-relative d-block overflow-hidden rounded"
                  >
                    <img
                      :src="
                        'http://pvrproperties.ai/imagenes/' +
                        fotos[3].Fotografia
                      "
                      class="img-fluid rounded shadow"
                      style="width: 100%; height: 200px"
                      alt=""
                    />
                    <div class="overlay-work"></div>
                    <div class="icons text-center">
                      <a
                        href="../assets/images/real/property/single/3.jpg"
                        class="work-icon bg-white d-inline-flex rounded-pill lightbox"
                        ><i
                          data-feather="camera"
                          class="fea icon-sm image-icon"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <!--end col-->

            <div class="col-md-6">
              <div class="row">
                <div class="col-12 p-1">
                  <div
                    class="work-container work-primary work-modern position-relative d-block overflow-hidden rounded"
                  >
                    <img
                      :src="
                        'http://pvrproperties.ai/imagenes/' +
                        fotos[4].Fotografia
                      "
                      class="img-fluid rounded shadow"
                      alt=""
                    />
                    <div class="overlay-work"></div>
                    <div class="icons text-center">
                      <a
                        href="../assets/images/real/property/single/4.jpg"
                        class="work-icon bg-white d-inline-flex rounded-pill lightbox"
                        ><i
                          data-feather="camera"
                          class="fea icon-sm image-icon"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12 p-1">
                  <div
                    class="work-container work-primary work-modern position-relative d-block overflow-hidden rounded"
                  >
                    <img
                      :src="
                        'http://pvrproperties.ai/imagenes/' +
                        fotos[5].Fotografia
                      "
                      class="img-fluid rounded shadow"
                      alt=""
                    />
                    <div class="overlay-work"></div>
                    <div class="icons text-center">
                      <a
                        href="../assets/images/real/property/single/5.jpg"
                        class="work-icon bg-white d-inline-flex rounded-pill lightbox"
                        ><i
                          data-feather="camera"
                          class="fea icon-sm image-icon"
                        ></i
                      ></a>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <div class="position-relative">
    <div class="shape overflow-hidden text-color-white">
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
  <!-- Hero End -->

  <!-- Start -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-8 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
        >
          <div class="work-detail">
            <h3 class="title mb-3">
              {{ propiedad?.Nombre }}
            </h3>
            <h5 class="title mb-3">
              {{ propiedad?.Domicilio }}
            </h5>

            <ul class="list-unstyled mt-3 d-flex align-items-center">
              <li class="d-flex align-items-center me-3">
                <i class="uil uil-users-alt fs-4 me-1 text-primary"></i>
                <span class="text-muted fs-5">{{ propiedad?.Huespedes }}</span>
              </li>

              <li class="d-flex align-items-center me-3">
                <i class="uil uil-bed-double fs-4 me-1 text-primary"></i>
                <span class="text-muted fs-5">{{ propiedad?.Recamaras }}</span>
              </li>

              <li class="d-flex align-items-center me-3">
                <i class="uil uil-bath fs-4 me-1 text-primary"></i>
                <span class="text-muted fs-5">{{ propiedad?.Baños }}</span>
              </li>

              <li class="d-flex align-items-center me-3">
                <i class="uil uil-moon fs-4 me-1 text-primary"></i>
                <span class="text-muted fs-5">{{ propiedad?.minNoches }}</span>
              </li>
            </ul>

            <p class="description text-muted">
              {{ propiedad?.Descripcion }}
            </p>
            <div
              class="card map map-height-two rounded map-gray border-0 mt-4 pt-2"
            >
              <div class="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style="border: 0"
                  class="rounded"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <!--end col-->

        <div class="col-lg-4 col-md-6 order-1 order-md-2">
          <div class="sticky-bar work-detail">
            <div class="p-4 rounded shadow">
              <ul class="list-unstyled mb-0">
                <li class="mt-3 d-flex">
                  <b class="fs-5">$ 45,231 MXN</b>
                  <div class="my-auto fs-6" style="margin-left: 5px">
                    <span class="">noche</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="p-4 rounded shadow">
              <h4 class="title">Servicios</h4>
              <ul class="list-unstyled mb-0">
                <li
                  v-for="caracteristica in propiedad?.caracteristicas.slice(
                    0,
                    5
                  )"
                  :key="caracteristica.IdPropCaracteristica"
                  class="mt-3 d-flex justify-content-between"
                >
                  <small class="text-muted">{{
                    caracteristica.Descripcion
                  }}</small>
                </li>
              </ul>
              <div class="text-center">
                <button
                  @click="openDetalles()"
                  type="button"
                  class="btn btn-soft-primary mt-3"
                >
                  Ver los {{ propiedad?.caracteristicas.length }} Servicios
                </button>
              </div>
            </div>
            <div class="text-center mt-4 pt-2">
              <h5>Have Question ? Get in touch!</h5>
              <a href="" class="btn btn-soft-primary mt-3"
                ><i class="mdi mdi-phone"></i> Contact us</a
              >
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
  <servicesModal
    :isOpen="isOpen"
    :servicios="propiedad?.caracteristicas"
    @close="isOpen = false"
  />
</template>

<script lang="ts">
import { apiApp } from "@/core/api/apiApp";
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import servicesModal from "../components/modals/ServicesModal.vue";
import type { Loading } from "element-plus/es/components/loading/src/service.mjs";

export interface DepartamentoDetalle {
  idPropiedad: number;
  Compartida: number;
  Nombre: string;
  Condominio: string;
  Huespedes: number;
  Recamaras: number;
  tipo: string;
  imagen: string;
  url: string;
  prioritaria: number;
  Estado: string;
  Zona: string;
  Domicilio: string;
  Ciudad: string;
  Descripcion: string;
  minNoches: string;
  Baños: string;
  CalendarioImportado: string;
  caracteristicas: Caracteristica[];
  servicios: any[];
}
export interface Caracteristica {
  IdPropCaracteristica: number;
  Descripcion: string;
  Cantidad: string;
  idPropiedad: number;
}
export interface FotosPropiedad {
  IdPropFotografia: number;
  Descripcion: string;
  Fotografia: string;
  idPropiedad: number;
}

export default defineComponent({
  components: {
    servicesModal,
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
  setup() {
    const route = useRoute();
    const propiedad = ref<DepartamentoDetalle>();
    const fotos = ref<FotosPropiedad[]>([]);
    const isOpen = ref(false);
    const loading = ref(false);

    function openDetalles() {
      isOpen.value = true;
    }

    onMounted(async () => {
      apiApp
        .get("propiedades/Caracteristicas/" + route.params.id)
        .then((data) => {
          propiedad.value = data.data;
          loading.value = false;
          apiApp.get("propiedades/imagenes/" + route.params.id).then((data) => {
            fotos.value = data.data;
            console.log(fotos.value);
            loading.value = true;
          });
        });
    });
    return {
      propiedad,
      isOpen,
      openDetalles,
      fotos,
      loading,
    };
  },
});
</script>
