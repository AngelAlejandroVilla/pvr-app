<template>
  <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
    <div
      @click="GoDetail()"
      style="cursor: pointer"
      class="card shop-list border-0 shadow position-relative overflow-hidden"
    >
      <div class="shop-image position-relative overflow-hidden shadow">
        <img
          :src="'http://pvrproperties.ai/imagenes/' + imageSrc"
          class="img-fluid"
          style="
            width: 100%; /* Tamaño predeterminado de ancho */
            height: 200px;
          "
          alt=""
        />
        <ul class="list-unstyled shop-icons">
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-pills btn-primary"
              ><i class="uil uil-heart"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="card-body content p-4">
        <div class="row">
          <div class="col-md-8">
            <ul class="list-unstyled">
              <li class="list-inline-item mb-0 text-dark">
                <a class="custom-titulo">{{ address.toLocaleLowerCase() }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-unstyled">
              <li class="list-inline-item mb-0 text-dark">
                <i class="mdi mdi-star"></i>
                <span>{{ rating }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
              <li class="list-inline-item mb-0">
                <p class="fw-semibold mb-0">{{ price }}</p>
              </li>
            </ul>
          </div>
          <div class="col-md-8 my-auto">
            <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
              <li class="d-flex align-items-center me-3">
                <i class="uil uil-users-alt fs-6 me-1 text-secondary"></i>
                <span class="text-muted fw-bold">{{ huespedes }}</span>
              </li>
              <li class="d-flex align-items-center me-3">
                <i class="uil uil-bed-double fs-6 me-1 text-secondary"></i>
                <span class="text-muted fw-bold">{{ beds }}</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="uil uil-bath fs-6 me-1 text-secondary"></i>
                <span class="text-muted fw-bold">{{ baths }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--end items-->
  </div>
  <!--end col-->
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    idDep: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    huespedes: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const router = useRouter();
    const GoDetail = () => {
      router.push({ name: "PropiedadDetail", params: { id: props.idDep } });
    };
    onMounted(() => {});

    return {
      GoDetail,
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.custom-titulo {
  font-family: "Poppins", sans-serif;
  color: rgb(24, 24, 24);
  font-size: 15px;
  font-weight: 500;
}
</style>
