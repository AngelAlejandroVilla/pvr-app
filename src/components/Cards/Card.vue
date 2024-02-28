<template>
  <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
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
            width: 400px; /* Tamaño predeterminado de ancho */
            height: auto;
          "
          alt=""
        />
        <ul class="list-unstyled shop-icons">
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-pills btn-primary"
              ><i class="uil uil-estate"></i
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-pills btn-primary"
              ><i class="uil uil-heart"></i
            ></a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-pills btn-primary"
              ><i class="uil uil-camera"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="card-body content p-4">
        <a class="text-dark product-name h6">{{ address }}</a>
        <ul
          class="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center"
        >
          <li class="d-flex align-items-center me-3">
            <i class="uil uil-compress-arrows fs-5 me-1 text-primary"></i>
            <span class="text-muted">{{ area }}</span>
          </li>
          <li class="d-flex align-items-center me-3">
            <i class="uil uil-bed-double fs-5 me-1 text-primary"></i>
            <span class="text-muted">{{ beds }}</span>
          </li>
          <li class="d-flex align-items-center">
            <i class="uil uil-bath fs-5 me-1 text-primary"></i>
            <span class="text-muted">{{ baths }}</span>
          </li>
        </ul>
        <ul class="list-unstyled d-flex justify-content-between mt-2 mb-0">
          <li class="list-inline-item mb-0">
            <span class="text-muted">Price</span>
            <p class="fw-semibold mb-0">{{ price }}</p>
          </li>
          <li class="list-inline-item mb-0 text-muted">
            <span class="text-muted">Rating</span>
            <ul class="fw-semibold text-warning list-unstyled mb-0">
              <li
                class="list-inline-item mb-0"
                v-for="n in Math.ceil(rating)"
                :key="n"
              >
                <i class="mdi mdi-star"></i>
              </li>
              <li class="list-inline-item mb-0 text-dark">
                {{ rating }} ({{ reviews }})
              </li>
            </ul>
          </li>
        </ul>
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
    area: {
      type: String,
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
