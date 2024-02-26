<template>
  <VForm id="kt_modal_new_card_form" class="form">
      <div
        class="card border-0 tab-pane fade show active"
        id="buy"
        role="tabpanel"
        aria-labelledby="buy-login"
      >
        <form class="card-body text-start">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="mb-3">
                <label class="form-label">Search:</label>
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  placeholder=""
                  name="Search"
                  v-model="Filtro.Search"
                />
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-3 col-md-6 col-12">
              <div class="mb-3">
                <label class="form-label">Category :</label>
                <Field
                  v-model="Filtro.Category"
                  name="Category"
                  class="form-select form-select-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Month"
                  as="select"
                >
                  <option value="Casas">Casas</option>
                  <option value="Villas">Villas</option>
                  <option value="Departamentos">Departamentos</option>
                </Field>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-3 col-md-6 col-12">
              <div class="mb-3">
                <label class="form-label">Min Price :</label>
                <Field
                  v-model="Filtro.MinPrice"
                  name="MinPrice"
                  class="form-select form-select-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Month"
                  as="select"
                  placeholder="Min price"
                >
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                </Field>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-3 col-md-6 col-12">
              <div class="mb-3">
                <label class="form-label">Max Price :</label>
                <Field
                  v-model="Filtro.MaxPrice"
                  name="MaxPrice"
                  class="form-select form-select-solid"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Month"
                  as="select"
                  placeholder="Max price"
                >
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                </Field>
              </div>
            </div>
            <!--end col-->
            <div class="col-lg-3 col-md-6 col-12">
              <a href="javascript:void(0)" class="btn btn-primary w-100"
                >Search now</a
              >
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </form>
        <!--end form-->
      </div>
  </VForm>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";

interface Filtro {
  Search: string;
  Category: string;
  MinPrice: string;
  MaxPrice: string;
}

export default defineComponent({
  name: "Filtros",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newCardModalRef = ref<null | HTMLElement>(null);

    const Filtro = ref<Filtro>({
      Search: "",
      Category: "",
      MinPrice: "",
      MaxPrice: "",
    });

    return {
      Filtro,
      submitButtonRef,
      newCardModalRef,
    };
  },
});
</script>
